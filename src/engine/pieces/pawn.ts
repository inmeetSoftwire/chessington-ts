import Piece from './piece';
import Player from '../player';
import Board from '../board';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const targetSquare = board.findPiece(this)
        this.player == Player.BLACK ? targetSquare.row -= 1 : targetSquare.row += 1
        return [targetSquare]
    }
}
