import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const moveArray = []
        const currentRow = board.findPiece(this).row
        const currentCol = board.findPiece(this).col
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
