import { useState, useEffect } from "react";
import { GetFilms } from "../../data/data";
import type { FilmsType } from "../../types/Films";
import FilmCard from "../FilmCard";

const FilmGenerator = () => {
  const [randomFilm, setRandomFilm] = useState<FilmsType>();

  const handleClick = async () => {
    const films = await GetFilms();
    setRandomFilm(films[Math.floor(Math.random() * films.length)]);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-8 m-6 ">
      {randomFilm && <FilmCard {...randomFilm} />}
      <button
        className="bg-primary text-bg rounded-full cursor-pointer px-7 py-3.5 shadow-[0_6px_0_-2px_var(--color-secondary)] hover:-translate-y-0.5 active:translate-y-0.5 transition"
        onClick={handleClick}
      >
        Click for another random film
      </button>
    </div>
  );
};

export default FilmGenerator;
