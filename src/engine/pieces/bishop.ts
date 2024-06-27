import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return Bishop.getDiagonalMoves(board, board.findPiece(this), this)
    }

    public static getDiagonalMoves(board: Board, square: Square, piece: Piece) {

        const moveArray = []
        const startRow = square.row
        const startCol = square.col

        //left and down
        let negativeDirection = -1
        while (startCol + negativeDirection >= 0 && startRow + negativeDirection >= 0) {
            const moveSquare = Square.at(startRow + negativeDirection, startCol + negativeDirection)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
                break
            }
            negativeDirection -= 1
        }
        //right and down
        let positiveDirection = 1
        while (startRow - positiveDirection >= 0 && startCol + positiveDirection < 8) {
            const moveSquare = Square.at(startRow - positiveDirection, startCol + positiveDirection)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
                break
            }
            positiveDirection += 1
        }

        //left and up
        negativeDirection = -1
        while (startCol + negativeDirection >= 0 && startRow - negativeDirection < 8) {
            const moveSquare = Square.at(startRow - negativeDirection, startCol + negativeDirection)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
                break
            }
            negativeDirection -= 1
        }
        //right and up
        positiveDirection = 1
        while (startRow + positiveDirection < 8 && startCol + positiveDirection < 8) {
            const moveSquare = Square.at(startRow + positiveDirection, startCol + positiveDirection)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
                break
            }
            positiveDirection += 1
        }


        return moveArray
    }
}
