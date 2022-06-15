/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1 Answer");

//prints out each item in our array 1 at a time
{
console.log(conststudents[i]);
}
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1 
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code

  let conststudents =["Tre", "Sonny", "Crystal", "Ilyas", "Greg","Fernando","Timothy","Patrick","Steve","Jimothy","Pat","Arnold", "Andy"]
for (let i = 0; i < 12; i++)
//prints out each item in our array 1 at a time
{
console.log(conststudents[i]);
}

  console.log("\n");
  console.log("Challenge 2 Answer"); 
  
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

let constgrades = [100 ,80, 110, 75, 83, 64];
{
console.log(constgrades.reverse());
for (let i = 0; i < 7; i++)
console.log(constgrades[i]);
}

  


  console.log("\n");
  console.log("Challenge 3 Answer");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code

  const even = constpositiveNumbers.filter(number =>{
    return number % 2 === 0;
});
console.log(even);

  console.log("\n");
  console.log("Challenge 4 Answer");
 
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code

  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  const even = mixedSignNumbers.filter(number =>{
      return number % 2 === 0;
  });
  console.log(even);

  
  console.log("\n");
  console.log("Challenge 5 Answer");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
    
  let constsymetricalCapitals = ['I', 'M','O', 'T', 'U', 'V', 'W', 'X',];
  for (let i = 0; i < 8; i++)
  {
  console.log(constsymetricalCapitals[i]);
  }

  console.log("\n");
  console.log("Challenge 6 Answer");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  
  
  let fibonacciNumbers = [6, 1, 1, 2, 3, 5, 8, 13, 56, 33];
  for (let i = 0; i < 10; i++)
  {
  console.log(constfibonacciNumbers[i]);
  }

  console.log("\n");
  console.log("Challenge 7 Answer");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  const newArray = [1, 2, 3, 4, 5];
  // Challenge 7 Code

  for (let i = 0; i < 6; i++)
  {
  console.log(newArray[i]);
  }



  console.log("\n");
  console.log("Challenge 8 Answer");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code

  const emptyArray = [];
  emptyArray.push("7" , "11" , "3" , "8", "12");
  console.log(emptyArray);
  emptyArray.unshift(17)
  console.log(emptyArray);


  console.log("\n");
  console.log("Challenge 9 Answer");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  let newArray = conststudents.slice(3,10);
for (let i = 0; i < 7; i++)
{
    console.log(newArray[i]);
}

  
  console.log("\n");
  console.log("Challenge 10 Answer");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

  let newArray = conststudents;
  for (let i = 0; i < 12; i++)
  {
    console.log(newArray[i]);
  }
  
 

  console.log("\n");
  console.log("Challenge 11 Answer");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  
  let newArray = conststudents.slice(3,10);
  for (let i = 0; i < 7; i++) {
  console.log(newArray[i]);
  }


  console.log("\n");
  console.log("Challenge 12 Answer");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

  let newDinosaurs = dinosaurs.splice(4,6);
  console.log("Dinosaurs removed by splice: " + newDinosaurs)
  console.log("\n")
  for (let i = 0; i < 4; i++)
  {
      console.log(dinosaurs[i])
  }
  
  
  console.log("\n");
  console.log("Challenge 13 Answer");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code
     
  console.log(dinosaurs.join("*"));


  
  console.log("\n");

  console.log("Challenge 14 Answer");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code



  
  console.log("\n");
  console.log("Challenge 15 Answer");
  // Challenge 15
  // Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code


  
