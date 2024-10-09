import React from "react";

interface ChipProps {
  label: string;
  color: string;
}

const LargeChip: React.FC<ChipProps> = ({ label, color }) => (
  <div
    className={`chipC my-1 mr-4 flex h-8 items-center justify-between rounded-md bg-dark px-4 py-0 text-xs font-normal normal-case leading-loose text-gray-400 shadow-none
         transition-opacity duration-300 ease-linear hover:!shadow-none border-[1px]`}
    data-te-close="true"
    style={{
      borderColor: `${color}`,
    }}
  >
    {label}
  </div>
);

export default LargeChip;
