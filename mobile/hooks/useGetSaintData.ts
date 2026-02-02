import { useState } from "react";

import { Saint } from "../types";
import { dummySaintData } from "./data";
import { useGet } from "./useGet";

const useGetSaintData = ({
  id,
}: {
  id: string;
}): {
  isLoading: boolean;
  data: Saint | null;
} => {
  const [saint, setSaint] = useState<Saint | null>(null);
  const { error, loading } = useGet<Saint>(`/saints/{id}`, setSaint);

  return {
    isLoading: loading,
    data: saint,
  };
};

export default useGetSaintData;
