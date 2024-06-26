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
        for (let i = 0; i < 8; i++) {
            if (i != square.col) {
                moveArray.push(Square.at(square.row, i))
            }
            if (i != square.row) {
                moveArray.push(Square.at(i, square.col))
            }
        } 
        return moveArray
    }
}
