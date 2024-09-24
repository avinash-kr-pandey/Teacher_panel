import React, { useState, useEffect, useRef } from 'react';
import CrossIcon from "../../Assets/Icons/cross-svgrepo-com.svg";

const FAQ = ({ onDataUpdate }) => {
    const [faqs, setFaqs] = useState([
        { question: '', answer: '' }
    ]);

    const faqContainerRef = useRef(null); // Ref for FAQ container div

    const handleAddFAQ = () => {
        setFaqs((prevFaqs) => [
            ...prevFaqs,
            { question: '', answer: '' }
        ]);
    };

    const handleRemoveFAQ = (index) => {
        setFaqs((prevFaqs) => prevFaqs.filter((_, i) => i !== index));
    };

    const handleInputChange = (index, field, value) => {
        setFaqs((prevFaqs) => {
            const updatedFaqs = [...prevFaqs];
            updatedFaqs[index][field] = value;
            return updatedFaqs;
        });
    };

    useEffect(() => {
        // Scroll to the third added FAQ automatically
        if (faqs.length >= 3 && faqContainerRef.current) {
            faqContainerRef.current.scrollTo({
                top: faqContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
        // Notify parent component of data changes
        onDataUpdate(faqs);
    }, [faqs, onDataUpdate]);

    return (
        <div className='flex flex-col gap-2'>
            <p>FAQs</p>
            <div ref={faqContainerRef} className="overflow-y-auto max-h-96">
                {faqs.map((faq, index) => (
                    <div key={index} className='flex flex-col gap-2 mb-4'>
                        <div className='flex items-center justify-between'>
                            <input
                                className='w-[90%] border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'
                                type="text"
                                value={faq.question}
                                onChange={(e) => handleInputChange(index, 'question', e.target.value)}
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
                            value={faq.answer}
                            onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
                            placeholder='Answer'
                        />
                    </div>
                ))}
            </div>
            <button
                type="button"
                onClick={handleAddFAQ}
                className='w-[90%] border border-[#808080] px-2 py-1 text-[14px] outline-none font-normal'
            >
                + Add FAQ
            </button>
        </div>
    );
};

export default FAQ;
