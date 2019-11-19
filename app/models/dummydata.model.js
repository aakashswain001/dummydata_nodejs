const mongoose = require('mongoose');
const DummyDataSchema = new mongoose.Schema({
gameName: String,
gameArray: [
  {
    tournamentName:String ,
    tournamentDesc:String,
    registrationFees: Number,
    maxPeople: Number,
    creatorId: String
  }]
},{collection : 'games',timestamps:true});

module.exports = mongoose.model('DummyData', DummyDataSchema);