var Gauntlet = (function(gauntlet){

  var Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
    return this.name;
    }
  };

var BrassKnuckles = function() {
  this.name = "brass knuckles";
  this.damage = 20;
  this.hands = 2;
};
BrassKnuckles.prototype = new Weapon();

var Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Weapon();

var Sword = function() {
  this.name = "sword";
  this.damage = 10;
  this.hands = 1;
};
Sword.prototype = new Weapon();

var Mace = function() {
  this.name = "mace";
  this.damage = 10;
  this.hands = 1;
};
Mace.prototype = new Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Weapon();



var WarHammer = function() {
  this.name = "war hammer";
  this.damage = 22;
  this.hands = 2;
};
WarHammer.prototype = new Weapon();

//Can be used by fighters and stealth

var CrossBow = function() {
  this.name = "crossbow";
  this.damage = 18;
  this.hands = 1;
};
CrossBow.prototype = new Weapon();

// Should only be used by stealth classes

var Bow = function() {
  this.name = "bow";
  this.damage = 12;
  this.hands = 2;
};
Bow.prototype = new Weapon();

// Should only be usable by Mage classes

var Staff = function() {
  this.name = "staff";
  this.hands = 2
}

return gauntlet
})(Gauntlet || {})

