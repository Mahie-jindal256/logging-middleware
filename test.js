const Log = require("./logger");

// Example logs
Log("backend", "info", "auth", "User login successful");

Log("backend", "error", "handler", "Received string, expected bool");

Log("backend", "fatal", "db", "Critical database failure");