require("dotenv").config();

const config = {
  BASE_URL: "http://20.207.122.201/evaluation-service",
  TOKEN: process.env.ACCESS_TOKEN
};

console.log("Loaded Token:", config.TOKEN); // 👈 debug

module.exports = config;