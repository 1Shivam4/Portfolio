import React from "react";

type ButtonProps = {
  name: string | React.ReactNode;
  type?: "button" | "submit";
  isDisabled?: boolean;
};

export function Button({
  name,
  type = "button",
  isDisabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${
        isDisabled
          ? "loader"
          : "my-3 p-3 px-10 rounded-md text-white font-semibold relative overflow-hidden bg-red-500 transition-all duration-500 ease-in-out before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-red-600 before:z-0 before:transition-all before:duration-500 hover:before:w-full z-10"
      }`}
      type={type}
      disabled={isDisabled}
    >
      {!isDisabled && <span className="relative z-10">{name}</span>}
    </button>
  );
}
