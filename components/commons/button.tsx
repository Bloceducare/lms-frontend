import { IChild } from "interface";

interface IButton extends IChild {
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  onClick,
  type = "button",
  children,
  className = "",
  disabled = false,
}: IButton) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={`p-2 px-6 border rounded-md ${className} ${
          disabled ? "opacity-80 cursor-not-allowed" : ""
        }`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
