var should = require("chai").should();
var path = require('path');
var Animal = require(path.join(process.cwd() + "/lib/Animal"));

describe('Animal', function() {
  describe('constructor', function() {
    it('should return an animal object', function() {
      var animal = new Animal();
      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    })
    it('should be alive', function() {
      var animal = new Animal();
      animal.isAlive.should.be.true;
    });
    it('should have 100% health', function() {
      var animal = new Animal();
      animal.health.should.equal(1);
    });
    it('should accept a type', function() {
      var cat = new Animal('cat');
      var dog = new Animal('dog');
      cat.type.should.equal('cat');
      dog.type.should.equal('dog');
    });
  });

  describe('#updateHealthStats()', function() {
    it('should change the health', function(done) {
      var animal = new Animal();
      var health = animal.health;
      animal.updateHealthStats(function() {
        animal.health.should.not.equal(health);
        done();
      });
    });
  });

  describe('#beCute()', function() {
    it('should be a prototype method', function() {
      var animal = new Animal();
      animal.should.respondTo('beCute');
      animal.should.not.have.ownProperty('beCute');
    });
    it('should make the animal cute', function() {
      var animal = new Animal();
      should.not.exist(animal.isCute);
      animal.beCute(); //executing
      animal.isCute.should.be.true;
    });
  });
});
