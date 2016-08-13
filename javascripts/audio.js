$(document).ready(function(){
  // AUDIO ELEMENTS
    var clickSword = new Audio("../audio/sword-clash.mp3")
    $(".btn:not('.attack-class')").on("click", playClickSword)
    function playClickSword () {
      clickSword.play()
    }

    var clickAttackAudio = new Audio("../audio/drop-sword.mp3")
    $(".attack-class").on("click", playAttackAudio)
    function playAttackAudio () {
      clickAttackAudio.play()
    }

    var clickMagicAudio = new Audio("../audio/magic-sound.mp3")
    $(".magic-attack-class").on("click", playMagicAudio)
    function playMagicAudio () {
      clickMagicAudio.play()
    }

    var chronoTriggerTheme = new Audio("../audio/chronotriggertheme.mp3")
    chronoTriggerTheme.loop = true;
    chronoTriggerTheme.play()

    var chronoTriggerBattle = new Audio("../audio/chronotriggerbattle.mp3")
    chronoTriggerBattle.loop = true;

    // Switch to battle music
    $(".doBattle").on("click", playBattleMusic)

    function playBattleMusic() {
      chronoTriggerTheme.pause()
      chronoTriggerBattle.play()
    }
  })
