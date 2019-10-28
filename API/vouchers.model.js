const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Vouchers = new Schema({
    name: {
        type: String
    }
     
}, {
    collection: 'vouchers'
});

module.exports = mongoose.model('Vouchers', Vouchers);