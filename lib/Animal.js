//This is one option
// module.exports = function Animal() {
//   this.isAlive = true;
//   Animal.prototype.beCute = function() {
//   this.isCute = true;
//   }
// };

function Animal(type) {
  this.isAlive = true;
  this.type = type;
  this.health = 1;
}

Animal.prototype.beCute = function() {
  this.isCute = true;
};

Animal.prototype.updateHealthStats = function(done) {
  // this.health = Math.random();

  var self = this;
  setTimeout(function() {
    self.health = Math.random();
    done();
  }, 1000);
};

module.exports = Animal;
