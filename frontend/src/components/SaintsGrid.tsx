import { useGet } from "@/hooks/useGet";

import type { Saint } from "@/types/saint";
import SaintCard from "./SaintCard";

const SaintsGrid = () => {
  const { data, error, loading } = useGet<Saint[]>("/saints");

  return (
    <>
      {error && <p>encountered an error: {String(error)}</p>}
      {loading && <p>loading...</p>}
      {data && (
        <div className="grid grid-cols-4 justify-items-center gap-8">
          {data.map((saint) => (
            <SaintCard key={saint.id} saint={saint} />
          ))}
        </div>
      )}
    </>
  );
};

export default SaintsGrid;
