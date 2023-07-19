import knight from "./knight";

let rows = 8;
let columns = 8;
let board = [];
const getBoard = () => board;
let cell = '    '
//creating two arrays for board
for (let i = 0; i < rows; i++) {
    board[i] = []
    for (let j = 0; j < columns; j++) {
        board[i].push(cell);
    }
}
class Knight {
    constructor (row, column) {
    this.value = 'knight'
    this.movelist = []
    this.children = []
    this.row = row
    this.column = column
}
}
export class Tree {
    constructor(row, column, endX, endY) {
    this.root = this.buildtree(row,column)
    this.endX = endX
    this.endY = endY
    this.knightspath = []
    }
buildtree = (row,column) => {
    let root = this.createKnight(row,column)
    console.log(root)
    return root
}
createKnight = ( row, column ) => {
    let knight = new Knight(row,column)
    board[row][column] = knight
    knight.movelist = this.moves(row, column)
    let moves = knight.movelist
    knight.children = this.children(moves)
    return knight
    };

children = (moves) => {
    let children = []
    moves.forEach(element => {
        let row = element[0]
        let column = element[1]
        let knight = new Knight(row,column)
        board[row][column] = knight
        knight.movelist = this.moves(row, column)
        //let moves = knight.movelist
        //knight.children = this.children(moves)
        children.push(knight)
    })
    return children
        }

moves = ( x , y ) => {
    let validmoves = []
    let moves = [[x+1,y+2],[x+1,y-2],[x+2,y+1],[x-2,y+1],
                 [x-1,y+2],[x-1,y-2],[x+2,y-1],[x-2,y-1]]
    for (let i = 0; i < moves.length; i++) {
        let thisrow = moves[i][0]
        let thiscolumn = moves[i][1]
        if (thisrow > 7 || thisrow < 0 || thiscolumn > 7 || thiscolumn < 0) continue
        if (board[thisrow][thiscolumn].value === 'knight' ) continue
        validmoves.push(moves[i])
    }   
    return validmoves
}

// knightchildren = (array, current = this.root) => { 
//     console.log(current)
//     let children = []
//     let Q = []
//     //Q.push(this.root)
//     console.log(current)
//     for (let i = 0; i < array.length; i++ ) {
//         //console.log(array[0])
//         let thisrow = Number(array[i][0]);
//         let thiscolumn = Number(array[i][1])
//         if (thisrow > 7 || thisrow < 0 || thiscolumn > 7 || thiscolumn < 0) continue
//         if (board[thisrow][thiscolumn].value === 'knight' ) continue
//         let knightchild = new Knight ( thisrow, thiscolumn);
//         this.createKnight(thisrow , thiscolumn)
//         board[thisrow][thiscolumn] = knightchild
//         children.push(knightchild)
//     }
//     this.makeknights(children)
//     return children
// }

moveknight = (endX, endY) => {
    tree.findknightchild(endX, endY)

}
findknightchild = (endX = this.endX, endY = this.endY, current = this.root) => {
    let Q = []
    let previous = null
    Q.push(this.root)
    while(Q.length > 0) {
        let thisX = Q[0].row
        let thisY = Q[0].column
        //console.log(Q[0])
        if (thisX === endX && thisY === endY) {
            return this.foundChild(Q[0])
        }
        else {   
            Q[0].children.forEach(element => {    
            element.children = this.children(element.movelist)
            element.parent = Q[0]
            Q.push(element)
            previous = Q[0]
        })}
        Q.shift()}
    }

    foundChild = (knight) => {
        while (knight !== this.root) {
            console.log(knight.parent)
            this.knightspath.push(knight)
            knight = knight.parent
        }
        this.knightspath.push(knight)
        return console.log(this.knightspath)
    }
    

toArray(array, value) {
    array.push(value);
  }
}

export { getBoard}