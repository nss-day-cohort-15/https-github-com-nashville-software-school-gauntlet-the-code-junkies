var Gauntlet = (function(gauntlet){

  gauntlet.SpellBook = {};
  /*
    Base spell function that defines name, damage, damage type
   */
  gauntlet.SpellBook.Spell = function() {
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
  gauntlet.SpellBook.Sphere = function() {
    this.name = "sphere";
    this.type = "mysticism";
    this.damage = Math.floor(Math.random() * 10 + 10);
  };
  gauntlet.SpellBook.Sphere.prototype = new gauntlet.SpellBook.Spell();


  gauntlet.SpellBook.FireBall = function() {
    this.name = "fire ball";
    this.type = "fire";
    this.damage = Math.floor(Math.random() * 20 + 5);
  };
  gauntlet.SpellBook.FireBall.prototype = new gauntlet.SpellBook.Spell();


  gauntlet.SpellBook.LightningBolt = function() {
    this.name = "lightning bolt";
    this.type = "lightning";
    this.damage = Math.floor(Math.random() * 10 + 15);
  };
  gauntlet.SpellBook.LightningBolt.prototype = new gauntlet.SpellBook.Spell();


  gauntlet.SpellBook.Freeze = function() {
    this.name = "freeze";
    this.type = "water";
    this.damage = 20;
  };
  gauntlet.SpellBook.Freeze.prototype = new gauntlet.SpellBook.Spell();


  gauntlet.SpellBook.BoulderToss = function() {
    this.name = "boulder toss";
    this.type = "earth";
    this.damage = Math.floor(Math.random() * 20 + 20);
  };
  gauntlet.SpellBook.BoulderToss.prototype = new gauntlet.SpellBook.Spell();

  return gauntlet

})(Gauntlet || {});

