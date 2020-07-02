function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(4, () => {
  console.log("Should be logged after 4 seconds");
});
