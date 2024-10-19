"use client";
import React, { useState } from 'react';
import Button from '../components/basics/Button';
import Alert from '../components/basics/Alert';
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

const negativeResult = "Unfortunately, we are unable to prescribe this medication for you. <br/> This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. <br/> You should discuss this further with your GP or specialist if you would still like this medication.";
const positiveResult = "Great news! <br> We have the perfect treatment for your hair loss. <br/ >Proceed to <a href=https://www.manual.co target=_blank> www.manual.co</a>, and prepare to say hello to your new hair!";

export default function Questionnaire() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState<number[]>([]);
    const [result, setResult] = useState('');

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
        <div className="flex items-center justify-center overflow-auto h-screen bg-footer-green">
            {result ? (
                <Alert
                    message={result}
                    type={result === positiveResult ? "success" : "warning"}
                    icon={result === positiveResult ? <CheckIcon className='w-10 h-10 mr-2' /> : <WarningIcon className='w-10 h-10 mr-2' />}
                />
            ) : (
                <div className="w-full max-w-md flex flex-col p-4 sm:p-6 lg:p-8">
                    <h4 className="mt-2 mb-4 text-center text-heading-4 text-dark-green">{currentQuestion.question}</h4>
                    <div className="overflow-y-auto max-h-[600px] mb-4">
                        {currentQuestion.options.map((option, index) => (
                            <div
                                key={`${index}-${option.value}`}
                                className={`option flex justify-center mb-2 p-4 border rounded uppercase cursor-pointer bg-[#FFF] ${userAnswers[currentQuestionIndex] === index ? 'border-2 border-dark-green' : 'border-1 border-[#CCC]'}`}
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
