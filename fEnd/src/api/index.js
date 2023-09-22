import axios from "axios";

const baseURL = "http://localhost:4000/";

export const createUser = async (userName, password, image_url) => {
  try {
    const res = await axios.post(`${baseURL}api/users/signup`, {
      userName: userName,
      password: password,
      image_url: image_url,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const login = async (username, password) => {
  try {
    const res = await axios.get(`${baseURL}api/users/login`, {
      headers: {
        username: username,
        password: password,
      },
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const getOneMovie = async (id) => {
  try {
    const res = axios.get(`${baseURL}api/movies/getOne/${id}`);
    return res;
  } catch (e) {
    return null;
  }
};

export const saveMovie = async (data) => {
  try {
    const res = axios.post(`${baseURL}api/movies/save`, { ...data });
    return (await res).data.movie;
  } catch (e) {
    return null;
  }
};

export const getAllMovie = async () => {
  try {
    const res = axios.get(`${baseURL}api/movies/getAll`);
    return res;
  } catch (e) {
    return null;
  }
};

export const getAllActors = async () => {
  try {
    const res = axios.get(`${baseURL}api/actor/getAll`);
    return res;
  } catch (e) {
    return null;
  }
};

export const getAllActress = async () => {
  try {
    const res = axios.get(`${baseURL}api/actress/getAll`);
    return res;
  } catch (e) {
    return null;
  }
};

export const getAllDirector = async () => {
  try {
    const res = axios.get(`${baseURL}api/director/getAll`);
    return res;
  } catch (e) {
    return null;
  }
};

export const likeById = async (id, likes) => {
  try {
    const res = axios.put(`${baseURL}api/movies/like/${id}`, {
      likes: likes,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const dislikeById = async (id, dislikes) => {
  try {
    const res = axios.put(`${baseURL}api/movies/dislike/${id}`, {
      dislikes: dislikes,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const userLikeById = async (id, likes) => {
  try {
    const res = axios.put(`${baseURL}api/users/like/${id}`, {
      likes: likes,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const userDislikeById = async (id, dislike) => {
  try {
    const res = axios.put(`${baseURL}api/users/dislike/${id}`, {
      dislike: dislike,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const movieReview = async (id, reviews) => {
  try {
    const res = axios.put(`${baseURL}api/movies/review/${id}`, {
      reviews: reviews,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const userReview = async (id, reviews) => {
  try {
    const res = axios.put(`${baseURL}api/users/review/${id}`, {
      reviews: reviews,
    });
    return res;
  } catch (e) {
    return null;
  }
};

export const getAllGenre = async () => {
  try {
    const res = axios.get(`${baseURL}api/genre/getAll`);
    return res;
  } catch (e) {
    return null;
  }
};
