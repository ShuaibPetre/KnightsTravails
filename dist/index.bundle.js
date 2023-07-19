/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tree: () => (/* binding */ Tree),
/* harmony export */   getBoard: () => (/* binding */ getBoard)
/* harmony export */ });
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ "./src/knight.js");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_knight__WEBPACK_IMPORTED_MODULE_0__);


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
class Tree {
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



/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ (() => {



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const { getBoard, createKnight, Tree } = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
const { default: knight } = __webpack_require__(/*! ./knight */ "./src/knight.js");

console.log('hello world12')
const board = getBoard()

let tree = new Tree(3,3,6,7)
//tree.createKnight(3,3)
//tree.moveknight(3,3,5,5)
tree.findknightchild()
console.log(board)
//console.log(tree.moveknight(3,3,5,5))
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsVUFBVTtBQUMxQjtBQUNBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcklBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7O0FDTkEsUUFBUSwrQkFBK0IsRUFBRSxtQkFBTyxDQUFDLHVDQUFhO0FBQzlELFFBQVEsa0JBQWtCLEVBQUUsbUJBQU8sQ0FBQyxpQ0FBVTs7QUFFOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGtuaWdodCBmcm9tIFwiLi9rbmlnaHRcIjtcblxubGV0IHJvd3MgPSA4O1xubGV0IGNvbHVtbnMgPSA4O1xubGV0IGJvYXJkID0gW107XG5jb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xubGV0IGNlbGwgPSAnICAgICdcbi8vY3JlYXRpbmcgdHdvIGFycmF5cyBmb3IgYm9hcmRcbmZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgYm9hcmRbaV0gPSBbXVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sdW1uczsgaisrKSB7XG4gICAgICAgIGJvYXJkW2ldLnB1c2goY2VsbCk7XG4gICAgfVxufVxuY2xhc3MgS25pZ2h0IHtcbiAgICBjb25zdHJ1Y3RvciAocm93LCBjb2x1bW4pIHtcbiAgICB0aGlzLnZhbHVlID0gJ2tuaWdodCdcbiAgICB0aGlzLm1vdmVsaXN0ID0gW11cbiAgICB0aGlzLmNoaWxkcmVuID0gW11cbiAgICB0aGlzLnJvdyA9IHJvd1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uXG59XG59XG5leHBvcnQgY2xhc3MgVHJlZSB7XG4gICAgY29uc3RydWN0b3Iocm93LCBjb2x1bW4sIGVuZFgsIGVuZFkpIHtcbiAgICB0aGlzLnJvb3QgPSB0aGlzLmJ1aWxkdHJlZShyb3csY29sdW1uKVxuICAgIHRoaXMuZW5kWCA9IGVuZFhcbiAgICB0aGlzLmVuZFkgPSBlbmRZXG4gICAgdGhpcy5rbmlnaHRzcGF0aCA9IFtdXG4gICAgfVxuYnVpbGR0cmVlID0gKHJvdyxjb2x1bW4pID0+IHtcbiAgICBsZXQgcm9vdCA9IHRoaXMuY3JlYXRlS25pZ2h0KHJvdyxjb2x1bW4pXG4gICAgY29uc29sZS5sb2cocm9vdClcbiAgICByZXR1cm4gcm9vdFxufVxuY3JlYXRlS25pZ2h0ID0gKCByb3csIGNvbHVtbiApID0+IHtcbiAgICBsZXQga25pZ2h0ID0gbmV3IEtuaWdodChyb3csY29sdW1uKVxuICAgIGJvYXJkW3Jvd11bY29sdW1uXSA9IGtuaWdodFxuICAgIGtuaWdodC5tb3ZlbGlzdCA9IHRoaXMubW92ZXMocm93LCBjb2x1bW4pXG4gICAgbGV0IG1vdmVzID0ga25pZ2h0Lm1vdmVsaXN0XG4gICAga25pZ2h0LmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbihtb3ZlcylcbiAgICByZXR1cm4ga25pZ2h0XG4gICAgfTtcblxuY2hpbGRyZW4gPSAobW92ZXMpID0+IHtcbiAgICBsZXQgY2hpbGRyZW4gPSBbXVxuICAgIG1vdmVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGxldCByb3cgPSBlbGVtZW50WzBdXG4gICAgICAgIGxldCBjb2x1bW4gPSBlbGVtZW50WzFdXG4gICAgICAgIGxldCBrbmlnaHQgPSBuZXcgS25pZ2h0KHJvdyxjb2x1bW4pXG4gICAgICAgIGJvYXJkW3Jvd11bY29sdW1uXSA9IGtuaWdodFxuICAgICAgICBrbmlnaHQubW92ZWxpc3QgPSB0aGlzLm1vdmVzKHJvdywgY29sdW1uKVxuICAgICAgICAvL2xldCBtb3ZlcyA9IGtuaWdodC5tb3ZlbGlzdFxuICAgICAgICAvL2tuaWdodC5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4obW92ZXMpXG4gICAgICAgIGNoaWxkcmVuLnB1c2goa25pZ2h0KVxuICAgIH0pXG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgICAgIH1cblxubW92ZXMgPSAoIHggLCB5ICkgPT4ge1xuICAgIGxldCB2YWxpZG1vdmVzID0gW11cbiAgICBsZXQgbW92ZXMgPSBbW3grMSx5KzJdLFt4KzEseS0yXSxbeCsyLHkrMV0sW3gtMix5KzFdLFxuICAgICAgICAgICAgICAgICBbeC0xLHkrMl0sW3gtMSx5LTJdLFt4KzIseS0xXSxbeC0yLHktMV1dXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdGhpc3JvdyA9IG1vdmVzW2ldWzBdXG4gICAgICAgIGxldCB0aGlzY29sdW1uID0gbW92ZXNbaV1bMV1cbiAgICAgICAgaWYgKHRoaXNyb3cgPiA3IHx8IHRoaXNyb3cgPCAwIHx8IHRoaXNjb2x1bW4gPiA3IHx8IHRoaXNjb2x1bW4gPCAwKSBjb250aW51ZVxuICAgICAgICBpZiAoYm9hcmRbdGhpc3Jvd11bdGhpc2NvbHVtbl0udmFsdWUgPT09ICdrbmlnaHQnICkgY29udGludWVcbiAgICAgICAgdmFsaWRtb3Zlcy5wdXNoKG1vdmVzW2ldKVxuICAgIH0gICBcbiAgICByZXR1cm4gdmFsaWRtb3Zlc1xufVxuXG4vLyBrbmlnaHRjaGlsZHJlbiA9IChhcnJheSwgY3VycmVudCA9IHRoaXMucm9vdCkgPT4geyBcbi8vICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuLy8gICAgIGxldCBjaGlsZHJlbiA9IFtdXG4vLyAgICAgbGV0IFEgPSBbXVxuLy8gICAgIC8vUS5wdXNoKHRoaXMucm9vdClcbi8vICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKysgKSB7XG4vLyAgICAgICAgIC8vY29uc29sZS5sb2coYXJyYXlbMF0pXG4vLyAgICAgICAgIGxldCB0aGlzcm93ID0gTnVtYmVyKGFycmF5W2ldWzBdKTtcbi8vICAgICAgICAgbGV0IHRoaXNjb2x1bW4gPSBOdW1iZXIoYXJyYXlbaV1bMV0pXG4vLyAgICAgICAgIGlmICh0aGlzcm93ID4gNyB8fCB0aGlzcm93IDwgMCB8fCB0aGlzY29sdW1uID4gNyB8fCB0aGlzY29sdW1uIDwgMCkgY29udGludWVcbi8vICAgICAgICAgaWYgKGJvYXJkW3RoaXNyb3ddW3RoaXNjb2x1bW5dLnZhbHVlID09PSAna25pZ2h0JyApIGNvbnRpbnVlXG4vLyAgICAgICAgIGxldCBrbmlnaHRjaGlsZCA9IG5ldyBLbmlnaHQgKCB0aGlzcm93LCB0aGlzY29sdW1uKTtcbi8vICAgICAgICAgdGhpcy5jcmVhdGVLbmlnaHQodGhpc3JvdyAsIHRoaXNjb2x1bW4pXG4vLyAgICAgICAgIGJvYXJkW3RoaXNyb3ddW3RoaXNjb2x1bW5dID0ga25pZ2h0Y2hpbGRcbi8vICAgICAgICAgY2hpbGRyZW4ucHVzaChrbmlnaHRjaGlsZClcbi8vICAgICB9XG4vLyAgICAgdGhpcy5tYWtla25pZ2h0cyhjaGlsZHJlbilcbi8vICAgICByZXR1cm4gY2hpbGRyZW5cbi8vIH1cblxubW92ZWtuaWdodCA9IChlbmRYLCBlbmRZKSA9PiB7XG4gICAgdHJlZS5maW5ka25pZ2h0Y2hpbGQoZW5kWCwgZW5kWSlcblxufVxuZmluZGtuaWdodGNoaWxkID0gKGVuZFggPSB0aGlzLmVuZFgsIGVuZFkgPSB0aGlzLmVuZFksIGN1cnJlbnQgPSB0aGlzLnJvb3QpID0+IHtcbiAgICBsZXQgUSA9IFtdXG4gICAgbGV0IHByZXZpb3VzID0gbnVsbFxuICAgIFEucHVzaCh0aGlzLnJvb3QpXG4gICAgd2hpbGUoUS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCB0aGlzWCA9IFFbMF0ucm93XG4gICAgICAgIGxldCB0aGlzWSA9IFFbMF0uY29sdW1uXG4gICAgICAgIC8vY29uc29sZS5sb2coUVswXSlcbiAgICAgICAgaWYgKHRoaXNYID09PSBlbmRYICYmIHRoaXNZID09PSBlbmRZKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZENoaWxkKFFbMF0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7ICAgXG4gICAgICAgICAgICBRWzBdLmNoaWxkcmVuLmZvckVhY2goZWxlbWVudCA9PiB7ICAgIFxuICAgICAgICAgICAgZWxlbWVudC5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4oZWxlbWVudC5tb3ZlbGlzdClcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50ID0gUVswXVxuICAgICAgICAgICAgUS5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICBwcmV2aW91cyA9IFFbMF1cbiAgICAgICAgfSl9XG4gICAgICAgIFEuc2hpZnQoKX1cbiAgICB9XG5cbiAgICBmb3VuZENoaWxkID0gKGtuaWdodCkgPT4ge1xuICAgICAgICB3aGlsZSAoa25pZ2h0ICE9PSB0aGlzLnJvb3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtuaWdodC5wYXJlbnQpXG4gICAgICAgICAgICB0aGlzLmtuaWdodHNwYXRoLnB1c2goa25pZ2h0KVxuICAgICAgICAgICAga25pZ2h0ID0ga25pZ2h0LnBhcmVudFxuICAgICAgICB9XG4gICAgICAgIHRoaXMua25pZ2h0c3BhdGgucHVzaChrbmlnaHQpXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLmtuaWdodHNwYXRoKVxuICAgIH1cbiAgICBcblxudG9BcnJheShhcnJheSwgdmFsdWUpIHtcbiAgICBhcnJheS5wdXNoKHZhbHVlKTtcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRCb2FyZH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgeyBnZXRCb2FyZCwgY3JlYXRlS25pZ2h0LCBUcmVlIH0gPSByZXF1aXJlKFwiLi9nYW1lYm9hcmRcIik7XG5jb25zdCB7IGRlZmF1bHQ6IGtuaWdodCB9ID0gcmVxdWlyZShcIi4va25pZ2h0XCIpO1xuXG5jb25zb2xlLmxvZygnaGVsbG8gd29ybGQxMicpXG5jb25zdCBib2FyZCA9IGdldEJvYXJkKClcblxubGV0IHRyZWUgPSBuZXcgVHJlZSgzLDMsNiw3KVxuLy90cmVlLmNyZWF0ZUtuaWdodCgzLDMpXG4vL3RyZWUubW92ZWtuaWdodCgzLDMsNSw1KVxudHJlZS5maW5ka25pZ2h0Y2hpbGQoKVxuY29uc29sZS5sb2coYm9hcmQpXG4vL2NvbnNvbGUubG9nKHRyZWUubW92ZWtuaWdodCgzLDMsNSw1KSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=