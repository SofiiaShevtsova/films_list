import { genres } from "./index";

export const getTemplate = function (e, genresName) {
  const genre = genresName.slice(0, 3).join(",");

  const template = `<li id="${e.id}">
<img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="film">
<h2>${e.title || e.name}</h2>
<p>${genre}</p>
<p>${e.release_date}</p>
<p>${e.vote_average}</p>
</li>`;
  // console.log(template);
  return template;
};
