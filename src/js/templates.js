import { genres } from "./index";

export const Templates = {
  genre: "",
  getGenresFilm(genresName) {
    this.genre =
      genresName.length > 2
        ? genresName.slice(0, 2).join(", ") + `, Other`
        : genresName.slice(0, 2).join(", ");
    return this.genre;
  },

  cutString(name) {
    let filmName = "";
    if (name.length < 30) {
      return name;
    }
    if (name.length >= 30) {
      return (filmName = name.slice(0, 29) + "...");
    }
  },

  arrayMarkupFilm(array) {
    const markup = array
      .map((e) => {
        const genresName = [];
        for (const elem of e.genre_ids) {
          if (!genres.name[`${elem}`] || genres.name[`${elem}`].length > 15) {
            continue;
          }
          genresName.push(genres.name[`${elem}`]);
        }

        return this.getCardsOfFilms(e, genresName);
      })
      .join("");
    return markup;
  },

  getCardsOfFilms(film, genresName) {
    const template = `<li class="gallery__item" data-id=${film.id}>
      <a class="film" href="#">
        <img
          class="film__image"
          src="https://image.tmdb.org/t/p/w500/${film.poster_path}"
          alt="${film.title || film.name}"
          loading = 'lazy'/>
        <div class="film__meta">
          <p class="film__title js-tooltip"><span class="js-tooltiptext">${
            film.title || film.name
          }</span>${this.cutString(film.title || film.name)}</p>
          <p class="film__description">
            <span class="film__genre">${
              this.getGenresFilm(genresName) || `Other`
            }</span>
            <span class="film__year">${parseInt(
              film.release_date || film.first_air_date
            )}</span>
                        <span class="film__rating">${film?.vote_average?.toFixed(
                          1
                        )}</span>
          </p>
        </div>
      </a>
    </li >`;

    return template;
  },
};
