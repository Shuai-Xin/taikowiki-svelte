import deepFreeze from "./deepFreeze";
import type { Difficulty, Genre } from "./song/types";

export const genre: Record<Genre, string> = {
    pops: "#4fb5bd",
    vocaloid: '#a7abc7',//"#a5d1da",
    anime: "#e28dc8",
    namco: "#EB6B6A",
    game: "#b697d3",
    variety: "#40c977",
    classic: "#ccbd4a",
    kids: "#ebb850"
}

export const difficulty: Record<Difficulty | "oniura", string> = {
    "easy": "#ff2703",
    "normal": "#647e2f",
    "hard": "#364938",
    "oni": "#db1885",
    "ura": "#7135db",
    "oniura": "linear-gradient(rgb(219, 24, 133) 0%, rgb(219, 24, 133) 50%, rgb(113, 53, 219) 50%, rgb(113, 53, 219) 100% )"
}

export const darkDifficulty: Record<Difficulty, string> = {
    "easy": "#ff2703",
    "normal": "#647e2f",
    "hard": "#364938",
    "oni": "#d64d9a",
    "ura": "#946ade"
}

const color = {
    genre,
    difficulty,
    darkDifficulty
}

deepFreeze(color);

export default color;