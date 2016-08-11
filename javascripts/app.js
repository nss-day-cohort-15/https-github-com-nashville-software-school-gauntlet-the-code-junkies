
$(document).ready(function() {

  // CACHE VARIABLES

  var _speciesName;
  var _className;
  var _weaponName;

  // EVENT LISTENERS

  $(".name").on("click", getPlayerName)
  $(".species__link").on("click", getSpeciesName)
  $(".class__link").on("click", getClassName)
  $(".weapon__link").on("click", getWeaponName)
  $(".battle").on("click", createPlayer)

  // GRAB USER INPUTS / SELECTIONS AND CACHE THEM

  function getPlayerName (e){
    var playerName = $("#player-name").val()
    console.log("player name ", playerName)
    return playerName
  }

  function getSpeciesName (e){
    _speciesName = e.currentTarget.id
    console.log("species Name", _speciesName)
    // setSpeciesName(speciesName)
  }

  function getClassName (e) {
    _className = e.currentTarget.id
    console.log("class Name", _className)
    // setClassName(className)
  }

  function getWeaponName (e) {
    _weaponName = e.currentTarget.id
    console.log("weapon Name", _weaponName)
    // setWeaponName(weaponName)
  }

  function createPlayer (){
    var user = new Gauntlet.Combatants.Player(getPlayerName()) //Get name dynamically from DOM
    var chosenSpecies = new Gauntlet.Species[_speciesName]()
    var chosenClass = new Gauntlet.GuildHall[_className]()
    var chosenWeapon = new Gauntlet.Armory[_weaponName]()
    user.species = chosenSpecies
    user.class = chosenClass
    user.weapon = chosenWeapon
    chosenSpecies.health += chosenClass.healthBonus
    chosenSpecies.strength += chosenClass.strengthBonus
    chosenSpecies.intelligence += chosenClass.intelligenceBonus
    // console.log("species name ", _speciesName)
    // console.log("class name ", _className)
    // console.log("weapon name ", _weaponName)
    // console.log("species intelligence", chosenSpecies.intelligence)
    // console.log("chosen Species", chosenSpecies)
    // console.log("chosen class", chosenClass)
    // console.log("chosen weapon", chosenWeapon)
    console.log("User so far", user)
  }

  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    console.log("clicked", this)
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--species":
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to species")
        break;
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to class")
        sortClasses(_speciesName)
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to weapons")
        sortWeapons(_className)
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

// Hey, Delaine and Grant! This shit works!

function sortClasses (species) {
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

function sortWeapons (classArg) {
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
  if (classArg === "Conjurer") {
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
  if (classArg === "Berseker") {
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


});