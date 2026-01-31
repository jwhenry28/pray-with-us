import { useParams } from "react-router-dom";

import type { Saint } from "@/types/saint";
import { useGet } from "@/hooks/useGet";
import SaintForm from "./SaintForm";

const SaintEditor = () => {
  const { id: saintId } = useParams();
  const {
    data: fetchedSaint,
    error,
    loading,
  } = useGet<Saint>(`/saints/${saintId}`);

  if (loading || !fetchedSaint) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Encountered an error: {String(error)}</p>;
  }

  return <SaintForm saint={fetchedSaint} />;
};

export default SaintEditor;
