# rsearch
Make a search query into a glob pattern for redis

## usage

``` javascript
const rsearch = require("rsearch");

console.log(rsearch("Hello, World!"));
// *[Hh][Ee][Ll][Ll][Oo]?*[Ww][Oo][Rr][Ll][Dd]?*
```
