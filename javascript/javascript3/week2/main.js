// moving elements one by one
function translateOneByOne() {
  // moving red circle to the target
  moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
    x: 20,
    y: 300,
  })
    .then(() => console.log("Red circle has been moved"))
    // moving blue circle to the target
    .then(() =>
      moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
        x: 400,
        y: 300,
      })
    )
    .then(() => console.log("Blue Circle has been moved"))
    // moving green circle to the target
    .then(() =>
      moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
        x: 400,
        y: 20,
      })
    )
    .then(() => console.log("Green Circle has been moved"));
}
//translateOneByOne();

// function to move all elements at once

function translateAllAtOnce() {
  const promiseRedCircle = moveElement(
    document.querySelector("ul.marks li:nth-child(1)"),
    {
      x: 20,
      y: 300,
    }
  );
  const promiseBlueCircle = moveElement(
    document.querySelector("ul.marks li:nth-child(2)"),
    {
      x: 400,
      y: 300,
    }
  );
  const promiseGreenCircle = moveElement(
    document.querySelector("ul.marks li:nth-child(3)"),
    {
      x: 400,
      y: 20,
    }
  );
  Promise.all([
    promiseRedCircle,
    promiseBlueCircle,
    promiseGreenCircle,
  ]).then(() => console.log("All circles have been moved at once"));
}

translateAllAtOnce();
