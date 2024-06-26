import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return Bishop.getDiagonalMoves(board, board.findPiece(this))
    }

    public static getDiagonalMoves(board: Board, square: Square) {
        const moveArray = []
        const currentRow = square.row
        const currentCol = square.col
        for (let i = 1; i < 8; i++) {
            if (currentRow + i < 8) {
                if (currentCol + i < 8) {
                    moveArray.push(Square.at(currentRow + i, currentCol + i))
                }
                if (currentCol - i >= 0) {
                    moveArray.push(Square.at(currentRow + i, currentCol - i))
                }
            }
            if (currentRow - i >= 0) {
                if (currentCol + i < 8) {
                    moveArray.push(Square.at(currentRow - i, currentCol + i))
                }
                if (currentCol - i >= 0) {
                    moveArray.push(Square.at(currentRow - i, currentCol - i))
                }
            }
        }
        return moveArray
    }
}
