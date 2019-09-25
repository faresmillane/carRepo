const express = require('express');
const router = express.Router();
const CarController = require('../controllers/carControllers');
//const Controller = require ('./controller')
//********************************** */

//router.all('*', Controller.allInit);

router.route('/car')
.get(CarController.getAllCars)
.post(CarController.addNewCar);


router.route('/car/:slug')
.get(CarController.getACar)
.patch(CarController.updateACar)
.delete(CarController.deleteACar);

module.exports = router;