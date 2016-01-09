'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    url: String,
    description: String,
    slug: String,
    label: String
});