import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID MbRN5TJnIIHDZrvTfqZxlox2foA3Q6eJEyJkdF09qUc",
  },
});
