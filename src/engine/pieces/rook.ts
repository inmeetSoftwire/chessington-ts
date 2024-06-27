import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return Rook.getLateralMoves(board, board.findPiece(this), this)
    }

    public static getLateralMoves(board: Board, square: Square, piece: Piece) {
        const moveArray = []
        const startRow = square.row
        const startCol = square.col


        let left = -1
        while (startCol + left >= 0) {
            const moveSquare = Square.at(startRow, startCol + left)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
               break;
            }
            left -= 1
        }

        let right = 1
        while (startCol + right < 8) {
            const moveSquare = Square.at(startRow, startCol + right)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
                break
            }
            right += 1
        }

        let down = -1
        while (startRow + down >= 0) {
            const moveSquare = Square.at(startRow + down, startCol)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
                break
            }
            down -= 1
        }

        let up = 1
        while (startRow + up < 8) {
            const moveSquare = Square.at(startRow + up, startCol)
            if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                moveArray.push(moveSquare)
            }
            if (board.getPiece(moveSquare)) {
                break
            }
            up += 1
        }
        return moveArray
    }
}
