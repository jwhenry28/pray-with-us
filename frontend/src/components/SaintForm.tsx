import { useState } from "react";
import type { SubmitEvent } from "react";

import type { Saint } from "@/types/saint";
import { useAxios } from "@/hooks/useAxios";

type SaintFormProps = {
  saint: Saint;
};

const SaintForm = ({ saint }: SaintFormProps) => {
  const axios = useAxios();
  const [formSaint, setFormSaint] = useState<Saint>(saint);
  const [saving, setSaving] = useState(false);

  const dynamicStyles = { backgroundColor: formSaint.color };

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.post(`/saints/${formSaint.id}`, formSaint);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={dynamicStyles}>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            name="image"
            required
            value={formSaint.image}
            onChange={(e) => {
              setFormSaint((prev) =>
                prev ? { ...prev, image: e.target.value } : prev,
              );
            }}
          />
        </p>
        <p>
          <label htmlFor="color">Color</label>
          <input
            id="color"
            type="text"
            name="color"
            required
            value={formSaint.color}
            onChange={(e) => {
              setFormSaint((prev) =>
                prev ? { ...prev, color: e.target.value } : prev,
              );
            }}
          />
        </p>
        <p>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            value={formSaint.name}
            onChange={(e) => {
              setFormSaint((prev) =>
                prev ? { ...prev, name: e.target.value } : prev,
              );
            }}
          />
        </p>
        <p>
          <label htmlFor="prayer">Prayer</label>
          <textarea
            id="prayer"
            name="prayer"
            required
            value={formSaint.prayer.join("\n")}
            onChange={(e) => {
              setFormSaint((prev) =>
                prev ? { ...prev, prayer: e.target.value.split("\n") } : prev,
              );
            }}
          />
        </p>
        <button type="submit" disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
};

export default SaintForm;
