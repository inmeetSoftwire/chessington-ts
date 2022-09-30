import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        return King.getKingMoves(board, board.findPiece(this), this)
    }

    private static getKingMoves(board: Board, square: Square, piece: Piece) {
        const currentRow = square.row
        const currentCol = square.col
        const moveArray = []
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (!(x == 0 && y == 0)) {
                    if (currentCol + y < 8 && currentCol + y >= 0 && currentRow + x < 8 && currentRow + x >= 0) {
                        const moveSquare = Square.at(currentRow + x, currentCol + y)
                        if (board.getPiece(moveSquare)?.player != piece.player && !(board.getPiece(moveSquare) instanceof King)) {
                            moveArray.push(moveSquare)
                        }
                    }
                }
            }
        }
        return moveArray
    }
}
