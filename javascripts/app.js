/*
  Test code to generate a human player and an orc player
 */


/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());


$(document).ready(function() {
  var _speciesName;
  var _className;
  var _weaponName;

  $(".name").on("click", getPlayerName)
  $(".species__link").on("click", getSpeciesName)
  $(".class__link").on("click", getClassName)
  $(".weapon__link").on("click", getWeaponName)
  $(".battle").on("click", createPlayer)

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

    var enemy = new Gauntlet.Combatans.Player(getEnemyName())
    var enemySpecies = new Gauntlet.Species(getEnemySpecies())
    var enemyClass = new Gauntlet.GuildHall(getEnemyClass())
    var enemyWeapon = new Gauntlet.Armory(getEnemyWeapon())
    enemy.species = enemySpecies
    enemy.class = enemyClass
    enemy.weapon = enemyWeapon
    enemySpecies.health += enemyClass.healthBonus
    enemySpecies.strength += enemyClass.strengthBonus
    enemySpecies.intelligence += enemyClass.intelligenceBonus
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
        // thing.choice = selectedSpecies
        //event.currentTarget.id
        break;
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
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

});
