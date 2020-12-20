/* The following two arrays contain an array of friends, however two of them are mutual */
let bobsFollowers = ['Adam Driver', 'Tom Hanks', 'Gordon Ramsey', 'Bob the Builder'];

let tinasFollowers = ['Alex Mason', 'Tom Hanks', 'Adam Driver'];

//This array will be containing the mutual friends between Tina and Bob
let mutualFollowers = [];

//This for loop contains a nested loop, this will help collect the mutual friends
for (let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j])
    }
  }
};

//This displays the mutual friends after being selected in the nested for loop to the console.
console.log(mutualFollowers)