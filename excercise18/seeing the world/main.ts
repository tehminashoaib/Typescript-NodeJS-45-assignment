let places : string[] = ["Tomb of Quaid" , "Minar e Pakistan" , "Faisal mosque" , "Khyber pass"];

console.log(`original order:`  , places);

console.log(`Alphabetical order :`, [...places].sort());

console.log(`Reverse order:`, [...places].reverse());

console.log(`Reverse alphabetical order:`, [...places].sort().reverse());

places.reverse();
console.log("Reverse order;" , places);

places.reverse();
console.log("orignal order:" , places);

places.sort();
console.log("Alphabetical order:" , places);

places.reverse();
console.log("Reverse Alphabetical order:" , places);