import { useState } from "react";

import { SaintData } from "../types";
import { dummySaintData } from "./data";

const useGetSaintData = ({
  id,
}: {
  id: string;
}): {
  isLoading: boolean;
  data: SaintData;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [saintsData, setSaintsData] = useState<SaintData>(dummySaintData[id]);

  return {
    isLoading: isLoading,
    data: saintsData,
  };
};

export default useGetSaintData;
