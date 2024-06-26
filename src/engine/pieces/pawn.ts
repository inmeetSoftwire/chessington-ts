import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }
    public getAvailableMoves(board: Board) {
        const moveArray = []
        const currentSquare = board.findPiece(this)
        let newRow = currentSquare.row
        this.player == Player.BLACK ? newRow -= 1 : newRow += 1 
        moveArray.push(Square.at(newRow, currentSquare.col))
        let newRow2 = currentSquare.row

        if (currentSquare.row == 1 && this.player == Player.WHITE) {
            newRow2 += 2
            moveArray.push(Square.at(newRow2, currentSquare.col))
        } else if (currentSquare.row == 6 && this.player == Player.BLACK) {
            newRow2 -= 2
            moveArray.push(Square.at(newRow2, currentSquare.col))
        }
        return moveArray
    }
}
