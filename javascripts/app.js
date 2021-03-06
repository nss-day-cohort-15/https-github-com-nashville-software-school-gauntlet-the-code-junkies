
$(document).ready(function() {

  // CACHE VARIABLES
  var _speciesName = null;
  var _className = null;
  var _weaponName = null;
  var _playerName = null;
  var userSpell;
  var chosenSpellName;
  var playerWins = 0;
  var playerLosses = 0;

  // EVENT LISTENERS
  var user;
  var enemy;
  var userHealth;
  var enemyHealth;

  $(".name").on("click", getPlayerName)
  $(".species__link").on("click", getSpeciesName)
  $(".class__link").on("click", getClassName)
  $(".weapon__link").on("click", getWeaponName)
  $(".doBattle").on("click", createPlayer)
  $(".doBattle").on("click", createEnemy)

  // RANDOMIZED PLAYER SELECTION OPTIONS

  $("#surpriseSpecies").on("click", surpriseSpecies)
  $("#surpriseClass").on("click", surpriseClass)
  $("#surpriseWeapon").on("click", surpriseWeapon)

  function surpriseSpecies () {
    console.log("Finding random species")
    playerSpeciesOptions = ["Human", "Elf", "Orc"]
    _speciesName = playerSpeciesOptions[Math.round(Math.random() * (playerSpeciesOptions.length - 1))];
  }

  function surpriseClass () {
    console.log("Finding random class")
    if (_speciesName === "Human") {
      playerClassOptions = ["Warrior", "Wizard", "Thief", "Monk", "Conjurer", "Assassin"]
      _className = playerClassOptions[Math.round(Math.random() * (playerClassOptions.length - 1))];
    }
    if (_speciesName === "Elf") {
      playerClassOptions = ["Warrior", "Wizard", "Thief", "Valkyrie", "Sorcerer", "Archer"]
      _className = playerClassOptions[Math.round(Math.random() * (playerClassOptions.length - 1))];
    }
    if (_speciesName === "Orc") {
      playerClassOptions = ["Warrior", "Wizard", "Thief", "Berserker", "Shaman", "Ninja"]
      _className = playerClassOptions[Math.round(Math.random() * (playerClassOptions.length - 1))];
    }
  }

  function surpriseWeapon () {
    console.log("Finding random weapon")
    if (_className === "Wizard" || _className === "Conjurer" || _className === "Sorcerer" || _className === "Shaman") {
      _weaponName = "Staff"
    }
    if (_className === "Thief" || _className === "Ninja") {
      playerWeaponOptions = ["Dagger", "Sword", "Bow", "CrossBow", "BrassKnuckles"]
      _weaponName = playerWeaponOptions[Math.round(Math.random() * (playerWeaponOptions.length - 1))];
    }
    if (_className === "Assassin" || _className === "Archer") {
      playerWeaponOptions = ["Dagger", "Bow", "CrossBow", "BrassKnuckles"]
      _weaponName = playerWeaponOptions[Math.round(Math.random() * (playerWeaponOptions.length - 1))];
    }
    if (_className === "Valkyrie") {
      playerWeaponOptions = ["Dagger", "Bow", "Sword", "LongSword", "CrossBow", "BrassKnuckles", "WarAxe", "WarHammer", "Mace"]
      _weaponName = playerWeaponOptions[Math.round(Math.random() * (playerWeaponOptions.length - 1))];
    }
    if (_className === "Warrior") {
      playerWeaponOptions = ["Dagger", "Sword", "LongSword", "WarAxe", "WarHammer", "Mace"]
      _weaponName = playerWeaponOptions[Math.round(Math.random() * (playerWeaponOptions.length - 1))];
    }
    if (_className === "Monk") {
      playerWeaponOptions = ["LongSword", "WarAxe", "WarHammer", "Mace", "BrassKnuckles"]
      _weaponName = playerWeaponOptions[Math.round(Math.random() * (playerWeaponOptions.length - 1))];
    }
    if (_className === "Berserker") {
      playerWeaponOptions = ["LongSword", "WarAxe", "WarHammer", "Mace"]
      _weaponName = playerWeaponOptions[Math.round(Math.random() * (playerWeaponOptions.length - 1))];
    }
  }

  // GRAB USER INPUTS / SELECTIONS AND CACHE THEM

  function getPlayerName (e){
    _playerName = $("#player-name").val()
  }

  function getSpeciesName (e){
    _speciesName = e.currentTarget.id
  }

  function getClassName (e) {
    _className = e.currentTarget.id
  }

  function getWeaponName (e) {
    _weaponName = e.currentTarget.id
  }

  function getChosenSpellName () {
    chosenSpellName = $("#magicSpellSelect option:selected").val();
  }

//Creating User
  function createPlayer (){
    if (_weaponName === null) {
      alert("Pick a weapon")
    }
    user = new Gauntlet.Combatants.Player(_playerName)
    var chosenSpecies = new Gauntlet.Species[_speciesName]()
    var chosenClass = new Gauntlet.GuildHall[_className]()
    var chosenWeapon = new Gauntlet.Armory[_weaponName]()
    user.species = chosenSpecies
    user.class = chosenClass
    user.weapon = chosenWeapon
    chosenSpecies.health += chosenClass.healthBonus
    chosenSpecies.strength += chosenClass.strengthBonus
    chosenSpecies.intelligence += chosenClass.intelligenceBonus
    userHealth = chosenSpecies.health
    $("#battlePlayerName").append(`<p> ${user.toString()} </p>`)
    printWinsAndLosses()
    addPicture(chosenClass.name, "user")
    createProgressBar(user, "user", userHealth, enemyHealth)
    printStats(user, "user")
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
    var enemyWeaponOptions = ["BrassKnuckles", "Sword", "Mace", "Dagger", "LongSword", "WarHammer", "CrossBow", "WarAxe", "Bow"];
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
    enemyHealth = enemySpecies.health
    addPicture(enemyClass.name, "enemy")
    createProgressBar(enemy, "enemy", userHealth, enemyHealth)
    enemyName(enemy)
    printStats(enemy, "enemy")
    return enemy
  }

  $("#userAttack").on("click", battleFieldAttack)
  $("#magicAttack").on("click", userCastSpell)

  function battleFieldAttack () {
    user.attack(enemy);
    enemy.attack(user);
    updateStats()
    checkHealth()
  }

  function userCastSpell () {
    getChosenSpellName();
    userSpell =  new Gauntlet.SpellBook[chosenSpellName]();
    user.chosenSpell = userSpell;

    user.castSpell(enemy);
    enemy.attack(user)
    updateStats()
    checkHealth()
  }

  // function showDamage(player, name){
  //   console.log("show player damage", player)
  //   $(`${name}Damage`).append("-5").fadeIn()
  //   $(`${name}Damage`).fadeOut()
  // }

  function enemyName (enemy){
      var output = [ "<strong> ", enemy.playerName.toUpperCase(), ": </br></strong> ",
      " <small> ", enemy.species.speciesName, " ", enemy.class,
        (enemy.class.magical) ? " Able to cast " : " Wielding a ",
        enemy.weapon.toString(),
        "!</small>"
      ].join("");
      $("#battleEnemyName").append(output);
  }

  function addPicture (name, player){
    var imgName = name.toLowerCase()
    if (imgName !== "monk"){
      $(`#${player}Image`).append(`<img src="images/${imgName}.jpg" class="classImg">`)
    } else {
      $(`#${player}Image`).append(`<img src="images/monk.jpeg" class="classImg">`)
    }
  }

  function createProgressBar (player, name, userHealth, enemyHealth) {
    $(`.${name}Progress`).html("")
    var totalHealth = `${name}Health`
    if (name === "user"){
      playerHealthPercentage = Math.floor(player.species.health/userHealth*100)
      checkProgress(playerHealthPercentage, "user")
    } else {
      playerHealthPercentage = Math.floor(player.species.health/enemyHealth*100)
      checkProgress(playerHealthPercentage, "enemy")
    }
    $(`.${name}Progress`).append(`<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="${player.species.health}" aria-valuemin="0" aria-valuemax="${name}Health}" id="${name}ProgressBar" style="width: ${playerHealthPercentage}%">
      ${playerHealthPercentage}% Health
      </div>`)
  }

  function checkProgress(playerHealth, name){
    if (playerHealthPercentage<25){
          $(`#${name}ProgressBar`).css("background-color", "red")
    }
  }

  // Print Stats to the DOM
  function printStats (player, name){
    $(`.${name}`).html("")
    $(`.${name}`).append(`<h3> You have <strong>${player.species.health} </strong> health points<h3>`)
  }

  function printWinsAndLosses(){
    $("#playerWins").html(`<h4> ${playerWins} </h4>`)
    $("#playerLosses").html(`<h4> ${playerLosses} </h4>`)
  }

  function updateStats (){
    printStats(user, "user")
    printStats(enemy, "enemy")
    createProgressBar(user, "user", userHealth, enemyHealth)
    createProgressBar(enemy, "enemy", userHealth, enemyHealth)
  }

  function checkHealth (){
    if (user.species.health <= 0 && user.species.health < enemy.species.health ) {
      console.log("Enemy Wins!")
      playerLosses ++
      $(".enemyWins").removeClass("hide-selections")
      $(".message").append(`<h1> <strong> Game Over... </strong> </h1> <p> You were defeated by ${enemy.playerName}. </p> <p> Your health: ${user.species.health} </p> <p> Enemy health: ${enemy.species.health} </p> <p> Better luck next time! </p> <button class="restartGame endGame">Restart Game</button> <button class="fightAgain endGame"> Fight Again ! </button>`)
      $(".restartGame").on("click", restartGame)
      $(".fightAgain").on("click", fightAgain)
    }
    if (enemy.species.health <=0 && enemy.species.health < user.species.health || enemy.species.health <= 0 && user.species.health === enemy.species.health) {
      playerWins ++
      $(".userWins").removeClass("hide-selections")
      $(".message").append(`<h1><strong> You won!! </strong> </h1> <p> You defeated ${enemy.playerName}. </p> <p> Your health: ${user.species.health} </p> <p> Enemy health: ${enemy.species.health} </p> <p> Good work fighter! </p> <button class="restartGame endGame">Restart Game </button> <button class="fightAgain endGame"> Fight Again ! </button>`)
      $(".restartGame").on("click", restartGame)
      $(".fightAgain").on("click", fightAgain)
    }
  }

  function printBattleLog(enemyName){
    if (user.species.health > enemy.species.health || user.species.health === enemy.species.health){
      $("#battleOutcome").append(`<tr><td> You defeated: <span class='winner'> ${enemyName} </span></td></tr>`)
    } else {
       $("#battleOutcome").append(`<tr><td> You lost to: <span class='loser'> ${enemyName} </span></td></tr>`)
    }
  }

// Restart Buttons and Fight Again buttons !!!
  function restartGame () {
    location.reload()
    playerWins = 0
    playerLosses = 0
    $("#battleOutcome").html("")
  }

  function fightAgain () {
    $(".message").html("");
    $(".userWins").addClass("hide-selections");
    $(".enemyWins").addClass("hide-selections");
    $("#battleEnemyName").html("");
    $("#enemyImage").html("");
    printBattleLog(enemy.playerName)
    user.species.health = userHealth
    printWinsAndLosses()
    createEnemy();
    updateStats();
  }

  $('[data-toggle="popover"]').popover()
  $(".btn--blue").on("mouseenter", showPopover)
  $(".btn--blue").on("mouseleave", hidePopover)
  $(".select").on("click", createSelectedItem)


  function showPopover(e){
    $(e.currentTarget).popover('show')
  }

  function hidePopover(e){
    $(e.currentTarget).popover('hide')
  }

  function createSelectedItem (e){
    // console.log("event", e)
    $(".btn").removeClass("selectedItem")
    $(e.currentTarget).addClass("selectedItem")
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
        if ($("#player-name").val() === "") {
          alert("Pick a name")
          break
        }
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to species")
        break;
      case "card--class":
        if (_speciesName === null) {
          alert("Pick a species")
          break
        }
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to class")
        Gauntlet.sortClasses(_speciesName)
        break;
      case "card--weapon":
        if (_className === null) {
          alert("Pick a class")
          break
        }
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to weapons")
        Gauntlet.sortWeapons(_className)
        break;
      case "card--battleground":
        // WEAPON NAME error handling is dealt with
        // within createPlayer
        moveAlong = ($("#player-name").val() !== "");
        console.log("switched to battle")
        Gauntlet.sortAttacks(_weaponName)
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
