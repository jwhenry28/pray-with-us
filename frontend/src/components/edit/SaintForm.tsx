import { useState } from "react";
import type { Dispatch, SetStateAction, SubmitEvent } from "react";

import type { Saint } from "@/types/saint";
import { useAxios } from "@/hooks/useAxios";
import SaintFormInput from "./SaintFormInput";

type SaintFormProps = {
  saint: Saint;
  setSaint: Dispatch<SetStateAction<Saint | null>>;
};

const SaintForm = ({ saint, setSaint }: SaintFormProps) => {
  const axios = useAxios();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.post(`/saints/${saint.id}`, saint);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="w-full p-8 rounded-md mx-4 bg-pwu-primary border-black border">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
          <SaintFormInput
            field="image"
            type="text"
            inputClasses="w-full"
            value={saint.image}
            onUpdate={setSaint}
          />
          <SaintFormInput
            field="color"
            type="color"
            inputClasses="w-[25%]"
            value={saint.color}
            onUpdate={setSaint}
          />
          <SaintFormInput
            field="name"
            type="text"
            inputClasses="w-full"
            value={saint.name}
            onUpdate={setSaint}
          />
          <label htmlFor="prayer">Prayer</label>
          <textarea
            id="prayer"
            name="prayer"
            className="min-h-64"
            required
            value={saint.prayer.join("\n")}
            onChange={(e) => {
              setSaint((prev) =>
                prev ? { ...prev, prayer: e.target.value.split("\n") } : prev,
              );
            }}
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="bg-pwu-primary hover:bg-pwu-secondary px-6 py-2 my-2 cursor-pointer border rounded-md"
        >
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default SaintForm;
