const mongoose = require('mongoose');
const uniqueSlug = require('unique-slug');

const CarShema = new mongoose.Schema({
    brand: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: Number, required: true},
    slug: {
        type: String,
        unique: true
    }
});

CarShema.pre('save', function (done)  {
    try{
        this.slug = uniqueSlug(`${this.brand +this.model + this.price}`);
        done();
    } catch{
        done(new Error ('cannot create slug'));
    }
    
});

module.exports = mongoose.model('car', CarShema);