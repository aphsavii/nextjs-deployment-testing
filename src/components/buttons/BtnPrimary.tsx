"use client";

interface BtnPrimaryProps {
  func: () => void;
  text: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}
const BtnPrimary = ({
    func,
    text,
    isDisabled=false,
    isLoading=false
  }:BtnPrimaryProps) => {

return(
<button
  onClick={()=>func()}
  disabled={isDisabled}
  className="bg-primary hover:bg-opacity-80 text-xs md:text-base  text-white font-bold py-1.5 md:py-2  px-2 md:px-4 rounded focus:outline-none focus:shadow-outliner"
>
  {isLoading ? (
    <div className="animate-spin rounded-full h-5 w-5 border-t-[3px] border-b-[3px] border-secondary"></div>
  ) : (
    text
  )}
</button>
)
};




export default BtnPrimary;