import { BASE_URL } from "../constants";

export const getImageUrl = (name: string) => {
  return `${BASE_URL}/images/${name}.jpg`;
};
