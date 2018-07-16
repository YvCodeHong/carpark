'use strict';

function Carpark() {
    this.storage = [];
    this.car = new Car();
}


Carpark.prototype.showCarpark = function() {
  return this.storage
};

Carpark.prototype.park = function() {
  var car = this.car;
   this.storage.push(car);
return this.storage;


};
