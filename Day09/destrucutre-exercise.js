const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax

// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']
let a,rest;
[a, ...rest] = places;
console.log(rest)   

// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
   morePlaces.unshift('delhi')
   console.log(morePlaces)
  
   
// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
let a1,b1,rest1,result;
   [a,b1,...rest] = morePlaces;
   [b1,...rest1] = places.reverse()
   result = rest.concat(rest1)
   console.log(result)

const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
      pinCode: 123455,
      city:"delhi"
    },
    likes:["music", "movies"]
  }
  
// 4.
// destructure and store pincode into a variable named myPincode

let {name,age,gender,address:{pinCode :mypincode,city},likes} = myData;

console.log(mypincode)


// 5.
// destructure and store second like into a vaiable named myLike
let [ayu,myLike] = likes
console.log(myLike)
  