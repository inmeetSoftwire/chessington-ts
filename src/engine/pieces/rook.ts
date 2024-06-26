import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this)
        const moveArray = []
        for (let i = 0; i < 8; i++) {
            if (i != currentSquare.col) {
                moveArray.push(Square.at(currentSquare.row, i))
            }
            if (i != currentSquare.row) {
                moveArray.push(Square.at(i, currentSquare.col))
            }
        } 
        return moveArray
    }
}
