import { useState } from "react";
import { useParams } from "react-router-dom";

import type { Saint } from "@/types/saint";
import { useGet } from "@/hooks/useGet";
import SaintForm from "./SaintForm";
import SaintCard from "./SaintCard";

const SaintEditor = () => {
  const [saint, setSaint] = useState<Saint | null>(null);
  const { id: saintId } = useParams();
  const { error, loading } = useGet<Saint>(`/saints/${saintId}`, setSaint);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Encountered an error: {String(error)}</p>;
  }

  if (!saint) {
    return <p>no saint by that name</p>;
  }

  return (
    <div className="flex flex-row items-center">
      <SaintForm saint={saint} setSaint={setSaint} />
      <div className="mx-32">
        <SaintCard saint={saint} />
      </div>
    </div>
  );
};

export default SaintEditor;
