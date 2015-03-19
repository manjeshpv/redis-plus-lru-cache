var LRU = require("lru-cache");
var redis = require("redis");
var jsonify = require('redis-jsonify');
var lrucache;
var client;
//lrucache.reset();

module.exports = function (options) {
    lrucache = LRU(options.lruCache);
    client = jsonify(redis.createClient(options.redis.port, options.redis.servers, {}));
    if(options.hasOwnProperty('prefix'))
        prefix = options.prefix
    else
        prefix = ""
    return {
        get: function (key, callback) {
            var error = null;
            if (lrucache.has(prefix + key)) {
                return callback(error, lrucache.get(prefix + key));
            } else {
                client.get(prefix + key, function (error, data) {
                    if (data) {
                        lrucache.set(prefix + key, data);
                        return callback(error, data);
                    } else {
                        return callback(error, null);
                    }
                });
            }
        },
        set: function (key, data,callback) {
            lrucache.set(prefix + key, data);
            client.set(prefix + key, data, function () {
                if (typeof callback == "function")
                    callback();
            });
        }
    }
};


