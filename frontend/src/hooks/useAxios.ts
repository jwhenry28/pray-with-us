import axios from "axios";
import { useMemo } from "react";

import { useEnv } from "./useEnv";

export const useAxios = () => {
  const { baseURL } = useEnv();

  return useMemo(() => axios.create({ baseURL }), [baseURL]);
};
