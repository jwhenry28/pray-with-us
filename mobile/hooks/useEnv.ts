import { API_BASE_URL } from "@env";

export const useEnv = (): { baseURL: string } => {
  return {
    baseURL: API_BASE_URL,
  };
};
