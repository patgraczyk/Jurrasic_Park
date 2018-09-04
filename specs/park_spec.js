const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur1;
  let dinosaur2;


  beforeEach(function () {
    park = new Park("Central Park", 50);
    dinosaur1 = new Dinosaur("t-rex", "herbivore", 20);
    dinosaur2 = new Dinosaur("t-notrex", "herbivore", 50);
    dinosaur3 = new Dinosaur("ttt-rex", "carnivore", 30);
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Central Park");
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual,[]);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaurs(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaurs(dinosaur1);
    park.addDinosaurs(dinosaur2);
    park.removeDinosaurs(dinosaur1);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaurs(dinosaur1);
    park.addDinosaurs(dinosaur2);
    const actual = park.mostVisitedDinosaur();
    assert.strictEqual(actual, 't-notrex');
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaurs(dinosaur1);
    park.addDinosaurs(dinosaur2);
    park.addDinosaurs(dinosaur3);
    const actual = park.allDinosaurOfSpecies("herbivore");
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaurs(dinosaur1);
    park.addDinosaurs(dinosaur2);
    park.addDinosaurs(dinosaur3);
    park.removeDinosaursOfKind("carnivore");
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 3);
  });

  

});
