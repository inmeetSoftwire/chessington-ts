import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }
    public getAvailableMoves(board: Board) {
        const moveArray = []
        const currentSquare = board.findPiece(this)
        let newRow = currentSquare.row
        this.player == Player.BLACK ? newRow -= 1 : newRow += 1
        if (newRow < 0 || newRow >= 8) {
            return []
        }
        //moving one and two squares forward
        if (!board.getPiece(Square.at(newRow, currentSquare.col))) {
            moveArray.push(Square.at(newRow, currentSquare.col))
            let newRow2 = currentSquare.row
            if (currentSquare.row == 1 && this.player == Player.WHITE) {
                newRow2 += 2
                if (!board.getPiece(Square.at(newRow2, currentSquare.col))) {
                    moveArray.push(Square.at(newRow2, currentSquare.col))
                }
            } else if (currentSquare.row == 6 && this.player == Player.BLACK) {
                newRow2 -= 2
                if (!board.getPiece(Square.at(newRow2, currentSquare.col))) {
                    moveArray.push(Square.at(newRow2, currentSquare.col))
                }
            }
        }

        //moving diagonally
        //new row is the row in front of the pawn (for black or white)
        const myCol = currentSquare.col
        const diagPiece = board.getPiece(Square.at(newRow, myCol - 1))

        if (myCol - 1 >= 0 && diagPiece && !(diagPiece instanceof King) && diagPiece?.player != this.player) {
            moveArray.push(Square.at(newRow, myCol - 1))
        }

        const diagPiece2 = board.getPiece(Square.at(newRow, myCol + 1))
        if (myCol + 1 < 8 && diagPiece2 && !(diagPiece2 instanceof King) && diagPiece2?.player != this.player) {
            moveArray.push(Square.at(newRow, myCol + 1))
        }
        
        return moveArray
    }
}
