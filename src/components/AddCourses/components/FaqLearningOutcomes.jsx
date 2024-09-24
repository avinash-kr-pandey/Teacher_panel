import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const FaqLearningOutcomes = ({
  courseDetails,
  setCourseDetails,
  whatWillILearn,
  setWhatWillILearn,
}) => {
  // handle what we will learn add and remove
  const addWhatWillILearn = () => {
    setWhatWillILearn([...whatWillILearn, ""]);
  };

  const removeWhatWillILearn = (indexToRemove) => {
    setWhatWillILearn(
      whatWillILearn.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleWhatWillILearnChange = (index, e) => {
    const updatedWhatWillILearn = [...whatWillILearn];
    updatedWhatWillILearn[index] = e.target.value;
    setWhatWillILearn(updatedWhatWillILearn);
  };

  const addFaq = () => {
    setCourseDetails({
      ...courseDetails,
      faqs: [...courseDetails.faqs, { question: "", answer: "" }],
    });
  };
  const handleFaqQuestionChange = (index, event) => {
    const newFaqs = [...courseDetails.faqs];
    newFaqs[index].question = event.target.value;
    setCourseDetails({ ...courseDetails, faqs: newFaqs });
  };
  const handleFaqAnswerChange = (index, event) => {
    const newFaqs = [...courseDetails.faqs];
    newFaqs[index].answer = event.target.value;
    setCourseDetails({ ...courseDetails, faqs: newFaqs });
  };

  const removeFaq = (index) => {
    const newFaqs = [...courseDetails.faqs];
    newFaqs.splice(index, 1);
    setCourseDetails({ ...courseDetails, faqs: newFaqs });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 py-6 pl-20 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem] ">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          FAQ & Learning Outcomes
        </h1>

        <div className="grid grid-cols-2 bg-gradient-to-r from-greenColor to-green-300 rounded-md">
          {/* {selectedClassType === "recorded" && ( */}
          <fieldset className=" px-10 py-4">
            <h1 className="text-[#fff] gap-4 font-semibold font-Montserrat flex items-center text-lg">
              Frequently Asked Questions{" "}
              <FaPlusCircle
                onClick={addFaq}
                className="cursor-pointer text-xl"
              />
            </h1>
            <div className="flex flex-col h-[11rem] overflow-y-auto scroll-smooth gap-3 p-3">
              {courseDetails?.faqs?.map((faq, index) => (
                <div key={index} className="flex flex-col gap-5">
                  <input
                    type="text"
                    placeholder="Question"
                    value={faq.question}
                    onChange={(e) => handleFaqQuestionChange(index, e)}
                    className="p-2 outline-none shadow-md rounded-md"
                  />
                  <div className="flex flex-row gap-3">
                    <textarea
                      placeholder="Answer"
                      value={faq.answer}
                      onChange={(e) => handleFaqAnswerChange(index, e)}
                      className="p-2 outline-none xl:w-[20rem] 2xl:w-[35rem] lg:w-[15rem] shadow-md border-2 rounded-md"
                    ></textarea>
                    <span
                      className="cursor-pointer"
                      onClick={() => removeFaq(index)}
                    >
                      ❌
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>
          {/* )} */}
          {/* {selectedClassType === "recorded" && ( */}
          <fieldset className="flex flex-col gap-2 px-6 py-6">
            <h1 className="font-semibold font-Montserrat flex gap-5 text-white text-xl items-center">
              What will I learn
              <FaPlusCircle
                onClick={addWhatWillILearn}
                className="cursor-pointer text-xl "
              />
            </h1>
            <div className="flex flex-col h-[11rem] overflow-y-scroll gap-3 ">
              {whatWillILearn?.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <input
                    placeholder="What Will I Learn"
                    value={item}
                    onChange={(e) => handleWhatWillILearnChange(index, e)}
                    className="p-2 h-auto outline-none shadow-md lg:w-[15rem] 2xl:w-[30rem] xl:w-[22rem] rounded-md "
                  />
                  <span
                    className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer"
                    onClick={() => removeWhatWillILearn(index)}
                  >
                    ❌
                  </span>
                </div>
              ))}
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default FaqLearningOutcomes;
