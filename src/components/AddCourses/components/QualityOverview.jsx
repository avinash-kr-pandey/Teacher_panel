import { FaAngleDown } from "react-icons/fa";

const QualityOverview = ({ courseDetails, setCourseDetails }) => {
  const handleInputChange = (e) => {
    setCourseDetails({
      ...courseDetails,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  const DropdownComponent = ({ options, value, onChange, name, label }) => {
    return (
      <div className="relative w-full lg:max-w-sm mx-4 gap-1">
        <p className="text-[#fff] text-lg font-semibold font-Montserrat">
          {label}
        </p>
        <div className="relative">
          <select
            onChange={(event) => onChange(event, name)} // Pass event and name
            value={value}
            name={name}
            className="w-full p-2.5 text-gray-500 bg-white border-none rounded-md shadow-md outline-none appearance-none focus:border-indigo-600"
          >
            <option value="">select {label}</option>
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FaAngleDown className="absolute top-0 right-0 mt-3 mr-1 text-gray-600 pointer-events-none" />
        </div>
      </div>
    );
  };

  // Handler for both dropdowns
  const handleSelectChange = (event, name) => {
    const value = event.target.value;
    console.log(name, value);
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const levelOptions = ["Beginner", "Intermediate", "Advance"];

  return (
    <div>
      {/* Course Quality and Overview */}
      <fieldset className="flex flex-col gap-4 pl-20 pt-6 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem]">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Course Quality and Overview
        </h1>
        <div className="flex flex-col gap-4 py-4 px-4 shadow-md bg-gradient-to-r from-greenColor to-green-300 rounded-md">
          <div className="flex items-center justify-between ">
            <DropdownComponent
              name="courseType"
              label={"Course"}
              options={["public", "minorDegree", "internship"]}
              value={courseDetails.courseType}
              onChange={(event, name) => handleSelectChange(event, name)}
            />

            {courseDetails.courseType === "minorDegree" && (
              <DropdownComponent
                label={"Credits"}
                name="credits"
                options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                value={courseDetails.credits}
                onChange={(event, name) => handleSelectChange(event, name)}
              />
            )}
            <div className="relative w-full lg:max-w-sm mx-4">
              <label
                htmlFor="level"
                className="text-[#fff] text-lg font-semibold font-Montserrat"
              >
                Level
              </label>
              <div className="relative">
                <select
                  name="level"
                  value={courseDetails.level}
                  onChange={handleInputChange}
                  className="w-full p-2.5 text-gray-500 bg-white border-none rounded-md shadow-md outline-none appearance-none focus:border-indigo-600"
                >
                  <option>Select Level</option>
                  {levelOptions.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                <FaAngleDown className="absolute top-0 right-0 mt-3 mr-1 text-gray-600 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="p-2">
            <p
              className="text-[#fff] text-lg
             font-semibold font-Montserrat"
            >
              Overview
            </p>
            <textarea
              className="mt-2 w-full focus:outline-none shadow-md border-2 p-2 rounded-md"
              label="Overview"
              type="text"
              placeholder="Course Overview"
              name="overview"
              value={courseDetails.overview}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default QualityOverview;
