import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const ts = 5;
const apikey = process.env.REACT_APP_PUBLIC;
const private_key = process.env.REACT_APP_PRIVATE_KEY;
console.log(ts + private_key + apikey);
const hash = "4928838ee3d0444031cecc16ae6d6693";

const url = `http://gateway.marvel.com/v1/public`;
const marvelInstance = axios.create({
  baseURL: url,
  params: {
    ts,
    apikey,
    hash,
  },
});

export const getCharacters = async () => {
  const {
    data: { data },
  } = await marvelInstance.get("/characters");
  return data;
};
export const getCharacter = async (id) => {
  const {
    data: { data },
  } = await marvelInstance.get(`/characters/${id}`);
  const { results } = data;
  return results[0];
};

export const getContentByCharacter = async (id, path) => {
  const {
    data: { data },
  } = await marvelInstance.get(`characters/${id}/${path}`);
  return data.results;
};
