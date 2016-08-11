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

    this.castSpell = function(target) {
      var fireBall = new Gauntlet.SpellBook.FireBall;
      // console.log(fireBall)
      var damage = this.species.intelligence + fireBall.damage
      target.species.health -= damage;
      console.log(target)
      return target
    }



    this.toString = function() {
      var output = ["<strong>", this.playerName,  "</strong>",
        ": <small>",
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
