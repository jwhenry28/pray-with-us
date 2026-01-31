import { useState } from "react";

import { SaintCardData } from "../types";
import { dummySaintCardData } from "./data";

const useGetSaintCardData = ({
  id,
}: {
  id: string;
}): {
  isLoading: boolean;
  data: SaintCardData;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [saintsData, setSaintsData] = useState<SaintCardData>(
    dummySaintCardData[id],
  );

  return {
    isLoading,
    data: saintsData,
  };
};

export default useGetSaintCardData;
