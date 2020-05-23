function temperatureToday(a) {
  const temp = a;
  if (temp > 0 && temp < 10) {
    console.log("Wear warm Jacket");
  } else if (temp > 10 && temp < 17) {
    console.log("Wear Sweater");
  } else if (temp > 17) {
    console.log("Wear Shorts");
  }
}
const clothesToWear = temperatureToday(22);
//console.log(clothesToWear);
