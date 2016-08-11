
$(document).ready(function() {

  // CACHE VARIABLES

  var _speciesName;
  var _className;
  var _weaponName;
  var _playerName;

  // EVENT LISTENERS

  var user;
  var enemy;

  $(".name").on("click", getPlayerName)
  $(".species__link").on("click", getSpeciesName)
  $(".class__link").on("click", getClassName)
  $(".weapon__link").on("click", getWeaponName)
  $(".doBattle").on("click", createPlayer)
  $(".doBattle").on("click", createEnemy)

  // GRAB USER INPUTS / SELECTIONS AND CACHE THEM

  function getPlayerName (e){
    _playerName = $("#player-name").val()
  }

  function getSpeciesName (e){
    _speciesName = e.currentTarget.id
    console.log("species Name", _speciesName)
  }

  function getClassName (e) {
    _className = e.currentTarget.id
    console.log("class Name", _className)
  }

  function getWeaponName (e) {
    _weaponName = e.currentTarget.id
    console.log("weapon Name", _weaponName)
  }

//Creating User
  function createPlayer (){
    user = new Gauntlet.Combatants.Player(getPlayerName())
    var chosenSpecies = new Gauntlet.Species[_speciesName]()
    var chosenClass = new Gauntlet.GuildHall[_className]()
    var chosenWeapon = new Gauntlet.Armory[_weaponName]()
    user.species = chosenSpecies
    user.class = chosenClass
    user.weapon = chosenWeapon
    chosenSpecies.health += chosenClass.healthBonus
    chosenSpecies.strength += chosenClass.strengthBonus
    chosenSpecies.intelligence += chosenClass.intelligenceBonus
    console.log("user info", user.toString())
    $("#battlePlayerName").append(`<p> ${user.toString()} </p>`)
    console.log("User so far", user)
    return user
    }


    // Functions to create random Enemy, May be Combined tomorrow, just getting base functionality
  function getEnemyName () {
    var enemyNamesOptions = ["Some guy off the street", "The town Drunk", "Insane Asylum escapee", "Yo Momma", "Grant", "Delaine", "Casey", "Sscotth"];
    var enemyName = enemyNamesOptions[Math.round(Math.random() * (enemyNamesOptions.length - 1))];
    return enemyName
  }

  function getEnemySpecies() {
    var enemySpeciesOptions = ["Human", "Elf", "Orc"];
    var enemySpecies = enemySpeciesOptions[Math.round(Math.random() * (enemySpeciesOptions.length - 1))];
    return enemySpecies
  }

  function getEnemyClass() {
    var enemyClassOptions = ["Warrior", "Valkyrie", "Berserker", "Monk", "Thief", "Ninja", "Assassin", "Archer"];
    var enemyClass = enemyClassOptions[Math.round(Math.random() * (enemyClassOptions.length - 1))];
    return enemyClass
  }

  function getEnemyWeapon () {
    var enemyWeaponOptions = ["BrassKnuckles", "Sword", "Mace", "Dagger", "BroadSword", "WarHammer", "CrossBow", "Bow"];
    var enemyWeapon = enemyWeaponOptions[Math.round(Math.random() * (enemyWeaponOptions.length - 1))];
    return enemyWeapon
  }
//End of creating enemy functions

    function createEnemy() {
    enemy = new Gauntlet.Combatants.Player(getEnemyName())
    var enemySpecies = new Gauntlet.Species[getEnemySpecies()]
    var enemyClass = new Gauntlet.GuildHall[getEnemyClass()]
    var enemyWeapon = new Gauntlet.Armory[getEnemyWeapon()]
    enemy.species = enemySpecies
    enemy.class = enemyClass
    enemy.weapon = enemyWeapon
    enemySpecies.health += enemyClass.healthBonus
    enemySpecies.strength += enemyClass.strengthBonus
    enemySpecies.intelligence += enemyClass.intelligenceBonus
    console.log("Random Enemy", enemy)
    return enemy
  }

  $("#enemyAttack").on("click", attackTheUser)
  $("#userAttack").on("click", attackTheEnemy)

  function attackTheUser () {
    enemy.attack(user);
  }

  function attackTheEnemy () {
    user.attack(enemy);
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
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to battle")
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


});
