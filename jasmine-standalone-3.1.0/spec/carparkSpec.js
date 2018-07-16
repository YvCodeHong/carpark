'use strict';

describe('Carpark', function() {
  var carpark;
  // var car;

beforeEach(function () {
    carpark = new Carpark();
    // car = jasmine.createSpy('car', ['park']);
  });
 it('has no cars by default', function() {
    expect(carpark.showCarPark()).toEqual([]);
  });
//   it('can clear cars for parking', function() {
//     carpark.clearToPark(car);
//     expect(carpark.car()).toEqual([car]);
//   });
});
