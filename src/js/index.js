import "../../node_modules/modern-normalize";
const axios = require("axios").default;

const boxForFilms = document.querySelector(".films__box")

export const showFilmsList = {
    options:
      "api_key=ba9af9187d823167244a35c2fd918141",
    baseUrl: "https://api.themoviedb.org/3/trending/all/day",
  
    async getFilms() {
  
      try {
        const response = await axios.get(
          `${this.baseUrl}?${this.options}`
        );
        console.log(response.data.results.map(e=>{
            console.log(`https://image.tmdb.org/t/p/w500/${e.poster_path}`);
        }));
      } catch (error) {}
  
    },
  };

  showFilmsList.getFilms()