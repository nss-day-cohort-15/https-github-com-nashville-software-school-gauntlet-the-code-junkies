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

    this.chosenSpell = null;

    this.playerName = name || "unknown adventurer";
    this.health = null;
    this.strength = null;
    this.intelligence = null;

    this.attack = function(target) {
      var damage = this.species.strength + this.weapon.damage;
      target.species.health -= damage;
      return damage
    }

    this.castSpell = function(target) {
      var damage = (this.species.intelligence * 2) + this.chosenSpell.damage
      target.species.health -= damage;
      return damage
    }

    this.toString = function() {
      var output = ["<strong>", this.playerName.toUpperCase(),  "</strong>",
        ": </br><small>",
        this.species.speciesName,
        " ",
        this.class,
        ".",
        (this.class.magical) ? " Able to cast " : " Wielding a ",
        this.weapon.toString(),
        "!</small>"
      ].join("");
      return output;
    };
  };


  return gauntlet

})(Gauntlet || {});
