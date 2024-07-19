import Head from 'next/head';

interface QuestionBlockProps {
    question: string;
    name: string;
}

export default function HealthCheckForm() {
    return (
        <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            
            
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <form>

                        <div className="max-w-md mx-auto">
                        <div className='flex items-center justify-center mb-[15px] text-center font-bold font-serif text-lg'>Health Background Check Form</div>
                            <div className="grid grid-cols-1 gap-5">

                                <QuestionBlock
                                    question="Do you experience irregular menstrual cycles?"
                                    name="menstrualIrregularities"
                                />
                                <QuestionBlock
                                    question="Do you have excessive hair growth on the face or body?"
                                    name="hirsutism"
                                />
                                <QuestionBlock
                                    question="Do you suffer from persistent acne or unusually oily skin?"
                                    name="acneOrOilySkin"
                                />
                                <QuestionBlock
                                    question="Do you have difficulty managing your weight or losing weight?"
                                    name="difficultyLosingWeight"
                                />
                                <QuestionBlock
                                    question="Is there a family history of Polycystic Ovary Syndrome (PCOS)?"
                                    name="familyHistoryOfPCOS"
                                />
                                <QuestionBlock
                                    question="Have you been diagnosed with insulin resistance or Type 2 diabetes?"
                                    name="diagnosedInsulinResistance"
                                />
                                <QuestionBlock
                                    question="Do you frequently feel fatigued or have low energy levels?"
                                    name="fatigueOrLowEnergy"
                                />
                                <QuestionBlock
                                    question="Have you noticed thinning hair or hair loss on your scalp?"
                                    name="thinningHair"
                                />

                            </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg shadow"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({ question, name }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {question}
            </label>
            <div className="mt-2">
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name={name}
                        value="Yes"
                        className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center ml-6">
                    <input
                        type="radio"
                        name={name}
                        value="No"
                        className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2">No</span>
                </label>
            </div>
        </div>
    );
}
