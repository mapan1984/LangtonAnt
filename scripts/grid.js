class Grid {
    constructor(x, y, value) {
        this.x = x
        this.y = y
        this.value = value
    }

    equal(other) {
        return this.x === other.x && this.y === other.y
    }

}


export default Grid
