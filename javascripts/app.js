/*
  Test code to generate a human player and an orc player
 */


/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());


$(document).ready(function() {
  var user = new Gauntlet.Combatants.Player() //Get name dynamically from DOM
  var chosenSpecies = new Gauntlet.Species.Human()
  var chosenClass = new Gauntlet.GuildHall.Ninja()
  var chosenWeapon = new Gauntlet.Armory.BrassKnuckles()
  user.species = chosenSpecies
  user.class = chosenClass
  user.weapon = chosenWeapon
  chosenSpecies.health += chosenClass.healthBonus
  chosenSpecies.strength += chosenClass.strengthBonus
  chosenSpecies.intelligence += chosenClass.intelligenceBonus

  console.log("species intelligence", chosenSpecies.intelligence)
  console.log("chosen Species", chosenSpecies)
  console.log("chosen class", chosenClass)
  console.log("chosen weapon", chosenWeapon)
  console.log("User so far", user)
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