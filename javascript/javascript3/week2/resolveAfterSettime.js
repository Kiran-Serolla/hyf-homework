function resolveAfterDelay(resolveAfter) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  }).then(() => {
    console.log("I am called asynchronously");
  });
}
resolveAfterDelay(8);
