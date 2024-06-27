import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Bishop from './bishop';
import Rook from './rook';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const lateralMoves = Rook.getLateralMoves(board, currentSquare, this)
        const diagonalMoves = Bishop.getDiagonalMoves(board, currentSquare, this)
        return lateralMoves.concat(diagonalMoves)
    }
}
