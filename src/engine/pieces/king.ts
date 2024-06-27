import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return King.getKingMoves(board, board.findPiece(this))
    }

    private static getKingMoves(board: Board, square: Square) {
        const currentRow = square.row
        const currentCol = square.col
        const moveArray = []
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (!(x == 0 && y == 0)) {
                    if (currentCol + y < 8 && currentCol + y >= 0 && currentRow + x < 8 && currentRow + x >= 0) {
                        moveArray.push(Square.at(currentRow + x, currentCol + y))
                    }
                }
            }
        }
        return moveArray
    }
}
