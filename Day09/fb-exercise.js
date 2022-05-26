const facebookProfiles = [
    {
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

function profileLookup(name, property) {
    //write your code here
    let person = facebookProfiles.find(element=>element.firstName + " "+element.lastName==name)
    if(person==undefined)
        return "person does not exist"
    else{
        if(person[property]==undefined)
          return "no such property"
    }

    return person[property];
}

// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //

function getNamesFromGurgaon(facebookProfiles) {
    //write your code here
    let Names = []
    facebookProfiles.forEach(element => {
        if(element.address.location=='gurgaon'){
       

            Names.push((element.firstName || "" ) + " " +  (element.lastName || ""))
        }
    });
    return Names
}
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

function findFullName(stateName) {
    //write your code here
    return facebookProfiles.find(element=>element.address.state==stateName) || `Oops! No one from ${stateName}`
}
// 2. complete this function, which takes state name as argument and return the name 
// of one of its residents

// ================================== 3 ====================================== //

function getDLStatus(facebookProfiles) {
    //write your code here
     //write your code here
     let persons_from_gurgaon = facebookProfiles.filter(element=>element.address.location=='gurgaon')
     let status = []
     persons_from_gurgaon.forEach(element => {
         status.push(element.firstName +" "+ (element.lastName||"") +" - "+ (element.hasDrivingLicense==true?'D/L':'N D/L'))
     });
     return status
}

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

function getFullName(facebookProfiles) {
    //write your code here
    let fullnames = []
    facebookProfiles.forEach(element => {
        fullnames.push(element.firstName + element.lastName||"")
    });
    return fullnames
}

// 4. write a function which returns full names in an array
//ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

function getLikes(facebookProfiles) {
    //write your code here
    let like = []
    let person_having_likes = facebookProfiles.filter(element=>element.likes!=undefined)
    person_having_likes.forEach(element => {
        like.push(...element.likes)
    });
    return like
}

// 5. write a function which returns all likes of all the people in an array
//hint: use spread syntax
//ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

function getNameFromDelhiWithDL(facebookProfiles) {
    //write your code here
    return facebookProfiles.find(elment=> elment.address.state=='delhi' && elment.hasDrivingLicense==true) || "Oops! No such person"

}

//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

function getNameOfDriverWithoutDL(facebookProfiles) {
    //write your code here
   return facebookProfiles.find(elment=> elment.likes.find(el=>el=='driving')!=undefined&&elment.hasDrivingLicense==false) || "Oops! No such person"
   
}
//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh

console.log(profileLookup('Pritesh Kumar','number'))

