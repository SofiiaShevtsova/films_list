import "../../node_modules/modern-normalize";
import "../styles/index.scss";

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const axios = require("axios").default;
import { Loading } from "notiflix/build/notiflix-loading-aio";
import { Templates } from "./templates";
import { Modal } from "./modalMovie";
import { localStorageServise } from "./local";

const boxForFilms = document.querySelector(".gallery");
const formForGetFilms = document.querySelector(".input-form");
const errorString = document.querySelector(".search-error")

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

  async getFilms(page, query) {

    try {
      if (query) {
              Loading.hourglass({
    clickToClose: true,
    svgSize: '200px',
    svgColor: '#ff6b01',
  });

        const response = await axios.get(
          `${this.baseUrl}${this.nameFilm}${this.keyAPI}&query=${query}`
        ) 
        
        if (response.data.results.length === 0) {
          boxForFilms.innerHTML = '';
              Loading.remove();
          errorString.classList.remove('is-hidden');
          return

          
        }
        const markupFilms = Templates.arrayMarkupFilm(response.data.results);
        boxForFilms.innerHTML = markupFilms;
          Loading.remove();

      } else {
              Loading.hourglass({
    clickToClose: true,
    svgSize: '200px',
    svgColor: '#ff6b01',
  });

        
        const response = await axios.get(
        `${this.baseUrl}${this.popular}${this.keyAPI}&page=${page}`
      );

      const markupFilms = Templates.arrayMarkupFilm(response.data.results);

        boxForFilms.innerHTML = markupFilms;
        Loading.remove();
}

      
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
      return data
    } catch (error) {
      console.log("error", error);
    } finally {
      Loading.remove();
    }
  },
};

showFilmsList.getFilms(1);

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  template: {
    page: '<a href="#" class="tui-custon">{{page}}</a>',
    currentPage:
      '<span class="tui-custon tui-custon-is-selected">{{page}}</span>',
    moveButton:
      '<a href="#" class="tui-custon tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-custon tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-custon tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination('pagination', options);
const page = pagination.getCurrentPage();

const loadMorePopylarFilms = async event => {
  const currentPage = event.page;
  Loading.hourglass({
    clickToClose: true,
    svgSize: '200px',
    svgColor: '#ff6b01',
  });
  const data = await showFilmsList.getFilms(currentPage);
  Loading.remove();
};

// console.log(paginatio.getCurrentPage());

pagination.on('beforeMove', loadMorePopylarFilms);


function onQueueBtnClick(event) {
  localStorageServise.queueList(Modal.curentElem, event);
}
function onWatchedBtnClick(event) {

  localStorageServise.watchedList(Modal.curentElem, event);
}

function onInputSubmit(event) {
  event.preventDefault();
  const query = event.currentTarget.elements[0].value.trim().toLowerCase();
  showFilmsList.getFilms(1, query);

}

boxForFilms.addEventListener("click", Modal.showModal);
document.addEventListener("click", Modal.hideModal);
document.addEventListener("keydown", Modal.hideModal);

Modal.btnQueue.addEventListener("click", onQueueBtnClick);
Modal.btnWatched.addEventListener("click", onWatchedBtnClick);

formForGetFilms.addEventListener("submit", onInputSubmit)
