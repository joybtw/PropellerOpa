var moving = true;
var posX = 0; 
var posY = window.innerHeight / 2
var maxClouds = Config.MaxClouds
var objectCount = Config.StartObjects
var maxObjects = Config.MaxObjects
var round = 0
var speed  = 1
var rang = null

// Arrays
var clouds = []
var objcts = []

window.addEventListener("load", () => {
    $(".elements").hide()
    $(".deathScreen").hide()
    //     renderNewPage()
//     start()
})

function start() {
    if (rang) {
        $(".plane").css("transform", "translate(" + posX + "px, " + posY + "px)")
        if (posX < window.innerWidth) {
            var plane = $('.plane');
            
            for (var i = 0;  i < objcts.length; i++) {
                var barrier = $("." + i)
                if (isContained(plane, barrier)) {
                    $(".elements").hide()
		    console.log("Highscore: " + round)
                    $(".deathText").text(rang + "! Sie sind stark getroffen. Kommen Sie SOFORT zur Reperatur! Ihr Highscore war " + (round-1) + ".")
                    $(".deathScreen").show()
                    $("body").css("background", 'url("/img/start.png")')
                    return
                }
            }
    
            posX += speed;
        } else {
            renderNewPage()
        }
        if (moving) {
            requestAnimationFrame(start);
        }
    }
  }

window.addEventListener("keydown", function(event) {
    if (event.key == "ArrowUp") {
       if (posY >= 10) {
            posY -= 10;
       }
       $(".plane").css("transform", "translateX(" + posX + "px, " + posY +"px)")
    } else if (event.key == "ArrowDown") {
        if (posY < window.innerHeight * 0.8) {
            posY += 10;
       }
        $(".plane").css("transform", "translateX(" + posX + "px, " + posY +"px)")
    } else if (event.key == "ArrowRight") {
        console.log(speed)
        speed ++;
    } else if (event.key == "ArrowLeft"){
        if (speed > 1) { 
            speed --;
        }
    }
})

function renderNewPage() {
    posX = 0;
    round ++;
    $("#score").text(round)
    $(".clouds").empty()
    $(".objcts").empty()

    for (var cloudI = 0; cloudI <= maxClouds; cloudI++) {
        var cloud = new Cloud(); 
        cloud.spawn(objI)
        clouds.push(cloud)
    }

    if (objectCount < maxObjects) {
        objectCount = Math.round(objectCount * (round/2)); 
        console.log("objcts: " + objectCount)
        console.log("round: " + round)
    }
    objcts = []
    for (var objI = 0; objI < objectCount; objI ++) {
        var obj = new Obj(); 
        obj.spawn(objI)
        objcts.push(obj)
    }
}

function isContained(element1, element2) {
    const rect1 = element1.offset();
    const rect2 = element2.offset();
    const distance = Math.sqrt(
        Math.pow(rect1.left - rect2.left, 2) +
        Math.pow(rect1.top - rect2.top, 2)
    );
    if (distance < 110) {
        return true
    }
}

function formsubmit() {
    $("#err").text("Bitte gebe einen Rang ein")
    rang = $("#rang").val()
    if (rang != "" && rang.length > 7) {
        $("body").css("background", "skyblue")
        $(".elements").show()
        $(".startScreen").hide()
        start()
        renderNewPage()
    } else {
        $("#err").text("Bitte gebe einen Rang ein")
    }
}

function playaigain() {
    if (rang) {
        $(".deathScreen").hide()
        $(".elements").show()
        $("body").css("background", "skyblue")
        start()
        renderNewPage()
        speed = 1; 
        objectCount = Config.StartObjects
        posY = window.innerHeight / 2
	round = 1
	$("#score").text(round)
    }
}

function stopgame() {
    location.reload()
}