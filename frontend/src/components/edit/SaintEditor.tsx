import { useState } from "react";
import { useParams } from "react-router-dom";

import type { Saint } from "@/types/saint";
import { useGet } from "@/hooks/useGet";
import SaintCard from "@/components/shared/SaintCard";
import SaintForm from "./SaintForm";

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
    <div className="flex flex-row items-center gap-24 pr-24">
      <SaintForm saint={saint} setSaint={setSaint} />
      <SaintCard saint={saint} clickable={false} />
    </div>
  );
};

export default SaintEditor;
