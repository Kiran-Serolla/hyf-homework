const logFunnyJoke = () => {
  console.log("funny joke");
};
const logBadJoke = () => {
  console.log("bad joke");
};

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(false, logFunnyJoke, logBadJoke);
