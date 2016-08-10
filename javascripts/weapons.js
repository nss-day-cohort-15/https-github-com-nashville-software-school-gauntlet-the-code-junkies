var Gauntlet = (function(gauntlet){

   gauntlet.Armory = {};

    gauntlet.Armory.Weapon = function() {
      this.name = "bare hands";
      this.damage = 1;
      this.hands = 2;

      this.toString = function() {
        return this.name;
      }
    };

    gauntlet.Armory.BrassKnuckles = function() {
      this.name = "brass knuckles";
      this.damage = 20;
    };
    gauntlet.Armory.BrassKnuckles.prototype = new gauntlet.Armory.Weapon();

    gauntlet.Armory.Dagger = function() {
      this.name = "dagger";
      this.damage = 4;
      this.hands = 1;
    };
    gauntlet.Armory.Dagger.prototype = new gauntlet.Armory.Weapon();

    gauntlet.Armory.Sword = function() {
      this.name = "sword";
      this.damage = 10;
      this.hands = 1;
    };
    gauntlet.Armory.Sword.prototype = new gauntlet.Armory.Weapon();

   gauntlet.Armory.Mace = function() {
      this.name = "mace";
      this.damage = 10;
      this.hands = 1;
    };
    gauntlet.Armory.Mace.prototype = new gauntlet.Armory.Weapon();

    gauntlet.Armory.BroadSword = function() {
      this.name = "broad sword";
      this.damage = 14;
    };
    gauntlet.Armory.BroadSword.prototype = new gauntlet.Armory.Weapon();

    gauntlet.Armory.WarHammer = function() {
      this.name = "war hammer";
      this.damage = 22;
    };
    gauntlet.Armory.WarHammer.prototype = new gauntlet.Armory.Weapon();

    //Can be used by fighters and stealth

    gauntlet.Armory.CrossBow = function() {
      this.name = "crossbow";
      this.damage = 18;
      this.hands = 1;
    };
    gauntlet.Armory.CrossBow.prototype = new gauntlet.Armory.Weapon();

    // Should only be used by stealth classes

    gauntlet.Armory.Bow = function() {
      this.name = "bow";
      this.damage = 12;
    };
    gauntlet.Armory.Bow.prototype = new gauntlet.Armory.Weapon();

    // Should only be usable by Mage classes

    gauntlet.Armory.Staff = function() {
      this.name = "staff";
    }
    gauntlet.Armory.Staff.prototype = new gauntlet.Armory.Weapon()

  return gauntlet

})(Gauntlet || {})

