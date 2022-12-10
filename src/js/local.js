export const localStorageServise = {
  elementsWatched: [],
  elementsQueue: [],
  WATCHED_LOCAL: "list-of-films-watched",
  QUEUE_LOCAL: "list-of-films-queue",

  watchedList(elem, event) {
    const filmsItem = elem.parentNode.parentNode;
    if (
      localStorage.getItem(this.WATCHED_LOCAL) &&
      this.elementsWatched.length === 0
    ) {
      this.elementsWatched.push(
        ...JSON.parse(localStorage.getItem(this.WATCHED_LOCAL))
      );
    }

    const renderW = `<li class="gallery__item" data-id="${filmsItem.dataset.id}">${filmsItem.innerHTML}</li>`;
      event.target.textContent = "Added to Watched";

    if (this.elementsWatched.includes(renderW)) {
      return;
    }
    this.elementsWatched.push(renderW);
    localStorage.setItem(
      this.WATCHED_LOCAL,
      JSON.stringify(this.elementsWatched)
    );
  },

  queueList(elem, event) {
    const filmsItem = elem.parentNode.parentNode;

    if (
      localStorage.getItem(this.QUEUE_LOCAL) &&
      this.elementsQueue.length === 0
    ) {
      this.elementsQueue.push(
        ...JSON.parse(localStorage.getItem(this.QUEUE_LOCAL))
      );
    }

    const renderQ = `<li class="gallery__item" data-id="${filmsItem.dataset.id}">${filmsItem.innerHTML}</li>`;
      event.target.textContent = "Added to Queue";

    if (this.elementsQueue.includes(renderQ)) {

      return;
    }

    this.elementsQueue.push(renderQ);
    localStorage.setItem(this.QUEUE_LOCAL, JSON.stringify(this.elementsQueue));
  },
  checkLocalWatched(elem) {
    if (localStorage.getItem(this.WATCHED_LOCAL)) {
      elem.innerHTML = JSON.parse(
        localStorage.getItem(this.WATCHED_LOCAL)
      ).join("");
    } else {
      elem.innerHTML = "";
    }
  },

  checkLocalQueue(elem) {
    if (JSON.parse(localStorage.getItem(this.QUEUE_LOCAL))) {
      elem.innerHTML = JSON.parse(localStorage.getItem(this.QUEUE_LOCAL)).join(
        ""
      );
    } else {
      elem.innerHTML = "";
    }
  },
};
