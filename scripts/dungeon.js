import Grid from './grid.js'
import Ant from './ant.js'
import Direction from './direction.js'


class Dungeon {
    constructor(width, height, gridSize, mapId) {
        this.width = width
        this.height = height
        this.gridSize = gridSize
        this.xMax = Math.floor(this.width / this.gridSize)  // cols
        this.yMax = Math.floor(this.height / this.gridSize)  // rows
        this._canvas = document.querySelector(mapId)
        this._canvas.width = width
        this._canvas.height = height

        this.context = this._canvas.getContext('2d')

        this.init()
    }

    init() {
        this.grids = []
        for (let y = 0; y < this.yMax; y++) {
            let row = []
            for (let x = 0; x < this.xMax; x++) {
                row.push(new Grid(x, y, 0))
            }
            this.grids.push(row)
        }
        this.ant = new Ant(
            Math.floor(this.xMax / 2),
            Math.floor(this.yMax / 2),
            Direction.UP,
            this.xMax,
            this.yMax,
        )
    }

    clean() {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    show() {
        for (let rows of this.grids) {
            for (let grid of rows) {
                if (grid.value == 1) {
                    this.context.fillStyle = '#1d1f21'
                    this.context.fillRect(
                        grid.x * this.gridSize + 1,
                        grid.y * this.gridSize + 1,
                        this.gridSize - 1,
                        this.gridSize - 1,
                    )
                }
            }
        }

        this.context.fillStyle = '#a54242'
        this.context.fillRect(
            this.ant.x * this.gridSize,
            this.ant.y * this.gridSize,
            this.gridSize,
            this.gridSize,
        )
    }

    update() {
        let x = this.ant.x
        let y = this.ant.y
        let grid = this.grids[y][x]

        if (grid.value == 0) {
            this.ant.turnRight()
            grid.value = 1
        } else if (grid.value == 1) {
            this.ant.turnLeft()
            grid.value = 0
        }

        this.ant.goAhead()
    }
}

export default Dungeon
