const Car = require('../models/carModel');

class CarController {
    static async getAllCars(req, res){
        try {
            const cars = await Car.find({}).exec();
            console.log(JSON.stringify(cars));
            res.status(200).json({result: 'success', cars, message: "An array of cars"});
        } catch (err){
            console.log(err);
            res.status(500).json({result: 'failed', message: err});
        }
    }
    static async getACar(req, res){
        try {
            const {slug} = req.params;
            const car = await Car.findOne({ slug }).exec();
            res.status(200).json({result: 'success', car, message: "A car"});
        } catch (err){
            res.status(404).json({result: 'failed to get car', message: err});
        }
    }
    static async addNewCar(req, res){
        try {
            const {model, brand, price} = req.body;
            const car = new Car({model, brand, price});
            car.save();
            res.status(200).json({result: 'success', car, message: "A New Car is added in DB!"});
        } catch (err){
            res.status(404).json({result: 'failed to add a car', message: err});
        }
    }
    static async deleteACar(req, res){
        try {
            const {slug} = req.params;
            const car = await Car.findOne({ slug }).exec();
            await car.remove();
            res.status(200).json({result: 'success, car removed', car, message: "A car"});
        } catch (err){
            res.status(404).json({result: 'failed to remove car', message: err});
        }
    }
    static async updateACar(req, res){
        try {
            const {slug} = req.params;
            const car = await Car.findOne({ slug }).exec();
            await car.updateOne({...req.body});
            res.status(200).json({result: 'success, car updated', car, message: "A car"});
        } catch (err){
            res.status(404).json({result: 'failed to upddate car', message: err});
        }
    }
}

module.exports = CarController;