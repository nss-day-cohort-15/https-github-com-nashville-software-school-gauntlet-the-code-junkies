var Gauntlet = (function(gauntlet){

  gauntlet.Species = {};
  var randomSkin;

  gauntlet.Species.Specie = function (){
    this.health = Math.floor(Math.random() * 40 + 50);
    // this.limbs = ["head", "neck", "arm", "leg", "torso"];
    this.skinColor = "tan";
    // this.skinColors = [this.skinColor];
    this.strength = 90;
    this.intelligence = 90;
  }

  gauntlet.Species.Human = function() {
    this.speciesName = "Human";
    this.health += 20;

    // this.skinColors.push("brown", "red", "white", "disease");
    // randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    // this.skinColor = this.skinColors[randomSkin];
  };
  gauntlet.Species.Human.prototype = new gauntlet.Species.Specie();


  gauntlet.Species.Elf = function() {
    this.speciesName = "Elf";
    this.intelligence += 20;

    // this.skinColors.push("brown", "red", "white", "disease");
    // randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    // this.skinColor = this.skinColors[randomSkin];
  };

  gauntlet.Species.Elf.prototype = new gauntlet.Species.Specie();

  gauntlet.Species.Orc = function() {
    this.speciesName = "Orc";
    this.strength += 20;

    // this.skinColors.push("brown", "red", "white", "disease");
    // randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    // this.skinColor = this.skinColors[randomSkin];
  };

  gauntlet.Species.Orc.prototype = new gauntlet.Species.Specie();


  return gauntlet

})(Gauntlet || {})