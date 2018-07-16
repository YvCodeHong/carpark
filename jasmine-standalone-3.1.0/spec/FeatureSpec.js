'use strict';

describe('Feature Test:', function(){
  var carpark;
  var car;
});

beforeEach(function(){
  carpark = new Carpark();
  car = new Car();
});

it('car can park in the carpark', function(){
  car.park(carpark);
  expect(carpark.car()).toContain(car);
});
});
