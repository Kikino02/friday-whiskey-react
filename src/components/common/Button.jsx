export default function Button({ buttonName, className, ...props }) {
  return (
    <button
      {...props}
      className={`font-right py-[16px] px-[32px] bg-darkGreyButton rounded-[32px] text-white md:text-base font-semibold md:w-40 ${className}`}
    >
      {buttonName}
    </button>
  );
}
