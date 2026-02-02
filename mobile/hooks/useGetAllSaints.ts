import { useState } from "react";

import { Saint } from "../types";
import { useGet } from "./useGet";

const useGetAllSaints = (): {
  isLoading: boolean;
  data: Saint[];
} => {
  const [saints, setSaints] = useState<Saint[]>([]);
  const { error, loading } = useGet<Saint[]>(`/saints`, setSaints);

  return {
    isLoading: loading,
    data: saints,
  };
};

export default useGetAllSaints;
