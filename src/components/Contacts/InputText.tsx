import React, { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
}

const InputText = ({
  label,
  htmlFor,
  className,
  ...otherProps
}: InputTextProps) => {
  return (
    <div className={`${className} flex flex-col w-full rounded-md`}>
      {label && (
        <div className="flex gap-1 items-center">
          <label
            htmlFor={htmlFor}
            className="text-text-color text-title-content font-bold"
          >
            {label}
          </label>
        </div>
      )}
      <input
        {...otherProps}
        className="border rounded-input border-placeholder-color h-[30px] bg-transparent"
      />
    </div>
  );
};

export default InputText;
