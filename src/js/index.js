import "../../node_modules/modern-normalize";
import "../styles/index.scss";

const axios = require("axios").default;
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Templates } from "./templates";
import { Modal } from "./modalMovie";
import { localStorageServise } from "./local";

const boxForFilms = document.querySelector(".gallery");
const filmByModal = document.querySelector(".backdrop")

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

export const showFilmsList = {
  keyAPI: "api_key=ba9af9187d823167244a35c2fd918141",
  baseUrl: `https://api.themoviedb.org/3/`,
  popular: `trending/all/day?`,
  nameFilm: `search/movie?language=en-US&include_adult=false&`,

  async getFilms() {
    try {
      const query = false;

      if (query) {
        const response = await axios.get(
          `${this.baseUrl}${this.nameFilm}${this.keyAPI}query=${query}`
        )
        const markupFilms = Templates.arrayMarkupFilm(response.data.results);
        boxForFilms.innerHTML = markupFilms;
      }

      const response = await axios.get(
        `${this.baseUrl}${this.popular}${this.keyAPI}`
      );

      const markupFilms = Templates.arrayMarkupFilm(response.data.results);

      boxForFilms.innerHTML = markupFilms;
    } catch (error) {}
  },
  async getFilmsById(film_id) {
    try {
      Loading.hourglass({
        clickToClose: true,
        svgSize: "200px",
        svgColor: "#ff6b01",
      });
      const response = await axios.get(
        `${this.baseUrl}movie/${film_id}?${this.keyAPI}&language=en-US`
      );
      const { data } = response;
      console.log(data);
      filmByModal.innerHTML = Templates.getCardOfFilmByModal(data);
    } catch (error) {
      console.log("error", error);
    } finally {
      Loading.remove();
    }
  },
};

showFilmsList.getFilms();

function onQueueBtnClick(event) {
  localStorageServise.queueList(Modal.curentElem, event);
}
function onWatchedBtnClick(event) {
  localStorageServise.watchedList(Modal.curentElem, event);
}

boxForFilms.addEventListener("click", Modal.showModal);
document.addEventListener("click", Modal.hideModal);
document.addEventListener("keydown", Modal.hideModal);

Modal.btnQueue.addEventListener("click", onQueueBtnClick);
Modal.btnWatched.addEventListener("click", onWatchedBtnClick);
