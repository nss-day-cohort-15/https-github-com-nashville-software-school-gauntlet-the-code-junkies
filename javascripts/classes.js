var Gauntlet = (function(gauntlet) {

    gauntlet.GuildHall = {};

    /*
      Base function for a player, or enemy, class (profession)
     */
    gauntlet.GuildHall.PlayerClass = function() {
      this.name = "Beggar";
      this.health = 0;
      this.strength = 0;
      this.intelligence = 0;
      this.magical = false;

      this.toString = function() {
        return this.name;
      }
    };

    /*
        FIGHTER CLASSES
          - Warrior
          - Valkyrie
          - Berserker
          - Monk
     */
    gauntlet.GuildHall.Fighter = function() {
      this.magical = false
      this.health += 20;
      this.strength += 10;
    };
    gauntlet.GuildHall.Fighter.prototype = new gauntlet.GuildHall.PlayerClass();


    gauntlet.GuildHall.Warrior = function() {
      this.name = "Warrior";
      this.health = this.health + 25;
      this.strength = this.strength + 30;
    };
    gauntlet.GuildHall.Warrior.prototype = new gauntlet.GuildHall.Fighter();


    gauntlet.GuildHall.Valkyrie = function() {
      this.name = "Valkyrie";
      this.health = this.health + 20;
      this.strength = this.strength + 10;
    };
    gauntlet.GuildHall.Valkyrie.prototype = new gauntlet.GuildHall.Fighter();


    gauntlet.GuildHall.Berserker = function() {
      this.name = "Berserker";
      this.health = this.health + 35;
      this.strength = this.strength + 20;
    };
    gauntlet.GuildHall.Berserker.prototype = new gauntlet.GuildHall.Fighter();


    gauntlet.GuildHall.Monk = function() {
      this.name = "Monk";
      this.health = this.health + 10;
      this.strength = this.strength + 40;
    };
    gauntlet.GuildHall.Monk.prototype = new gauntlet.GuildHall.Fighter();


    /*
        MAGICAL CLASSES
          - Shaman
          - Wizard
          - Conujurer
          - Sorcerer
     */
    gauntlet.GuildHall.Mage = function() {
      this.magical = true;
      this.health += - 10;
      this.intelligenceBonus += 20;
    };
    gauntlet.GuildHall.Mage.prototype = new gauntlet.GuildHall.PlayerClass();


    gauntlet.GuildHall.Shaman = function() {
      this.name = "Shaman";
      this.health = this.health + 5;
      this.intelligenceBonus = this.intelligenceBonus + 20;
    };
    gauntlet.GuildHall.Shaman.prototype = new gauntlet.GuildHall.Mage();


    gauntlet.GuildHall.Wizard = function() {
      this.name = "Wizard";
      this.health = this.health - 15;
      this.intelligenceBonus = this.intelligenceBonus + 40;
    };
    gauntlet.GuildHall.Wizard.prototype = new gauntlet.GuildHall.Mage();


    gauntlet.GuildHall.Conjurer = function() {
      this.name = "Conjurer";
      this.intelligenceBonus = this.intelligenceBonus + 10;
    };
    gauntlet.GuildHall.Conjurer.prototype = new gauntlet.GuildHall.Mage();


    gauntlet.GuildHall.Sorcerer = function() {
      this.name = "Sorcerer";
      this.health = this.health - 5;
      this.intelligenceBonus = this.intelligenceBonus + 30;
    };
    gauntlet.GuildHall.Sorcerer.prototype = new gauntlet.GuildHall.Mage();


    /*
        STEALTH CLASSES
          - Thief
          - Ninja
          - Assassin
          - Archer
     */

    gauntlet.GuildHall.Stealth = function() {
      this.magical = false;
      this.health += - 5;
      this.strength += 30;
    };
    gauntlet.GuildHall.Stealth.prototype = new gauntlet.GuildHall.PlayerClass();

    gauntlet.GuildHall.Thief = function() {
      this.name = "Thief";
      this.health = this.health + 5;
      this.strength = this.strength + 15;
    };
    gauntlet.GuildHall.Thief.prototype = new gauntlet.GuildHall.Stealth();


    gauntlet.GuildHall.Ninja = function() {
      this.name = "Ninja";
      this.health = this.health - 5;
      this.strength = this.strength + 20;
    };
    gauntlet.GuildHall.Ninja.prototype = new gauntlet.GuildHall.Stealth();


    gauntlet.GuildHall.Assassin = function() {
      this.name = "Assassin";
      this.strength = this.strength + 10;
    };
    gauntlet.GuildHall.Assassin.prototype = new gauntlet.GuildHall.Stealth();


    gauntlet.GuildHall.Archer = function() {
      this.name = "Archer";
      this.health = this.health - 10;
      this.strength = this.strength + 30;
    };
    gauntlet.GuildHall.Archer.prototype = new gauntlet.GuildHall.Stealth();

    return gauntlet

})(Gauntlet || {});
