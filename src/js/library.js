import "../../node_modules/modern-normalize";
import "../styles/index.scss";

import { Loading } from "notiflix/build/notiflix-loading-aio";
import { localStorageServise } from "./local";

const boxForFilmsWatched = document.querySelector(".gallery.watched");
const boxForFilmsQueue = document.querySelector(".gallery.queue");
const btnForFilmsWatched = document.querySelector(".lib-btn.watched");
const btnForFilmsQueue = document.querySelector(".lib-btn.queue");
const emptyBox = document.querySelector(".empty-list");

const onBtnWatchedClick = () => {
  boxForFilmsQueue.innerHTML = "";
  boxForFilmsWatched.innerHTML = "";
  btnForFilmsWatched.classList.add("current-btn");
  btnForFilmsQueue.classList.remove("current-btn");
  localStorageServise.checkLocalWatched(boxForFilmsWatched);
  emptyBox.classList.add("close");
};
const onBtnQueueClick = () => {
  boxForFilmsQueue.innerHTML = "";
  boxForFilmsWatched.innerHTML = "";
  btnForFilmsWatched.classList.remove("current-btn");
  btnForFilmsQueue.classList.add("current-btn");
  localStorageServise.checkLocalQueue(boxForFilmsQueue);
  emptyBox.classList.add("close");
};

btnForFilmsWatched.addEventListener("click", onBtnWatchedClick);
btnForFilmsQueue.addEventListener("click", onBtnQueueClick);
