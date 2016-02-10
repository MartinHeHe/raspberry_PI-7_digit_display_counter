# raspberry PI - 7_digit_display_counter

Developed with nodeJS 5.6.0

#Install
```
npm install
```

#Use

Open a node REPL and

``` js
var Display = require("./app.js")
var d = new Display();
d.countStart();  / to stop counter
d.countStop(); //to start counter
```
