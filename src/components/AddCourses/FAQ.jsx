import React, { useState, useEffect, useRef } from 'react';
import CrossIcon from "../../Assets/Icons/cross-svgrepo-com.svg"

const FAQ = () => {
    const [course, setCourse] = useState({
        faqs: [
            {
                question: '',
                answer: ''
            }
        ]
    });

    const faqContainerRef = useRef(null); // Ref for FAQ container div

    const handleAddFAQ = () => {
        const updatedFaqs = [...course.faqs];
        updatedFaqs.push({
            question: '',
            answer: ''
        });
        setCourse({ ...course, faqs: updatedFaqs });
    };

    const handleRemoveFAQ = (index) => {
        const updatedFaqs = [...course.faqs];
        updatedFaqs.splice(index, 1);
        setCourse({ ...course, faqs: updatedFaqs });
    };

    useEffect(() => {
        // Scroll to the third added FAQ automatically
        if (course.faqs.length >= 3 && faqContainerRef.current) {
            faqContainerRef.current.scrollTo({
                top: faqContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [course.faqs]); // Trigger effect whenever course.faqs changes

    return (
        <div className=''>
            <div className='flex flex-col gap-2'>
                <p>FAQs</p>
                <div ref={faqContainerRef} className="overflow-y-auto max-h-96">
                    {course.faqs.map((faq, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <div className='flex items-center justify-between'>
                                <input
                                    className='w-[90%] border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'
                                    type="text"
                                    name={`question-${index}`}
                                    value={faq.question}
                                    onChange={(e) => {
                                        const updatedFaqs = [...course.faqs];
                                        updatedFaqs[index].question = e.target.value;
                                        setCourse((prevCourse) => ({ ...prevCourse, faqs: updatedFaqs }));
                                    }}
                                    placeholder='Question'
                                />
                                <img
                                    src={CrossIcon}
                                    alt="Remove FAQ"
                                    className="cursor-pointer w-4 h-4"
                                    onClick={() => handleRemoveFAQ(index)}
                                />
                            </div>
                            <textarea
                                className='w-[90%] border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'
                                name={`answer-${index}`}
                                value={faq.answer}
                                onChange={(e) => {
                                    const updatedFaqs = [...course.faqs];
                                    updatedFaqs[index].answer = e.target.value;
                                    setCourse((prevCourse) => ({ ...prevCourse, faqs: updatedFaqs }));
                                }}
                                placeholder='Answer'
                            />
                        </div>
                    ))}
                </div>
                <button type="button" onClick={handleAddFAQ} className='w-[90%] border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'>
                    + Add FAQ
                </button>
            </div>
        </div>
    );
};

export default FAQ;
