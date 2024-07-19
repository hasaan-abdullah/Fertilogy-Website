"use client";
import React, { useState } from 'react';
import { BsInfoCircle } from "react-icons/bs";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

interface QuestionBlockProps {
    question: string;
    name: string;
    info: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInfoClick: (info: string) => void;
}

const QuestionBlock: React.FC<QuestionBlockProps> = ({ question, name, info, value, onChange, onInfoClick }) => {
    return (
        <div className="flex items-center mb-4">
            <label className={`block text-lg font-medium text-black w-3/5 ${value ? 'hover:bg-gray-200' : ''}`}>
                {question}
            </label>
            <div className="flex items-center w-2/5 justify-end">
                <label className="inline-flex items-center">
                    <input
                        type="radio"
                        name={name}
                        value="Yes"
                        className="form-radio h-4 w-4"
                        onChange={onChange}
                        checked={value === "Yes"}
                    />
                    <span className={`ml-2 text-lg ${value === "Yes" ? 'text-green-500' : 'text-gray-500'}`}>
                        Yes
                    </span>
                </label>
                <label className="inline-flex items-center ml-4">
                    <input
                        type="radio"
                        name={name}
                        value="No"
                        className="form-radio h-4 w-4"
                        onChange={onChange}
                        checked={value === "No"}
                    />
                    <span className={`ml-2 text-lg ${value === "No" ? 'text-red-500' : 'text-gray-500'}`}>
                        No
                    </span>
                </label>
                <button type="button" className="ml-4 text-gray-500" onClick={() => onInfoClick(info)}>
                    <BsInfoCircle size={16} />
                </button>
            </div>
        </div>
    );
};

