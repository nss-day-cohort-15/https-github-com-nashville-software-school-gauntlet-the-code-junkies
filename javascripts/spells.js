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
    this.damage = Math.floor(Math.random() * 10 + 10);

    var random = Math.round(Math.random() * (this.damageTypes.length - 1));
    this.type = this.damageTypes[random];
  };
  gauntlet.SpellBook.Sphere.prototype = new gauntlet.SpellBook.Spell();

  return gauntlet

})(Gauntlet || {});