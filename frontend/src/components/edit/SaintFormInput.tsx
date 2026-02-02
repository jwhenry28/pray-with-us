import type { Dispatch, SetStateAction } from "react";

import type { Saint } from "@/types/saint";

type SaintFormInputProps = {
  field: keyof Saint;
  type: string;
  value: string;
  inputClasses?: string;
  onUpdate: Dispatch<SetStateAction<Saint | null>>;
};

const SaintFormInput = ({
  field,
  type,
  value,
  inputClasses,
  onUpdate,
}: SaintFormInputProps) => {
  const fieldLower = field.toLowerCase();
  const fieldTitle = field[0].toUpperCase() + field.slice(1);
  const baseClasses = "px-2 py-1 border-b-1 border-black";
  const allClasses = baseClasses + inputClasses;

  return (
    <>
      <label htmlFor={fieldLower} className="font-medium">
        {fieldTitle}
      </label>
      <input
        id={fieldLower}
        className={allClasses}
        type={type}
        name={fieldLower}
        required
        value={value}
        onChange={(e) => {
          onUpdate((prev) =>
            prev ? { ...prev, [field]: e.target.value } : prev,
          );
        }}
      />
    </>
  );
};

export default SaintFormInput;
