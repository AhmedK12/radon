


const isFreeAppUser = function (req,res,next){
    // console.log(req.headers["isfreeappuser"])
    req.body["isfreeappuser"] = req.headers["isfreeappuser"]

    if(req.headers["isfreeappuser"]===undefined){
        res.send({Error:"request is missing a mandatory header:  isFreeAppUser"})
    }
    else
     next()
}


module.exports.isFreeAppUser = isFreeAppUser