const BASE_URL = "https://api.themoviedb.org";
import axios from "axios";

export async function getPopularMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/popular?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JkMDczOTg4Nzk0ZTgyZDg0M2VlZWE1ZjFkOWZmNCIsInN1YiI6IjY0YTQ2OTkyNWE5OTE1MDBhZGY3YzEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_kEfasETUjzXY7Nz_K5mtpuJ6KoO5ohcxvDu63YqDE",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function getTopRatedMovies() {
  try {
    const response = await axios.get(
      `${BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2JkMDczOTg4Nzk0ZTgyZDg0M2VlZWE1ZjFkOWZmNCIsInN1YiI6IjY0YTQ2OTkyNWE5OTE1MDBhZGY3YzEwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h_kEfasETUjzXY7Nz_K5mtpuJ6KoO5ohcxvDu63YqDE",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
