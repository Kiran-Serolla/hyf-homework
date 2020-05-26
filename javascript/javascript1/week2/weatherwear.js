function temperatureToday(temperature) {
  if (temperature > 0 && temperature < 10) {
    console.log("Wear warm Jacket");
  } else if (temperature > 10 && temperature < 17) {
    console.log("Wear Sweater");
  } else if (temperature > 17) {
    console.log("Wear Shorts");
  }
}
const clothesToWear = temperatureToday(1);
//console.log(clothesToWear);
