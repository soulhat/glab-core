'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    url: String,
    slug: String,
	label: Number,
	age: String
});