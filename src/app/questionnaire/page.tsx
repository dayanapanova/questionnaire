"use client";
import React, { useState } from 'react';
import Button from '../components/sections/basics/Button';
import CheckIcon from '../icons/CheckIcon';
import WarningIcon from '../icons/WarningIcon';

const quizData = {
    questions: [
        {
            question: "Which image best matches your hair loss?",
            options: [
                { display: "<img alt='Temples' src='https://s3-eu-west-1.amazonaws.com/manualco/questions/temples-hairloss.png'/>", value: "Temples", isRejection: false },
                { display: "<img alt='Temples & Crown' src='https://s3-eu-west-1.amazonaws.com/manualco/questions/templescrown-hairloss.png'/>", value: "Temples & Crown", isRejection: false },
                { display: "<img alt='Patchy' src='https://s3-eu-west-1.amazonaws.com/manualco/questions/patchy-hairloss.png'/>", value: "Patchy", isRejection: true },
                { display: "<img alt='Moderate' src='https://s3-eu-west-1.amazonaws.com/manualco/questions/moderate-hairloss.png'/>", value: "Moderate", isRejection: false },
                { display: "<img alt='Extensive' src='https://s3-eu-west-1.amazonaws.com/manualco/questions/extensive-hairloss.png'/>", value: "Extensive", isRejection: true },
                { display: "<img alt='Complete' src='https://s3-eu-west-1.amazonaws.com/manualco/questions/complete-hairloss.png'/>", value: "Complete", isRejection: true }
            ]
        },
        {
            question: "Have you ever been diagnosed with prostate cancer, or are you currently undergoing PSA/Prostate monitoring?",
            options: [
                { display: "Yes", value: true, isRejection: true },
                { display: "No", value: false, isRejection: false }
            ]
        },
        {
            question: "Have you ever been diagnosed with breast cancer or noticed any changes in your breast tissue such as lumps, pain, nipple discharge or swelling?",
            options: [
                { display: "Yes", value: true, isRejection: true },
                { display: "No", value: false, isRejection: false }
            ]
        }
    ]
};

export default function Questionnaire() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [result, setResult] = useState('');

    const negativeResult = "Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.";
    const positiveResult = "Great news! We have the perfect treatment for your hair loss. Proceed to www.manual.co, and prepare to say hello to your new hair!";

    const loadQuestion = () => {
        const currentQuestion = quizData.questions[currentQuestionIndex];
        return currentQuestion;
    };

    const handleOptionClick = (index: number) => {
        const answers = [...userAnswers];
        answers[currentQuestionIndex] = index;
        setUserAnswers(answers);
    };

    const handleNext = () => {
        const currentQuestion = loadQuestion();
        const selectedOption = currentQuestion.options[userAnswers[currentQuestionIndex]];

        if (selectedOption.isRejection) {
            setResult(negativeResult);
        } else {
            if (currentQuestionIndex < quizData.questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                setResult(positiveResult);
            }
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = loadQuestion();

    return (
        <div className="flex items-center justify-center overflow-auto bg-[#E8EFE9] text-[#0B3B3C] h-screen">
            {result ? (
                <div>
                    <div className='flex justify-center'>
                        {result === positiveResult ? (
                            <CheckIcon className='w-20 h-20 text-[#0B3B3C]' />
                        ) : <WarningIcon className='w-20 h-20 text-[#7E0707]' />}
                    </div>
                    <h1 className="mt-2 text-2xl font-bold text-center">{result}</h1>
                </div>
            ) : (
                <div className="w-full max-w-md flex flex-col">
                    <h2 className="text-xl font-bold mb-4 text-center">{currentQuestion.question}</h2>
                    <div className="flex-1 overflow-y-auto max-h-[600px] mb-4">
                        {currentQuestion.options.map((option, index) => (
                            <div
                                key={`${index}-${option.value}`}
                                className={`option flex justify-center mb-2 p-4 border rounded cursor-pointer bg-[#FFF] ${userAnswers[currentQuestionIndex] === index ? 'border-[#0B3B3C]' : 'border-gray-300'}`}
                                onClick={() => handleOptionClick(index)}
                                dangerouslySetInnerHTML={{ __html: option.display }}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-3 mb-3">
                        <Button text="Back" onClick={handleBack} disabled={currentQuestionIndex === 0} />
                        <Button text="Next" onClick={handleNext} />
                    </div>
                </div>
            )}
        </div>
    );
}
