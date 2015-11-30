'use strict';

var express = require('express');
var logger = require('../lib/winston');
// 创建一个路由器
var router = express.Router();

router.get('/', function(req, res) {

    res.render("index", {"title":"test handlebars2"});
    logger.system.info('请求',{ method: req.method,url: req.url,host: req.hostname,code: res.statusCode,state:res.headersSent });
});

module.exports = router;