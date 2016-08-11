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
    this.health = null;
    this.strength = null;
    this.intelligence = null;

    this.attack = function(target) {
      var damage = this.species.strength + this.weapon.damage;
      target.species.health -= damage;
      console.log(target)
      return target
    }


    this.toString = function() {
      var output = [this.playerName,
        ": a ",
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


  return gauntlet

})(Gauntlet || {});
