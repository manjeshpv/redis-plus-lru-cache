/**
 * Created by ManjeshV on 3/17/2015.
 */

var lruCachePlusRedis = {
    lruCache: {
        max: 500, length: function (n) {
            return n * 2
        }, displose: function (key, n) {
            n.close()
        }, maxAge: 1000 * 60 * 60
    },
    redis: {
        port: 6379,
        servers: '192.168.59.103'
    },
    prefix: "hapi_test_"
}



var cache = require('./')(lruCachePlusRedis)

cache.set("CacheAboutUsPage",{name:"About Us","content":"Lorem  Ipsum Sample Text"},function(){
    console.log("Cache Set");
    cache.get("CacheAboutUsPage",function(error,data){
        if(!error){
            console.log("Data found:",data)
        }
    })
})




