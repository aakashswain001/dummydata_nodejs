module.exports = (app) => {
    const dummydata = require('../controllers/dummydata.controller.js');

    // Create a new Survey
    app.post('/add/', dummydata.create);
}