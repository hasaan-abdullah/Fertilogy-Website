'use client';
import { useState, useEffect, ChangeEvent, FormEvent, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { motion } from 'framer-motion';
import plusicon from '../../public/assests/plusicon.svg';
import chaticon from '../../public/assests/chaticon.svg';
import trashicon from '../../public/assests/trash.svg';
import newicon from '../../public/assests/new.svg';
import searchbar from '../../public/assests/searchbar.svg';
import pcoslogo from '../../public/assests/pcoslogo.svg';
import explainlogo from '../../public/assests/explainlogo.svg';
import medical from '../../public/assests/medicalreport.svg';
import ultrasound from '../../public/assests/ultrasound.svg';
import usericon from '../../public/assests/user.svg';
import moon from '../../public/assests/moon.svg';
import updates from '../../public/assests/updatesandfaq.svg';
import logout from '../../public/assests/logout.svg';
import { IoHomeSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';

interface Message {
  type: 'user' | 'bot';
  text: string;
}

interface ChatHistory {
  id: string;
  messages: Message[];
  title: string;
}

export default function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [sidebarMessage, setSidebarMessage] = useState<string | null>(null);
  const [showSections, setShowSections] = useState(true);
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state
  const formRef = useRef<HTMLFormElement>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    if (messages.length > 0 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const formatMarkdown = (text: string): string => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert **text** to <strong>text</strong>
      .replace(/\n/g, '<br>') // Convert new lines to <br>
      .replace(/\*(.*?)\*/g, '<em>$1</em>'); // Convert *text* to <em>text</em>
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    try {
      const res = await axios.post(
        'https://pcoschatbot.app.n8n.cloud/webhook/chatbots',
        {
          body: { chatInput: message },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          }
        }
      );

      console.log('API response:', res.data);

      const responseData = res.data.response;
      if (responseData) {
        const formattedResponse = formatMarkdown(responseData.text);

        setResponse(formattedResponse || 'No response received');

        // Add the bot's response to the messages state
        const newBotMessage: Message = { type: 'bot', text: formattedResponse };
        setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      } else {
        setResponse('Unexpected response structure');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setResponse('Error sending message');
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleInputSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userInput = message.trim().toLowerCase();
    if (!userInput) return;

    const newUserMessage: Message = { type: 'user', text: message };
    const newMessages: Message[] = [...messages, newUserMessage];
    if (!sidebarMessage) {
      setSidebarMessage(message);
    }
    setShowSections(false);

    setMessages(newMessages);
    setMessage('');
    handleSubmit(event);
  };

  const handleQuestionClick = (question: string) => {
    setMessage(question);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.requestSubmit();
      }
    }, 100);
  };

  const handleNewChat = () => {
    if (messages.length > 0) {
      const newChat: ChatHistory = {
        id: uuidv4(),
        messages: [...messages],
        title: sidebarMessage || `Chat ${chatHistory.length + 1}`,
      };
      setChatHistory([newChat, ...chatHistory]);
    }

    setMessages([]);
    setSidebarMessage(null);
    setShowSections(true);
    setCurrentChatId(uuidv4());
  };

  const handleChatClick = (chatId: string) => {
    const chat = chatHistory.find((chat) => chat.id === chatId);
    if (chat) {
      setMessages(chat.messages);
      setSidebarMessage(chat.title);
      setShowSections(false);
      setCurrentChatId(chatId);
    }
  };

  const handleClearConversation = () => {
    setMessages([]);
    setSidebarMessage(null);
    setShowSections(true);
    setCurrentChatId(null);
  };

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex h-screen ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <div className='w-1/6 bg-[#7c1f43] text-white flex flex-col fixed h-full'>
        <div className='p-4 flex flex-col items-center justify-center'>
          <button
            className='flex items-center justify-center gap-2 w-full border border-white border-opacity-20 rounded p-2 text-base hover:bg-white hover:text-[#6D273F] transition-transform hover:-translate-y-1'
            onClick={handleNewChat}
          >
            <span>New Chat</span>
          </button>
        </div>
        <div className='flex-grow overflow-y-auto p-4 text-base'>
          {chatHistory.map((chat) => (
            <div
              key={chat.id}
              className='flex items-center gap-2 p-2 cursor-pointer hover:bg-[#572033] transition-transform hover:translate-x-2'
              onClick={() => handleChatClick(chat.id)}
            >
              <Image src={chaticon} alt='chat' className='h-14' />
              {chat.title}
            </div>
          ))}
          {sidebarMessage && (
            <div className='flex items-center gap-2 p-2 text-base'>
              <Image src={chaticon} alt='chat' className='h-4' />
              {sidebarMessage}
            </div>
          )}
        </div>
        <div className='p-4 text-base'>

          <div
            className='flex items-center gap-2 p-2 cursor-pointer hover:bg-[#000000] transition-transform hover:translate-x-2'
            onClick={handleClearConversation}
          >
            <Image src={trashicon} alt='clear' className='h-4' />
            Clear Conversation
          </div>
          <div
            className='flex items-center gap-2 p-2 cursor-pointer hover:bg-[#000000] transition-transform hover:translate-x-2'
            onClick={handleToggleTheme}
          >
            <Image src={moon} alt='theme' className='h-4' />
            {isDarkMode ? 'White Mode' : 'Dark Mode'}
          </div>
          {[
            { icon: usericon, text: 'Upgrade to Plus', extraIcon: newicon },
            { icon: updates, text: 'Updates & FAQ' },
            { icon: logout, text: 'Logout' },
          ].map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-2 p-2 cursor-pointer hover:bg-[#000000]  transition-transform hover:translate-x-2'
            >
              <Image src={item.icon} alt={item.text} className='h-4' />
              {item.text}
              {item.extraIcon && <Image src={item.extraIcon} alt='extra' className='ml-auto h-4' />}
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col w-5/6 ml-[20%]'>
        <div className='ml-[95%] mt-4 cursor-pointer' onClick={() => router.push('/')}>
          <IoHomeSharp className='text-3xl' />
        </div>

        <div className='flex flex-col items-center justify-center mt-6'>
          {showSections && (
            <>
              <Image src={pcoslogo} alt='pcoslogo' className='h-28 w-28' />
              <div className='font-bold text-3xl mt-2 text-[#7C3A50]'>Fertilogy AI</div>
            </>
          )}
        </div>
        {showSections && (
          <div className='flex justify-center mt-8'>
            {[
              {
                logo: explainlogo,
                title: 'Explain',
                items: [
                  '“Explain PCOS in a simple understandable manner”',
                  '“How does PCOS impact hormone levels?”',
                  '“How does PCOS affect fertility?”',
                ],
              },
              {
                logo: medical,
                title: 'Medical Reports',
                items: [
                  '“Can you check my report and tell me am I fine?”',
                  '“What does increasing androgen level in my report mean?”',
                  '“TSH and FSH levels, interpret please?”',
                ],
              },
              {
                logo: ultrasound,
                title: 'Ultrasound Images',
                items: [
                  '“What does PCOS look like on an ultrasound?”',
                  '“Can you interpret my likeliness of having PCOS?”',
                  '“Does my follicle size in ovary matter?”',
                ],
              },
            ].map((section, index) => (
              <div key={index} className='m-4 text-center'>
                <Image src={section.logo} alt={section.title} className='mx-auto mb-4 h-16 w-16' />
                <div className='font-bold text-xl mb-4'>{section.title}</div>
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className='m-2 p-4 border border-gray-300 rounded bg-[#F7ECF1] cursor-pointer hover:bg-[#e0d6dc] transition-transform hover:scale-105'
                    onClick={() => handleQuestionClick(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        <div className='flex flex-col items-center justify-center flex-grow p-4 relative'>
          <div className='max-w-3xl w-full h-full flex flex-col'>
            <div className='flex-grow overflow-y-auto p-4' style={{ paddingBottom: '100px' }}>
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.type} ${msg.type === 'user' ? 'user-msg bg-gray-200 text-right' : 'bot-msg text-left'} mb-4 text-lg p-3 rounded-md`}
                  style={msg.type === 'user' ? { backgroundColor: '#f1f1f1', marginLeft: 'auto' } : { backgroundColor: '#fff' }}
                >
                  {msg.type === 'bot' && (
                    <div className='flex items-center gap-2 mb-1'>
                      <Image src={pcoslogo} alt='Fertilogy AI' className='h-6 w-6' />
                      <strong>Fertilogy AI</strong>
                    </div>
                  )}
                  <div className='pl-8' dangerouslySetInnerHTML={{ __html: msg.text }} />
                </div>
              ))}
              {loading && (
                <div className='bot-msg text-left mb-4 text-lg p-3 rounded-md bg-white'>
                  <div className='flex items-center gap-2 mb-1'>
                    <Image src={pcoslogo} alt='Fertilogy AI' className='h-6 w-6' />
                    <strong>Fertilogy AI</strong>
                  </div>
                  <div className='pl-8 text-6xl font-bold'>
                    <motion.div
                      className='loading-dots'
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.5, // Slower stagger
                            repeat: Infinity,
                            repeatDelay: 0.5, // Add delay between repeats
                          }
                        }
                      }}
                    >
                      {['.', '.', '.'].map((dot, index) => (
                        <motion.span
                          key={index}
                          variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 },
                          }}
                          transition={{
                            duration: 1.5, // Longer duration
                            repeat: Infinity,
                            repeatType: 'loop',
                            ease: 'easeInOut',
                          }}
                          style={{ display: 'inline-block', margin: '0 2px' }}
                        >
                          {dot}
                        </motion.span>
                      ))}
                    </motion.div>

                  </div>
                </div>
              )}
              <div ref={messagesEndRef}></div>
            </div>
            <div className='p-4 fixed bottom-0 left-0 w-5/6 ml-[18%] bg-wh121 qite  flex items-center justify-center'>
              <form ref={formRef} onSubmit={handleInputSubmit} className='flex items-center w-full max-w-2xl gap-2'>
                <div className='flex flex-grow items-center bg-gray-100 rounded-full '>
                  <input
                    className='flex-grow p-2 bg-transparent border-none outline-none rounded-full pl-4'
                    value={message}
                    onChange={handleInputChange}
                    placeholder='Type your question...'
                  />
                  <button type='submit' className='p-2 rounded-full text-white hover:bg-black transition-transform hover:scale-105'>
                    <Image src={searchbar} alt='Search' className='h-5 w-5' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
