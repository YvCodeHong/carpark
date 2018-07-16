'use strict';

function Carpark() {
    this.storage = [];
    this.car = new Car();
    this.fee = 10
}


Carpark.prototype.showCarpark = function() {
  return this.storage
};

Carpark.prototype.park = function() {
   this.storage.push(this.car);
};


Carpark.prototype.getFee = function() {
  return this.fee
};

Carpark.prototype.payCash = function() {
  return this.fee - 10
};
