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

  return (
    <>
      <label htmlFor={fieldLower}>{field}</label>
      <input
        id={fieldLower}
        className={inputClasses}
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
