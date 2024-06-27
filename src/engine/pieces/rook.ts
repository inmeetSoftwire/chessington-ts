import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return Rook.getLateralMoves(board, board.findPiece(this))
    }

    public static getLateralMoves(board: Board, square: Square) {
        const moveArray = []
        const startRow = square.row
        const startCol = square.col


        let left = -1
        while (startCol + left >= 0 && !board.getPiece(Square.at(startRow, startCol + left))) {
            moveArray.push(Square.at(startRow, startCol + left))
            left -= 1
        }

        let right = 1
        while (startCol + right < 8 && !board.getPiece(Square.at(startRow, startCol + right)) ) {
            moveArray.push(Square.at(startRow, startCol + right))
            right += 1
        }

        let down = -1
        while (startRow + down >= 0 && !board.getPiece(Square.at(startRow + down, startCol)) ) {
            moveArray.push(Square.at(startRow + down, startCol))
            down -= 1
        }

        let up = 1
        while (startRow + up < 8 && !board.getPiece(Square.at(startRow + up, startCol))) {
            moveArray.push(Square.at(startRow + up, startCol))
            up += 1
        }
        return moveArray
    }
}
