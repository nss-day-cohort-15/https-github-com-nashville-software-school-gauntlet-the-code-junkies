var Gauntlet = (function(gauntlet){

    gauntlet.sortAttacks = function(weapon) {
      if (weapon === "Staff") {
        console.log("magic user alert")
        $("#userAttack").addClass("hide-selections")
        $("#magicInput").removeClass("hide-selections")
      }
    }

    gauntlet.sortClasses = function(species) {
      console.log(species)
      if (species === "Human") {
        $(".human-classes").removeClass("hide-selections")
        $(".elf-classes").addClass("hide-selections")
        $(".orc-classes").addClass("hide-selections")
      }
      if (species === "Elf") {
        $(".elf-classes").removeClass("hide-selections")
        $(".human-classes").addClass("hide-selections")
        $(".orc-classes").addClass("hide-selections")
      }
      if (species === "Orc") {
        $(".orc-classes").removeClass("hide-selections")
        $(".elf-classes").addClass("hide-selections")
        $(".human-classes").addClass("hide-selections")
      }
    }

    gauntlet.sortWeapons = function(classArg) {
      console.log("sortWeapons working")
      console.log(classArg)
      if (classArg === "Warrior") {
        console.log("you picked warrior")
        $(".wizard-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".warrior-weapon").removeClass("hide-selections")
      }
      if (classArg === "Wizard") {
        console.log("you picked wizard")
        $(".warrior-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".wizard-weapon").removeClass("hide-selections")
      }
      if (classArg === "Thief") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").removeClass("hide-selections")
      }
      if (classArg === "Valkyrie") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").removeClass("hide-selections")
      }
      if (classArg === "Sorcerer") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").removeClass("hide-selections")
      }
      if (classArg === "Archer") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").removeClass("hide-selections")
      }
      if (classArg === "Monk") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").removeClass("hide-selections")
      }
      if (classArg === "Conjurer") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").removeClass("hide-selections")
      }
      if (classArg === "Assassin") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").removeClass("hide-selections")
      }
      if (classArg === "Berserker") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").removeClass("hide-selections")
      }
      if (classArg === "Shaman") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".ninja-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").removeClass("hide-selections")
      }
      if (classArg === "Ninja") {
        $(".wizard-weapon").addClass("hide-selections")
        $(".warrior-weapon").addClass("hide-selections")
        $(".thief-weapon").addClass("hide-selections")
        $(".valkyrie-weapon").addClass("hide-selections")
        $(".sorcerer-weapon").addClass("hide-selections")
        $(".archer-weapon").addClass("hide-selections")
        $(".monk-weapon").addClass("hide-selections")
        $(".conjurer-weapon").addClass("hide-selections")
        $(".assassin-weapon").addClass("hide-selections")
        $(".berserker-weapon").addClass("hide-selections")
        $(".shaman-weapon").addClass("hide-selections")
        $(".ninja-weapon").removeClass("hide-selections")
      }
    }

    return gauntlet
})(Gauntlet || {})