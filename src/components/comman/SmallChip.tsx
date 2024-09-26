
interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    color: string;
  }
const SmallChip: React.FC<ChipProps> = ({ label, color }) => (
    <div
      className={`mr-1 flex items-center justify-between rounded-md bg-gray-800 px-2 text-[10px] font-normal normal-case  text-gray-400 shadow-none
         transition-opacity duration-300 ease-linear hover:!shadow-none border-[1px] `}
      data-te-close="true"
      style={{
        borderColor: `${color}`,
      }}
    >
      {label}
    </div>
  );

  export default SmallChip;