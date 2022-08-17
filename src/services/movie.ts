import { MovieList } from "./../redux/features/movieSlic";
import network from "../config/network";
import { baseUrl, getAuthUser } from "../config/url";
import axios from "axios";
const token = getAuthUser();
export async function movieListData() {
  return await axios.get<MovieList[]>(`${baseUrl}/movie`, {
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });
}
