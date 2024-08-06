class ErrorLogger {
  constructor() {
    this.logs = [];
  }

  logError(error) {
    const type = error.type || "unknown";

    let stack = "";
    let message = "";
    let date = new Date().toISOString();

    if (type === "unhandledrejection") {
      message = error.reason.message || "Unkown Error";
      stack = error.reason.stack || "Unkown Stack";
    } else {
      message = message = error.message || "Unkown Error";
      stack = error.stack || "No stack trace";
    }

    this.logs.push({ type, message, date });
  }
}

const logger = new ErrorLogger();

window.addEventListener("error", (e) => {
  logger.logError(e);
});

window.addEventListener("unhandledrejection", (e) => {
  logger.logError(e);
});

// Example of an error in a promise
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong in async function"));
    }, 1000);
  });
}

asyncFunction();

function throwError() {
  throw new Error("This is a regular error");
}

throwError();
