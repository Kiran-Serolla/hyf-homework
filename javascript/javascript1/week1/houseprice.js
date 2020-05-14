var housePrice;
var volumeInMeters;
var gardenSizeInM2;
// Peters house measurements
volumeInMeters = 8*10*10;
gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > 2500000)
 {
     console.log("Peter is paying too much");
    
} 
else {
    console.log("Peter is paying toot little");
    
}
// Julia's house price

volumeInMeters = 5*11*8;
gardenSizeInM2 = 70;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (housePrice > 1000000)
 {
     console.log("Julia is paying too much");
    
} 
else {
    console.log("Julia is paying toot little");
    
}
