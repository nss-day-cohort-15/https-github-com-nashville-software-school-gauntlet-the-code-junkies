$(document).ready(function(){
  // AUDIO ELEMENTS
    var clickSword = new Audio("https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-the-code-junkies/master/audio/sword-clash.mp3")
    $(".btn:not('.attack-class')").on("click", playClickSword)
    function playClickSword () {
      clickSword.play()
    }

    var clickAttackAudio = new Audio("https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-the-code-junkies/master/audio/drop-sword.mp3")
    $(".attack-class").on("click", playAttackAudio)
    function playAttackAudio () {
      clickAttackAudio.play()
    }

    var clickMagicAudio = new Audio("https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-the-code-junkies/master/audio/magic-sound.mp3")
    $(".magic-attack-class").on("click", playMagicAudio)
    function playMagicAudio () {
      clickMagicAudio.play()
    }

    var chronoTriggerTheme = new Audio("https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-the-code-junkies/master/audio/chronotriggertheme.mp3")
    chronoTriggerTheme.loop = true;
    chronoTriggerTheme.play()

    var chronoTriggerBattle = new Audio("https://raw.githubusercontent.com/nss-day-cohort-15/https-github-com-nashville-software-school-gauntlet-the-code-junkies/master/audio/chronotriggerbattle.mp3")
    chronoTriggerBattle.loop = true;

    // Switch to battle music
    $(".doBattle").on("click", playBattleMusic)

    function playBattleMusic() {
      chronoTriggerTheme.pause()
      chronoTriggerBattle.play()
    }
  })
