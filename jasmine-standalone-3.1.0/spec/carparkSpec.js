'use strict';

describe('Carpark', function() {

  var carpark;
  var car;

beforeEach(function () {
    carpark = new Carpark();
    car = new Car();
  });

 it('has no cars by default', function() {
    expect(carpark.showCarpark()).toEqual([]);
  });

  it('should park the car', function() {
      carpark.park()
     expect(carpark.storage).toContain(car);
   });

   it('should see the fee for parking', function() {
      expect(carpark.getFee()).toEqual(10);
    });

    it('pay fee using cash', function() {
       expect(carpark.payCash()).toEqual(0);
     });



});
