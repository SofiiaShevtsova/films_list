import "../../node_modules/modern-normalize";
const axios = require("axios").default;
import { getTemplate } from "./templates";

const boxForFilms = document.querySelector(".films__box");

export const genres = {
  options: "api_key=ba9af9187d823167244a35c2fd918141",
  baseUrl: "https://api.themoviedb.org/3/genre/movie/list?language=en-US&",
  name: {},

  async getGenres() {
    try {
      const response = await axios.get(`${this.baseUrl}${this.options}`);

      const genresNameById = [...response.data.genres];

      for (const elem of genresNameById) {
        const id = Object.values(elem)[0];
        const name = Object.values(elem)[1];

        this.name = { ...this.name, [id]: name };
      }
    } catch (error) {}
  },
};

genres.getGenres();

const showFilmsList = {
  options: "api_key=ba9af9187d823167244a35c2fd918141",
  baseUrl: "https://api.themoviedb.org/3/trending/all/day",

  async getFilms() {
    try {
      const response = await axios.get(`${this.baseUrl}?${this.options}`);

      const markupFilms = response.data.results
        .map((e) => {
          const genresName = [];
          for (const elem of e.genre_ids) {
            if (!genres.name[`${elem}`]) {
              continue;
            }
            genresName.push(genres.name[`${elem}`]);
          }

          return getTemplate(e, genresName);
        })
        .join("");

      boxForFilms.innerHTML = markupFilms;
    } catch (error) {}
  },
};

showFilmsList.getFilms();
