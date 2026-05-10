import type { FilmsType } from "../../types/Films";

const FilmCard = ({ title, image, description, release_date }: FilmsType) => {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl gap-6">
      <img className="rounded-2xl w-full max-w-sm aspect-2/3 object-cover shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-500" src={image} alt={title}></img>
      <span className="border border-dashed border-tertiary rounded-full px-4 py-1 font-secondary text-tertiary">{release_date}</span>
      <h2 className="font-primary text-6xl text-primary tracking-tight">{title}</h2>
      <p className="font-secondary text-[#7a6f5e] max-w-[55ch] leading-relaxed">{description}</p>
    </div>
  );
};

export default FilmCard;
