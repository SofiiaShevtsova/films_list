import "../../node_modules/modern-normalize";
import "../styles/index.scss";


const axios = require("axios").default;
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Templates } from "./templates";

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
  keyAPI: "api_key=ba9af9187d823167244a35c2fd918141",
  baseUrl: `https://api.themoviedb.org/3/`,
  popular: `trending/all/day?`,
  nameFilm:`search/movie?language=en-US&include_adult=false&`,
  

  async getFilms() {
    try {
           const query = false

      if (query) {
            const response = await axios.get(`${this.baseUrl}${this.nameFilm}${this.keyAPI}query=${query}`);

      const markupFilms = response.data.results
        .map((e) => {
          const genresName = [];
          for (const elem of e.genre_ids) {
            if (!genres.name[`${elem}`]) {
              continue;
            }
            genresName.push(genres.name[`${elem}`]);
          }

          return Templates.getCardsOfFilms(e, genresName);
        })
          .join("");
              boxForFilms.innerHTML = markupFilms;
        
      }

      const response = await axios.get(`${this.baseUrl}${this.popular}${this.keyAPI}`);

      const markupFilms = response.data.results
        .map((e) => {
          const genresName = [];
          for (const elem of e.genre_ids) {
            if (!genres.name[`${elem}`]) {
              continue;
            }
            genresName.push(genres.name[`${elem}`]);
          }

          return Templates.getCardsOfFilms(e, genresName);
        })
        .join("");

      boxForFilms.innerHTML = markupFilms;
    } catch (error) {}
  },
  async getFilmsById(film_id) {
    try {
      Loading.hourglass({
        clickToClose: true,
        svgSize: '200px',
        svgColor: '#ff6b01',
      });
      const response = await axios.get(
        `${this.baseUrl}movie/${film_id}?${this.keyAPI}&language=en-US`
      );
      const { data } = response;
      return Templates.getCardOfFilmByModal(data);
    } catch (error) {
      console.log('error', error);
    } finally {
      Loading.remove();
    }
  },
};

showFilmsList.getFilms();
