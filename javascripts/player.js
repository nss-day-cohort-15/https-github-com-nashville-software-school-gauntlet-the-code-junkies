var Gauntlet = (function(gauntlet) {

  gauntlet.Combatants = {};
    /*
      Define the base object for any player of gauntlet,
      whether a human player or a monster.
     */
  gauntlet.Combatants.Player = function(name) {
    this.species = null;
    this.class = null;
    this.weapon = null;

    this.playerName = name || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 50);
    // this.limbs = ["head", "neck", "arm", "leg", "torso"];
    this.skinColor = "tan";
    this.skinColors = [this.skinColor];
    this.strength = 90;
    this.intelligence = 90;

    this.toString = function() {
      var output = [this.playerName,
        ": a ",
        this.skinColor,
        " skinned ",
        this.species,
        " ",
        this.class,
        " with ",
        this.health,
        " health. ",
        (this.class.magical) ? "Able to cast " : " Wielding a ",
        this.weapon.toString(),
        "!"
      ].join("");
      return output;
    };
  };

  

  // var warrior = new Gauntlet.Species.Human();
  // warrior.setWeapon(new WarAxe());
  // warrior.generateClass();  // This will be used for "Surprise me" option
  // console.log(warrior.toString());

  // var orc = new Gauntlet.Combatants.Orc();
  // orc.generateClass();
  // orc.setWeapon(new BroadSword());
  // console.log(orc.toString());

  gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  }

  gauntlet.Combatants.Player.prototype.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new gauntlet.GuildHall[randomClass]();

    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  };


  return gauntlet

})(Gauntlet || {});
