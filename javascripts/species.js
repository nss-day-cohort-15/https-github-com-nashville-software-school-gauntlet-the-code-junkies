var Gauntlet = (function(gauntlet){

  gauntlet.Species = {};
  var randomSkin;

  gauntlet.Species.Human = function() {
    this.species = "Human";
    this.health += 20;

    // this.skinColors.push("brown", "red", "white", "disease");
    // randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    // this.skinColor = this.skinColors[randomSkin];
  };
  gauntlet.Species.Human.prototype = new Gauntlet.Combatants.Player();


  gauntlet.Species.Elf = function() {
    this.species = "Elf";
    this.intelligence += 20;

    // this.skinColors.push("brown", "red", "white", "disease");
    // randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    // this.skinColor = this.skinColors[randomSkin];
  };

  gauntlet.Species.Elf.prototype = new gauntlet.Combatants.Player();

  gauntlet.Species.Orc = function() {
    this.species = "Orc";
    this.strength += 20;

    // this.skinColors.push("brown", "red", "white", "disease");
    // randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    // this.skinColor = this.skinColors[randomSkin];
  };

  gauntlet.Species.Orc.prototype = new gauntlet.Combatants.Player();


  return gauntlet

})(Gauntlet || {})