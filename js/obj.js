class Obj {
    constructor() {
        var minX = Config.MinObjDistanceX
        var maxX = Config.MaxObjDistanceX
        var minY = Config.MinObjDistanceY
        var maxY = Config.MaxObjDistanceY
        this.posX = Math.floor(Math.random() * (maxX - minX + 1)) + minX
        this.posY = Math.floor(Math.random() * (maxY - minY + 1))
    }

    spawn(i) {
        this.index = i
        $(".objcts").append("<div class='obj " + i + "' style='position: absolute; top: " + this.posY + "px; left: " + this.posX + "px'></div>")
    }

    getElement() {
        return $(".objcts").append("<div class='obj " + this.index + "' style='position: absolute; top: " + this.posY + "px; left: " + this.posX + "px'></div>")
    }

    getIndex() {
        return this.index
    }

    getObj() {
        return $()
    }
}