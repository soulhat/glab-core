var assert = require('assert');
var should = require('should');
var lib = require('../lib/lib');
var Promise = require("bluebird");
require('should-promised');
var fs = require('fs');
var muk = require('muk');
var rewire = require("rewire");
var express = require("express");
var request = require("supertest");
var app = express();
var test = express();

// 路由测试

// 数据库测试
