export const getTemplate = function (e) {
  const template = `<li>
<img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="film">
<h2>${e.title||e.name}</h2>
<p>${e.genre_ids}</p>
<p>${e.release_date}</p>
<p>${e.vote_average}</p>
</li>`;
return template} ;