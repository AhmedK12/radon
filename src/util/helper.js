date = new Date()


const printDate = function(){
    
    return (date.toDateString())
}


const printMonth = function(){
     return (date.getMonth())
}

const getBatchInfo = function(){
return (`Radon W3D1, the topic for today is Nodejs module system kama`)
}

module.exports = {printDate,printMonth,getBatchInfo}