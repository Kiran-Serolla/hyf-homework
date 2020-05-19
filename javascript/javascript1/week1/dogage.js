const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;

let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
  console.log("your dog will be " + dogYear * 7 + " dog years old in 2027");
} else {
  console.log("Your dog will be " + dogYear + " human years old in 2027");
}
