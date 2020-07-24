function logAfterDelay(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

logAfterDelay(2, "This tet is logged after 2 seconds");