export default function SymptomForm() {
    const [modalContent, setModalContent] = useState<string | null>(null);
    const [warning, setWarning] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        age: "",
        menstrualIrregularities: "",
        hirsutism: "",
        acneOrOilySkin: "",
        difficultyLosingWeight: "",
        familyHistoryOfPCOS: "",
        diagnosedInsulinResistance: "",
        fatigueOrLowEnergy: "",
        thinningHair: "",
        pelvicPain: "",
        darkPatchesSkin: "",
        moodChanges: "",
        highBloodPressure: "",
        irregularOvulation: "",
        sleepDisturbances: "",
        highCholesterol: "",
        difficultyConcentrating: "",
        infertilityIssues: "",
        bloating: ""
    });

    const handleInfoClick = (info: string) => {
        setModalContent(info);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const unanswered = Object.values(formData).some(value => value === "");
        if (unanswered) {
            setWarning("Please ensure that all fields are answered before submitting the form.");
            return;
        }
        setWarning(null);
        generatePDF();
    };

    const generatePDF = () => {
        const doc = new jsPDF();

        // Add Title
        doc.setFontSize(18);
        doc.text("PCOS Symptom Report", 20, 20);

        // Personal Information Section
        doc.setFontSize(14);
        doc.text("Personal Information", 20, 30);
        doc.autoTable({
            startY: 35,
            head: [['', '']],
            body: [
                ['Name', formData.name],
                ['Gender', formData.gender],
                ['Age', formData.age],
            ],
            styles: { fontSize: 12 },
        });

        // Symptoms Section
        doc.setFontSize(14);
        const previousTableY = (doc as any).lastAutoTable.finalY; // Get the final Y position of the last table
        doc.text("Symptoms", 20, previousTableY + 10);
        doc.autoTable({
            startY: previousTableY + 15,
            head: [['Symptom', 'Response']],
            body: [
                ['Irregular Menstrual Cycles', formData.menstrualIrregularities],
                ['Excessive Hair Growth', formData.hirsutism],
                ['Persistent Acne or Oily Skin', formData.acneOrOilySkin],
                ['Difficulty Losing Weight', formData.difficultyLosingWeight],
                ['Family History of PCOS', formData.familyHistoryOfPCOS],
                ['Diagnosed with Insulin Resistance or Type 2 Diabetes', formData.diagnosedInsulinResistance],
                ['Frequent Fatigue or Low Energy Levels', formData.fatigueOrLowEnergy],
                ['Thinning Hair or Hair Loss on Scalp', formData.thinningHair],
                ['Pelvic Pain or Discomfort', formData.pelvicPain],
                ['Dark or Thick Patches of Skin', formData.darkPatchesSkin],
                ['Changes in Mood or Increased Anxiety/Depression', formData.moodChanges],
                ['High Blood Pressure', formData.highBloodPressure],
                ['Irregular or Skipped Ovulation', formData.irregularOvulation],
                ['Sleep Disturbances or Issues', formData.sleepDisturbances],
                ['High Levels of Cholesterol or Triglycerides', formData.highCholesterol],
                ['Difficulty Concentrating or Brain Fog', formData.difficultyConcentrating],
                ['Difficulty Conceiving or Infertility Issues', formData.infertilityIssues],
                ['Bloating or Abdominal Discomfort', formData.bloating],
            ],
            styles: { fontSize: 12 },
        });

        // Calculate the likelihood of having PCOS based on responses
        const symptoms = [
            formData.menstrualIrregularities,
            formData.hirsutism,
            formData.acneOrOilySkin,
            formData.difficultyLosingWeight,
            formData.familyHistoryOfPCOS,
            formData.diagnosedInsulinResistance,
            formData.fatigueOrLowEnergy,
            formData.thinningHair,
            formData.pelvicPain,
            formData.darkPatchesSkin,
            formData.moodChanges,
            formData.highBloodPressure,
            formData.irregularOvulation,
            formData.sleepDisturbances,
            formData.highCholesterol,
            formData.difficultyConcentrating,
            formData.infertilityIssues,
            formData.bloating,
        ];

        const positiveResponses = symptoms.filter(response => response === "Yes").length;
        let likelihood = "";

        if (positiveResponses >= 10) {
            likelihood = "High likelihood of PCOS. It is recommended to consult a healthcare provider for further evaluation.";
        } else if (positiveResponses >= 5) {
            likelihood = "Moderate likelihood of PCOS. Please consider discussing these symptoms with a healthcare provider.";
        } else {
            likelihood = "Low likelihood of PCOS based on the provided symptoms. However, if you have concerns, it is always best to consult with a healthcare provider.";
        }

        // Feedback Section
        doc.setFontSize(14);
        const lastTableY = (doc as any).lastAutoTable.finalY; // Get the final Y position of the last table
        doc.text("Feedback Report", 20, lastTableY + 10);
        doc.autoTable({
            startY: lastTableY + 15,
            head: [['Likelihood of PCOS']],
            body: [[likelihood]],
            styles: { fontSize: 12 },
        });

        doc.save(`${formData.name} health background check form.pdf`);
    };

    return (
        <div className="min-h-screen bg-white py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-4xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <form onSubmit={handleSubmit}>
                        <div className="max-w-2xl mx-auto">
                            <div className='flex items-center justify-center mb-4 text-center font-bold font-serif text-3xl text-[#94204e]'>
                                PCOS Symptom Checker Form
                            </div>

                            <div className="mb-4 flex items-center">
                                <label className="block text-xl text-black w-1/4"><b>Name</b></label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Please enter your full name"
                                    className="form-input block w-3/4 mt-1 pl-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    onChange={handleChange}
                                    value={formData.name}
                                />
                            </div>

                            <div className="mb-4 flex items-center">
                                <label className="block text-lg font-medium text-black w-1/4"><b>Gender</b></label>
                                <select name="gender" className="form-select block w-3/4 mt-1 pl-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} value={formData.gender}>
                                    <option value="" disabled>Select your gender</option>
                                    <option value="female">Female</option>
                                    <option value="transgender">Transgender</option>
                                </select>
                            </div>

                            <div className="mb-4 flex items-center">
                                <label className="block text-lg font-medium text-black w-1/4"><b>Age</b></label>
                                <select name="age" className="form-select block w-3/4 mt-1 pl-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" onChange={handleChange} value={formData.age}>
                                    <option value="" disabled>Select your age</option>
                                    {[...Array(89).keys()].map(age => (
                                        <option key={age} value={age + 12}>{age + 12}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-4">
                                <QuestionBlock
                                    question="Do you experience irregular menstrual cycles?"
                                    name="menstrualIrregularities"
                                    info="Irregular periods are menstrual cycles that vary significantly in length, frequency, or flow, deviating from the typical 28-day cycle."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.menstrualIrregularities}
                                />
                                <QuestionBlock
                                    question="Do you have excessive hair growth on the face or body?"
                                    name="hirsutism"
                                    info="Hirsutism is excessive hair growth on the face or body, often due to hormonal imbalance."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.hirsutism}
                                />
                                <QuestionBlock
                                    question="Do you suffer from persistent acne or unusually oily skin?"
                                    name="acneOrOilySkin"
                                    info="Persistent acne or unusually oily skin can be a sign of hormonal changes or underlying health issues."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.acneOrOilySkin}
                                />
                                <QuestionBlock
                                    question="Do you have difficulty managing your weight or losing weight?"
                                    name="difficultyLosingWeight"
                                    info="Difficulty losing weight may be related to hormonal imbalances or metabolic disorders."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.difficultyLosingWeight}
                                />
                                <QuestionBlock
                                    question="Is there a family history of Polycystic Ovary Syndrome (PCOS)?"
                                    name="familyHistoryOfPCOS"
                                    info="A family history of PCOS can increase your risk of developing the condition."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.familyHistoryOfPCOS}
                                />
                                <QuestionBlock
                                    question="Have you been diagnosed with insulin resistance or Type 2 diabetes?"
                                    name="diagnosedInsulinResistance"
                                    info="Insulin resistance and Type 2 diabetes are conditions that affect how your body processes sugar."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.diagnosedInsulinResistance}
                                />
                                <QuestionBlock
                                    question="Do you frequently feel fatigued or have low energy levels?"
                                    name="fatigueOrLowEnergy"
                                    info="Frequent fatigue or low energy levels can be symptoms of various health conditions, including hormonal imbalances."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.fatigueOrLowEnergy}
                                />
                                <QuestionBlock
                                    question="Have you noticed thinning hair or hair loss on your scalp?"
                                    name="thinningHair"
                                    info="Thinning hair or hair loss on the scalp can be a sign of hormonal changes or other health issues."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.thinningHair}
                                />
                                <QuestionBlock
                                    question="Do you experience pelvic pain or discomfort?"
                                    name="pelvicPain"
                                    info="Pelvic pain or discomfort can be a symptom of PCOS or other gynecological conditions."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.pelvicPain}
                                />
                                <QuestionBlock
                                    question="Do you have dark or thick patches of skin on your neck, armpits, or under the breasts?"
                                    name="darkPatchesSkin"
                                    info="Dark or thick patches of skin, known as acanthosis nigricans, can be a sign of insulin resistance."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.darkPatchesSkin}
                                />
                                <QuestionBlock
                                    question="Have you noticed changes in your mood or increased levels of anxiety or depression?"
                                    name="moodChanges"
                                    info="Mood changes, anxiety, or depression can be associated with hormonal imbalances and PCOS."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.moodChanges}
                                />
                                <QuestionBlock
                                    question="Do you have high blood pressure?"
                                    name="highBloodPressure"
                                    info="High blood pressure can be associated with PCOS and other metabolic disorders."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.highBloodPressure}
                                />
                                <QuestionBlock
                                    question="Have you noticed irregular or skipped ovulation?"
                                    name="irregularOvulation"
                                    info="Irregular or skipped ovulation can be a sign of PCOS and affect fertility."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.irregularOvulation}
                                />
                                <QuestionBlock
                                    question="Do you have sleep disturbances or issues such as sleep apnea?"
                                    name="sleepDisturbances"
                                    info="Sleep disturbances or sleep apnea can be associated with PCOS and metabolic issues."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.sleepDisturbances}
                                />
                                <QuestionBlock
                                    question="Do you have high levels of cholesterol or triglycerides?"
                                    name="highCholesterol"
                                    info="High levels of cholesterol or triglycerides can be linked to PCOS and metabolic syndrome."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.highCholesterol}
                                />
                                <QuestionBlock
                                    question="Do you experience difficulty concentrating or brain fog?"
                                    name="difficultyConcentrating"
                                    info="Difficulty concentrating or brain fog can be related to hormonal imbalances and PCOS."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.difficultyConcentrating}
                                />
                                <QuestionBlock
                                    question="Have you had difficulty conceiving or infertility issues?"
                                    name="infertilityIssues"
                                    info="Difficulty conceiving or infertility issues can be a sign of PCOS and other reproductive health conditions."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.infertilityIssues}
                                />
                                <QuestionBlock
                                    question="Do you experience bloating or abdominal discomfort?"
                                    name="bloating"
                                    info="Bloating or abdominal discomfort can be symptoms of PCOS and other digestive issues."
                                    onInfoClick={handleInfoClick}
                                    onChange={handleChange}
                                    value={formData.bloating}
                                />
                            </div>

                            {warning && (
                                <div className="text-red-500 text-center mt-4 font-bold text-lg">
                                    {warning}
                                </div>
                            )}

                            <div className="mt-6 flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-white bg-[#94204e] hover:bg-black rounded-lg shadow flex items-center justify-center text-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {modalContent && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
                        <div className="text-lg font-medium text-gray-900 mb-4">
                            For Your Information
                        </div>
                        <div className="text-gray-700 mb-4">
                            {modalContent}
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center text-lg"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
