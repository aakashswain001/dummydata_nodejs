const DummyData = require('../models/dummydata.model.js');

exports.create = (req, res) => {
    rand = function(limit) {
        return Math.floor(Math.random()*limit);
    };
    var gamenames = ["PUBG","MLBB","FIFA 20"]
    //var gamename = gamenames[rand(gamenames.length)]
    var gamename = "PUBG"
    var xarr = []
        
    for( var i=1;i<10000;i++){  
        var tournamentDescArray = ["Best Game Ever","Too comepetetive","Hard Game play","Hardcore game","Best match you will ever find","fight for life"]
        var tournamentName = gamename + i.toString()
        var tournamentDesc = tournamentDescArray[rand(tournamentDescArray.length)]
        var registrationFees = rand(500)
        var maxPeople = rand(100)
        var creatorId = "C" + (1000 + rand(50)).toString() 
        var x = {
            "tournamentName": tournamentName,
            "tournamentDesc": tournamentDesc,
            "registrationFees": registrationFees,
            "maxPeople": maxPeople,
            "creatorId": creatorId}
        xarr.push(x)
        // Save Note in the database
    }
    var dummydata = new DummyData({
        "gameName": gamename,
        "gameArray": xarr
        });
        dummydata.save().then().catch();
    res.send({message:"Added Successfully"});
    
};


