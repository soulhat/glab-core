'use strict';

var winston = require('winston');


winston.loggers.add('database', {
    console: {
        level: 'silly',
        colorize: true,
        label: 'database',
        timestamp: function() {
            return Date.now();
        },
        formatter: function(options) {
            // Return string will be passed to logger.
            return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
                (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
        }
    },
    file: {
        filename: './logs/database.log'
    }
});

winston.loggers.add('system', {
    console: {
        level: 'silly',
        colorize: true,
        label: 'system'
    },
    file: {
        filename: './logs/system.log'
    }
});

/*自定义日志*/
var myCustomLevels = {
    levels: {
        foo: 0,
        bar: 1,
        baz: 2,
        foobar: 3
    },
    colors: {
        foo: 'blue',
        bar: 'green',
        baz: 'yellow',
        foobar: 'red'
    }
};

var custom = new (winston.Logger)({
    colors: myCustomLevels.colors,
    levels: myCustomLevels.levels,
    transports: [
        new (winston.transports.Console)({
            level: 'foobar',
            colorize: true,
            label: 'custom'
        }),
        new (winston.transports.File)({
            level: 'foobar',
            name: 'exception',
            colorize: true,
            filename: './logs/custom.log',
            handleExceptions: true,
            humanReadableUnhandledException: true
        })
    ]
});

var database = winston.loggers.get('database');
var system = winston.loggers.get('system');
module.exports = {
    custom: custom,
    system: system,
    database: database
};