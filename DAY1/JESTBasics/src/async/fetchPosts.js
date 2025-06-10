const axios = require("axios");
function fetchPosts() {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
}

async function fetchPostWithId(id) {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching post with ID ${id}: ${error.message}`);
  }
}
module.exports = { fetchPosts, fetchPostWithId };
