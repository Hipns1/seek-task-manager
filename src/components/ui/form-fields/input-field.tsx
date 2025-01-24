import { useState } from "react";
import { Control } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FormControl, FormField, FormItem, FormMessage } from "../form";
import { Input } from "../input";

interface InputFieldProps {
  control: Control<any>;
  name: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
}

export const InputField = ({
  control,
  name,
  placeholder,
  type,
  disabled,
  className,
  label,
}: InputFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType = type === "password" && isPasswordVisible ? "text" : type;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <label
              htmlFor={name}
              className="text-xs font-semibold text-tertiary-600"
            >
              {label}
            </label>
          )}
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                placeholder={placeholder}
                type={inputType}
                disabled={disabled}
                className={`${className} pr-10`}
              />
              {type === "password" && (
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-tertiary-100 focus:outline-none"
                >
                  {isPasswordVisible ? (
                    <FaRegEye size={18} />
                  ) : (
                    <FaRegEyeSlash size={20} />
                  )}
                </button>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
