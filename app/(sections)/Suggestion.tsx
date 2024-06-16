import SuggestionInput from "@/components/SuggestionInput";
import React from "react";

const Suggestion = () => {
  return (
    <div className="flex items-center justify-center max-md:h-[0vh]  max-md:mb-[300px] h-[50vh]">
      <div className=" max-md:w-[90%] w-[50%]">
        <SuggestionInput />
      </div>
    </div>
  );
};

export default Suggestion;
