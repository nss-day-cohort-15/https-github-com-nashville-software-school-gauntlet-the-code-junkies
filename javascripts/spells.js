/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.type = "mysticism";
  this.damage = Math.floor(Math.random() * 10 + 10);
};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();


Gauntlet.SpellBook.FireBall = function() {
  this.name = "fire ball";
  this.type = "fire";
  this.damage = Math.floor(Math.random() * 20 + 5);
};
Gauntlet.SpellBook.FireBall.prototype = new Gauntlet.SpellBook.Spell();


Gauntlet.SpellBook.LightningBolt = function() {
  this.name = "lightning bolt";
  this.type = "lightning";
  this.damage = Math.floor(Math.random() * 10 + 15);
};
Gauntlet.SpellBook.LightningBolt.prototype = new Gauntlet.SpellBook.Spell();


Gauntlet.SpellBook.Freeze = function() {
  this.name = "freeze";
  this.type = "water";
  this.damage = 20;
};
Gauntlet.SpellBook.Freeze.prototype = new Gauntlet.SpellBook.Spell();


Gauntlet.SpellBook.BoulderToss = function() {
  this.name = "boulder toss";
  this.type = "earth";
  this.damage = Math.floor(Math.random() * 20 + 20);
};
Gauntlet.SpellBook.BoulderToss.prototype = new Gauntlet.SpellBook.Spell();
