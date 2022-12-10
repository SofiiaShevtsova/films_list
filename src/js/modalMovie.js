import { showFilmsList } from "./index";

let offsetX = 0;
let offsetY = 0;

export const Modal = {
  mainContainer: document.querySelector(".main.container"),
  backdrop: document.querySelector(".backdrop[data-modal]"),
  modal: document.querySelector("div.modal-movie-info"),
  closeModalBtn: document.querySelector("[data-modal-close]"),

  poster: document.querySelector("#poster__image"),
  movieName: document.querySelector(".move-info__name"),
  vote: document.querySelector(".vote-container"),
  votes: document.querySelector(".votes-container"),
  popularity: document.querySelector(".popularity-container"),
  originalTitle: document.querySelector(".original-title-container"),
  genre: document.querySelector(".genre-container"),
  about: document.querySelector(".movie-info__about-content"),
  btnWatched: document.querySelector("#add-to-watched"),
  btnQueue: document.querySelector("#add-to-queue"),

  curentElem: null,

  showModal(event) {
    Modal.curentElem = null;

    event.preventDefault();

    Modal.backdrop.classList.remove("is-hidden");
    offsetX = window.pageXOffset;
    offsetY = window.pageYOffset;

    const body = document.body;
    Modal.mainContainer.style.overflow = "hidden";
    body.style.overflow = "hidden";
    Modal.modal.overflowY = "scroll";

    Modal.btnQueue.textContent = "Add to Queue";
    Modal.btnWatched.textContent = "Add to Watched";

    if (event.target.nodeName === "IMG") {
      Modal.modalMovie(event);
      Modal.curentElem = event.target;
    }
  },

  hideModal(event) {
    if (event.target.className === "backdrop" || event.target.parentNode.className === "close-button" || event.code === "Escape" ) {
    Modal.backdrop.classList.add("is-hidden");
    const body = document.body;
    body.style.overflow = "";
    };
  },

  async modalMovie(event) {
    let movieCard = event.target.parentNode.parentNode;

    const id = movieCard.dataset.id;

    const data = await showFilmsList.getFilmsById(id);

    data.poster_path
      ? (Modal.poster.src =
          `https://image.tmdb.org/t/p/w500${data.poster_path}` || "#")
      : (Modal.poster.src =
          "https://cdn-www.comingsoon.net/assets/uploads/2014/09/file_123131_0_defaultposterlarge.jpg");


    Modal.movieName.textContent =
      data.original_title || data.original_name || "NAMELESS MOVIE";
    Modal.vote.textContent = data.vote_average.toFixed(1) || 0;
    Modal.votes.textContent = "/ " + data.vote_count || 0;
    Modal.popularity.textContent = data.popularity.toFixed(1) || 0;
    Modal.originalTitle.textContent = data.original_title.toUpperCase() || "";
    Modal.genre.textContent =
      data.genres.map((genre) => genre.name).join(", ") || "Not set";
    Modal.about.textContent =
      data.overview || "There is no information provided.";
  },
};
