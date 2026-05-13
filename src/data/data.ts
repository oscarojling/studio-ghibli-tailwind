import type { FilmsType } from "../types/Films";

export const GetFilms = async (): Promise<FilmsType[]> => {
  try {
    const response = await fetch("https://ghibliapi.vercel.app/films");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
