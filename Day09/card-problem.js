const cardData = [
    {
        suit: "heart",
        value: 7,
    },
    {
        suit: "club",
        value: 8,
    },
    {
        suit: "club",
        value: 2,
    },
    {
        suit: "diamond",
        value: 2,
    },
    {
        suit: "diamond",
        value: 5,
    },
    {
        suit: "club",
        value: 10,
    },
];

// =========================================== 1 ==================================================== //


function findCard(value, suit) {
    let check = false
    cardData.forEach(element => {
        if(element.suit==suit && element.value==value)
          check =  true;
    });
    if(check)
      return true
     return false;
}

/** * 1. complete the above function,
 * it should return true /false if card is present/absent
 * example
 * findCard(5, 'heart') should return false
 * findCard(10, 'club') should return true
*/

// =============================================== 2 ================================================ //


function getSuits(cardData) { 
    let ans = []
    cardData.forEach(element => {
        let a = element.suit
        if(ans.find(el=> el==a )==undefined){
          ans.push(a)
        }
    });
    return ans;
}
/**
    2. write a function which returns the list of available suits in the above data
 * ans => ["heart", "club", "diamond"]
*/


// ================================================ 3 =============================================== //


function getSuitCount(cardData) {
    // write your code here
    const map1 = new Map();
    cardData.forEach(element =>{
        if(map1.get(element.suit)==undefined)
           map1.set(element.suit,1)
        else{
            map1.set(element.suit,map1.get(element.suit)+1)
        }
    });
    return Object.fromEntries(map1)
}
/**
 * 3. write a function which returns an object with the suits as its key and its total count as its value
 * ans => {  heart:1,  club:3, diamond:2,}
*/

// ================================================= 4 ============================================== //

function getSuitValues(cardData) {
    // write your code here
    const map1 = new Map();
    cardData.forEach(element =>{
        if(map1.get(element.suit)==undefined)
           map1.set(element.suit,[element.value])
        else{
            let a = map1.get(element.suit)
            a.push(element.value)
            map1.set(element.suit,a)
        }
    });
    return Object.fromEntries(map1)
}

/** 
 *  4. write a function which returns an object with the suits as its key and its available values as value
 *  ans => { heart:[7], club:[8,2,10], diamond:[2,5]} 
 *   
*/






console.log(findCard(2,'club'))
