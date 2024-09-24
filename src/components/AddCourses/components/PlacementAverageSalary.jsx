import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const PlacementAverageSalary = ({
  companies,
  setCompanies,
  placementOpportunities,
  setPlacementOpportunities,
}) => {
  const handleCompanyChange = (index, field, e) => {
    console.log(
      `Updating company at index ${index} - field: ${field}, value: ${e.target.value}`
    );
    const updatedCompanies = [...companies];
    const updatedCompany = { ...updatedCompanies[index] };

    if (field === "from" || field === "to") {
      const value = Number(e.target.value);
      if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
      }
      updatedCompany.avgpkg[field] = value;
    } else {
      updatedCompany[field] = e.target.value;
    }

    updatedCompanies[index] = updatedCompany;
    setCompanies(updatedCompanies);
  };

  const removeCompany = (index) => {
    console.log(`Removing company at index ${index}`);
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  const addCompany = () => {
    console.log("Adding new company");
    setCompanies([
      ...companies,
      { companyName: "", avgpkg: { from: 0, to: 0 } },
    ]);
  };

  // Placement
  const addPlacementData = () => {
    setPlacementOpportunities([...placementOpportunities, ""]);
  };

  const removePlacementData = (indexToRemove) => {
    setPlacementOpportunities(
      placementOpportunities.filter((_, index) => index !== indexToRemove)
    );
  };

  const handlePlacementChange = (index, e) => {
    const updatePlacementData = [...placementOpportunities];
    updatePlacementData[index] = e.target.value;
    setPlacementOpportunities(updatePlacementData);
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-4 py-6 pl-20 pr-16 lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem]">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Average Salary & Placement Opportunities
        </h1>
        {/* Companies */}
        <div className="grid grid-cols-2 bg-gradient-to-r from-greenColor to-green-300">
          <fieldset className="flex flex-col gap-2 px-6 py-6">
            <h1 className="text-[#fff] text-lg font-semibold font-Montserrat items-center flex flex-row gap-5">
              Average Salary
              <FaPlusCircle
                className="cursor-pointer text-xl"
                onClick={addCompany}
              />
            </h1>
            <div className="flex flex-col gap-4 h-[14rem] overflow-y-auto scroll-smooth">
              {companies?.map((company, index) => (
                <div key={index} className="flex justify-between">
                  <div className="flex flex-col gap-2 pr-5">
                    <input
                      type="text"
                      placeholder="Enter Domain Name"
                      value={company.companyName}
                      onChange={(e) =>
                        handleCompanyChange(index, "companyName", e)
                      }
                      className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                    />
                    <input
                      type="number"
                      placeholder="Enter Minimum Pay"
                      value={company.avgpkg.from}
                      onChange={(e) => handleCompanyChange(index, "from", e)}
                      className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                    />
                    <input
                      type="number"
                      placeholder="Enter Maximum Pay"
                      value={company.avgpkg.to}
                      onChange={(e) => handleCompanyChange(index, "to", e)}
                      className="p-2 outline-none shadow-md lg:w-[15rem] 2xl:w-[35rem] rounded-md xl:w-[20rem]"
                    />
                  </div>
                  <div className="flex flex-row gap-2 pt-2 mt-5 w-[100%]">
                    <span
                      className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer pt-4"
                      onClick={() => removeCompany(index)}
                    >
                      ❌
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Placement  */}

          <fieldset className="flex flex-col gap-2 px-6 py-6">
            <h1 className="font-semibold font-Montserrat flex gap-5 text-white text-xl items-center">
              Placement Opportunities
              <FaPlusCircle
                onClick={addPlacementData}
                className="cursor-pointer text-xl "
              />
            </h1>
            <div className="flex flex-col h-[11rem] overflow-y-scroll gap-3 ">
              {placementOpportunities?.map((item, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <input
                    placeholder="Placement or Company Name"
                    value={item}
                    onChange={(e) => handlePlacementChange(index, e)}
                    className="p-2 h-auto outline-none shadow-md lg:w-[15rem] 2xl:w-[30rem] xl:w-[22rem] rounded-md "
                  />
                  <span
                    className="top-0 bottom-0 right-0 flex items-center justify-center cursor-pointer"
                    onClick={() => removePlacementData(index)}
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

export default PlacementAverageSalary;
