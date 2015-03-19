## Redis Plus LRU Cache

This module is used as cache middleware and it provides helper methods to the use lru cache plugin and redis for persistence and clustering.

## Installation

```sh
$ npm install redis-plus-lru-cache
```

or specify in package.json as dependency

## Usage

with express

```js
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



var cache = require('redis-plus-lru-cache')(lruCachePlusRedis)

cache.set("CacheAboutUsPage",{name:"About Us","content":"Lorem  Ipsum Sample Text"},function(){
    console.log("Cache Set");
    cache.get("CacheAboutUsPage",function(error,data){
        if(!error){
            console.log("Data found:",data)
        }
    })
})

```

## License
(The MIT License)

Copyright (c) 2015 Manjesh V < [manjeshpv@gmail.com](mailto:manjeshpv@gmail.com) >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
