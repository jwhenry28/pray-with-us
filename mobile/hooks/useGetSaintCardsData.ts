import { useState } from "react";

import { SaintCardData } from "../types";
import { dummySaintCardData } from "./data";

const useGetSaintCardsData = (): {
  isLoading: boolean;
  data: SaintCardData[];
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [saintsData, setSaintsData] =
    useState<SaintCardData[]>(dummySaintCardData);

  return {
    isLoading: isLoading,
    data: saintsData,
  };
};

export default useGetSaintCardsData;
