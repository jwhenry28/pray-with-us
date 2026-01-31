import { useState } from "react";

import { useGet } from "@/hooks/useGet";
import type { Saint } from "@/types/saint";
import SaintCard from "./SaintCard";

const SaintsGrid = () => {
  const [saints, setSaints] = useState<Saint[]>([]);
  const { error, loading } = useGet<Saint[]>("/saints", setSaints);

  return (
    <>
      {error && <p>encountered an error: {String(error)}</p>}
      {loading && <p>loading...</p>}
      {saints && (
        <div className="grid grid-cols-4 justify-items-center gap-8">
          {saints.map((saint) => (
            <SaintCard key={saint.id} saint={saint} />
          ))}
        </div>
      )}
    </>
  );
};

export default SaintsGrid;
