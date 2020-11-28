import Direction from './direction.js'

class Ant {
    constructor(x, y, direction, xMax, yMax) {
        this.x = x
        this.y = y
        this.direction = direction
        this.xMax = xMax
        this.yMax = yMax
    }

    turnRight() {
        this.direction++
        if (this.direction > Direction.LEFT) {
            this.direction = Direction.UP
        }
    }

    turnLeft() {
        this.direction--
        if (this.direction < Direction.UP) {
            this.direction = Direction.LEFT
        }
    }

    goAhead() {
        switch (this.direction) {
            case Direction.UP:
                this.y--
                break;
            case Direction.RIGHT:
                this.x++
                break;
            case Direction.DOWN:
                this.y++
                break;
            case Direction.LEFT:
                this.x--
                break;
        }

        if (this.x < 0) {
            this.x = this.xMax - 1
        }
        if (this.x > this.xMax - 1) {
            this.x = 0
        }
        if (this.y < 0) {
            this.y = this.yMax - 1
        }
        if (this.y > this.yMax - 1) {
            this.y = 0
        }
    }
}

export default Ant
