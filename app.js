// use:
// var Display = require("./7leddisplay.js")
// var d = new Display();
// d.count();

function Display(){
  var Gpio = require('onoff').Gpio;
  var s = require('sleep');

  this.leds = [
    new Gpio(14, 'out'),
    new Gpio(15, 'out'),
    new Gpio(4, 'out'),
    new Gpio(23, 'out'),
    new Gpio(24, 'out'),
    new Gpio(25, 'out'),
    new Gpio(17, 'out'),
    new Gpio(18, 'out')
  ];
  this.counter= null;

  this.active= function() {
    this.leds.map(function(led){
      led.writeSync(1);
    });
  }

  this.inactive= function() {
    this.leds.map(function(led){
      led.writeSync(0);
    });
  }

  this.activeByArray= function(arr){
    var _this = this;
    arr.map(function(val, index){
      _this.leds[index].writeSync(val);
    });
  }

  this.inactive();

  this.setChar= function(char){
    switch(char.toString()) {
      case "0": this.activeByArray([0,1,1,1,1,1,1,0]); break;
      case "1": this.activeByArray([0,1,0,1,0,0,0,0]); break;
      case "2": this.activeByArray([1,1,1,0,1,0,1,0]); break;
      case "3": this.activeByArray([1,1,1,1,0,0,1,0]); break;
      case "4": this.activeByArray([1,1,0,1,0,1,0,0]); break;
      case "5": this.activeByArray([1,0,1,1,0,1,1,0]); break;
      case "6": this.activeByArray([1,0,1,1,1,1,1,0]); break;
      case "7": this.activeByArray([0,1,1,1,0,0,0,0]); break;
      case "8": this.activeByArray([1,1,1,1,1,1,1,0]); break;
      case "9": this.activeByArray([1,1,1,1,0,1,1,0]); break;
      default: this.inactive();
    }
  }

  this.countStart= function(){
    var _this = this;
    var i=0;
    this.counter = setInterval(function(){
      _this.setChar(i);
      i++;
      if (i>=10) { i=0  }
    }, 1000);
  };

  this.countStop= function(){
    clearInterval(this.counter);
    this.inactive();
  }

  //for(var i=0;i<10;i++){
  //  inactive();
  //  s.sleep(1);
  //  active(1);
  //  s.sleep(1);
  //  inactive();
  //}
}

module.exports = Display;
