import axios from "axios";
import { useMemo } from "react";

import { useGetEnv } from "./useGetEnv";

export const useAxios = () => {
  const { baseURL } = useGetEnv();

  return useMemo(() => axios.create({ baseURL }), [baseURL]);
};
