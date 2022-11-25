import "../../node_modules/modern-normalize";
const axios = require("axios").default;
import { getTemplate } from "./templates";


const boxForFilms = document.querySelector(".films__box")


const showGenresById = {
  options:
  "api_key=ba9af9187d823167244a35c2fd918141",
baseUrl: "https://api.themoviedb.org/3/genre/movie/list?language=en-US&",
genresNameById:[],


async getGenres() {
  try {

    const response = await axios.get(
      `${this.baseUrl}${this.options}`
    );
    this.genresNameById.push(...response.data.genres)
    // console.log(this.genresNameById);
  } catch (error) {}
},
findName(id){
  console.log(this.genresNameById);
  for (const genre of this.genresNameById) {
    console.log(genre.id);
  }
  

  
  
    
  
}
}

showGenresById.getGenres()
showGenresById.findName()

const showFilmsList = {
    options:
      "api_key=ba9af9187d823167244a35c2fd918141",
    baseUrl: "https://api.themoviedb.org/3/trending/all/day",
  
    async getFilms() {
      try {
        const response = await axios.get(
          `${this.baseUrl}?${this.options}`
        );
       const markupFilms = response.data.results.map(e=>{
          return getTemplate(e)
        }).join("");
        boxForFilms.innerHTML = markupFilms
      } catch (error) {}
  
    },
  };

  showFilmsList.getFilms()