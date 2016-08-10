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
    this.skinColor = "gray";
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

  var user = new gauntlet.Combatants.Player(name) //Get name dynamically from DOM
    user.species = chosenSpecies
    user.class = chosenClass
    user.weapon = chosenWeapon
    user.health += chosenSpecies.healthbonus + chosenClass.healthBonus
    user.strength += chosenSpecies.strengthBonus + chosenClass.healthBonus
    user.intelligence += chosenSpecies.intelligenceBonus + chosenClass.intelligenceBonus


  var warrior = new Gauntlet.Combatants.Human();
  warrior.setWeapon(new WarAxe());
  warrior.generateClass();  // This will be used for "Surprise me" option
  console.log(warrior.toString());

  var orc = new Gauntlet.Combatants.Orc();
  orc.generateClass();
  orc.setWeapon(new BroadSword());
  console.log(orc.toString());

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

  /*
    Define the base properties for a human in a 
    constructor function.
   */
  gauntlet.Combatants.Human = function() {
    var randomSkin;

    this.species = "Human";
    this.intelligence = this.intelligence + 20;

    this.skinColors.push("brown", "red", "white", "disease");
    randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];

    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  };
  gauntlet.Combatants.Human.prototype = new gauntlet.Combatants.Player();


  /*
    Define the base properties for a monster in a 
    constructor function.
   */
  gauntlet.Combatants.Monster = function() {
    this.health = this.health - 30;
    this.intelligence = this.intelligence -20;
    this.strength = this.strength + 30;
  };

  gauntlet.Combatants.Monster.prototype = new gauntlet.Combatants.Player();

  return gauntlet

})(Gauntlet || {});
