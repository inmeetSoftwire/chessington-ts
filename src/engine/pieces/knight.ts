import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return Knight.getKnightMoves(board, board.findPiece(this))
    }
    private static getKnightMoves(board: Board, square: Square) {
        const currentRow = square.row
        const currentCol = square.col
        const moveArray = [] as Square[]
        //Horizontal move is 2 squares, Vertical move is 1 square
        Knight.knightMoveHelper(currentRow, currentCol, 2, 1, moveArray)

        //Horizontal move is 1 square, Vertical move is 2 squares
        Knight.knightMoveHelper(currentRow, currentCol, 1, 2, moveArray)
        return moveArray
    }

    private static knightMoveHelper(row: number, col: number, x: number, y: number, moveArray: Square[]) {
        if (row + x < 8) {
            if (col + y < 8) {
                moveArray.push(Square.at(row + x, col + y))
            }
            if (col - y >= 0) {
                moveArray.push(Square.at(row + x, col - y))
            }
        }
        if (row - x >= 0) {
            if (col + y < 8) {
                moveArray.push(Square.at(row - x, col + y))
            }
            if (col - y >= 0) {
                moveArray.push(Square.at(row - x, col - y))
            }
        }
    }
}
