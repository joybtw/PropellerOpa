class Cloud {
    constructor() {
        var minX = Config.MinDistanceX
        var maxX = Config.MaxDistanceX
        var minY = Config.MinDistanceY
        var maxY = Config.MaxDistanceY
        this.posX = Math.floor(Math.random() * (maxX - minX + 1));
        this.posY = Math.floor(Math.random() * (maxY - minY + 1));
    }

    spawn(i) {
        $(".clouds").append("<div class='cloud " + i + "' style='position: absolute; top: " + this.posY + "px; left: " + this.posX + "px'></div>")
    }

    getIndex() {
        return this.index
    }

    setIndex(i) {
        this.index = i
    }
}