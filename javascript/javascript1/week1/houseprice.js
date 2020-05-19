let housePrice;
let volumeInMeters;
let gardenSizeInM2;

/* Caculating peters house price using the formula :
 * housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300
 *  Peters house measurements:
 *
 *    widht = 8 M
 *   Depth = 10 M
 *   Height = 10 M
 *  since volumt = Width * Height * Depth,*/

volumeInMeters = 8 * 10 * 10;
gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > 2500000) {
  console.log("Peter is paying too much");
} else {
  console.log("Peter is paying toot little");
}
//  Calculating Julia's house price usinfg the same formula from above.

volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > 1000000) {
  console.log("Julia is paying too much");
} else {
  console.log("Julia is paying toot little");
}
