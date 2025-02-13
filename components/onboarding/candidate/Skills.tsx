/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Select, { MultiValue, StylesConfig } from "react-select";
import options from "../../../utils/options"

const selectStyle: StylesConfig = {
  control: (styles) => ({
    ...styles,
    padding: "4px 2px",
  }),
};


const Skills = ({ getDataFn }: { getDataFn?: (data: any) => void }): JSX.Element => {
  const [skills, setSkills] = React.useState<MultiValue<{ label: string, value: string }>>([])

  React.useEffect(() => {
    if (getDataFn) getDataFn({ skills: skills.map(s => s.value) })
  }, [skills])

  const handleSkills = (arg: any) => {
    setSkills(arg)
  }
  return (
    <div className="px-6 sm:px-12 md:px-16 mb-8">
      <p className="font-medium text-lg mb-4">Add your skills</p>
      <form className="flex flex-wrap justify-between text-gray-500 mb-4">

        <label htmlFor="degree" className="basis-[100%] mt-5">
          <p>Skills</p>
          <Select
            id="skills"
            options={options}
            styles={selectStyle}
            onChange={(arg) => handleSkills(arg)}
            isMulti
            isSearchable
          />
          <p className="mt-2">{skills && skills.map((prev) => (<>{prev.label}, </>))}
          </p>
        </label>
      </form>
    </div>
  );
};

export default Skills;