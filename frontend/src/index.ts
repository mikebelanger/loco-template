import { HTMLDump } from "./base";
import "bulma";

customElements.define("movie-view", HTMLDump);

const movies_list = document.getElementById("movies-list");

if (movies_list) {
    movies_list.dispatchEvent(new Event("get"));
}
