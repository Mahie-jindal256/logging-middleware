const axios = require("axios");
const { BASE_URL, TOKEN } = require("./config");

const validStacks = ["backend", "frontend"];
const validLevels = ["debug", "info", "warn", "error", "fatal"];

const Log = async (stack, level, pkg, message) => {
  try {
    // 🔹 Validation (good for marks)
    if (!validStacks.includes(stack)) {
      throw new Error("Invalid stack");
    }

    if (!validLevels.includes(level)) {
      throw new Error("Invalid level");
    }

    console.log("Sending log...");

    const response = await axios.post(
      `${BASE_URL}/logs`,
      {
        stack,
        level,
        package: pkg,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("✅ Log sent:", response.data);

  } catch (error) {
    console.error("❌ Logging failed:", error.message);
  }
};

module.exports = Log;