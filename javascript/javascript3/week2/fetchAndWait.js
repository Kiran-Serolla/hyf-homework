console.log("Script Loaded");
// Using Promise and .then

setTimeout(() => {
  fetch("https://yesno.wtf/api")
    .then((response) => response.json())
    .then((data) => {
      console.log("Success", data);
    }),
    3000;
});

// using async await
async function fetchWait() {
  try {
    const response = await fetch("https://yesno.wtf/api");
    const stringify = await response.json();
    setTimeout(async () => {
      console.log("From Async");
      console.log(stringify);
    }, 3000);
  } catch (error) {
    console.log(error);
  }
}
fetchWait();
