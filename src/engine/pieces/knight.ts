import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return Knight.getKnightMoves(board, board.findPiece(this), this)
    }
    private static getKnightMoves(board: Board, square: Square, piece: Piece) {
        const currentRow = square.row
        const currentCol = square.col
        const moveArray = [] as Square[]
        //Horizontal move is 2 squares, Vertical move is 1 square
        Knight.knightMoveHelper(currentRow, currentCol, 2, 1, moveArray, board, piece)

        //Horizontal move is 1 square, Vertical move is 2 squares
        Knight.knightMoveHelper(currentRow, currentCol, 1, 2, moveArray, board, piece)
        return moveArray
    }

    private static knightMoveHelper(row: number, col: number, x: number, y: number, moveArray: Square[], board : Board, piece : Piece) {
        if (row + x < 8) {
            if (col + y < 8) {
                const moveSquare = Square.at(row + x, col + y)
                if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                    moveArray.push(moveSquare)
                }
            }
            if (col - y >= 0) {
                const moveSquare = Square.at(row + x, col - y)
                if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                    moveArray.push(moveSquare)
                }
            }
        }
        if (row - x >= 0) {
            if (col + y < 8) {
                const moveSquare = Square.at(row - x, col + y)
                if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                    moveArray.push(moveSquare)
                }
            }
            if (col - y >= 0) {
                const moveSquare = Square.at(row - x, col - y)
                if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                    moveArray.push(moveSquare)
                }
            }
        }
    }
}
