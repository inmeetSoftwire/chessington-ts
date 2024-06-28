import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Pawn extends Piece {
    public vulnerableToEnPassant: boolean;

    public constructor(player: Player) {
        super(player);
        this.vulnerableToEnPassant = false
    }
    public getAvailableMoves(board: Board) {
        this.vulnerableToEnPassant = false
        const moveArray = []
        const currentSquare = board.findPiece(this)
        let newRow = currentSquare.row
        this.player == Player.BLACK ? newRow -= 1 : newRow += 1
        if (newRow < 0 || newRow >= 8) {
            return []
        }
        
        const myCol = currentSquare.col
        //moving one and two squares forward
        if (!board.getPiece(Square.at(newRow, myCol))) {
            moveArray.push(Square.at(newRow, myCol))
            let newRow2 = currentSquare.row
            if (currentSquare.row == 1 && this.player == Player.WHITE) {
                newRow2 += 2
                if (!board.getPiece(Square.at(newRow2, myCol))) {
                    moveArray.push(Square.at(newRow2, myCol))
                }
            } else if (currentSquare.row == 6 && this.player == Player.BLACK) {
                newRow2 -= 2
                if (!board.getPiece(Square.at(newRow2, myCol))) {
                    moveArray.push(Square.at(newRow2, myCol))
                }
            }
        }

        //moving diagonally
        //new row is the row in front of the pawn (for black or white)
        
        const diagPiece = board.getPiece(Square.at(newRow, myCol - 1))

        if (myCol - 1 >= 0 && diagPiece && !(diagPiece instanceof King) && diagPiece?.player != this.player) {
            moveArray.push(Square.at(newRow, myCol - 1))
        }

        const diagPiece2 = board.getPiece(Square.at(newRow, myCol + 1))
        if (myCol + 1 < 8 && diagPiece2 && !(diagPiece2 instanceof King) && diagPiece2?.player != this.player) {
            moveArray.push(Square.at(newRow, myCol + 1))
        }

        const myRow = currentSquare.row
        //En Passant
        if (this.player == Player.BLACK && newRow == 2) {
            if (myCol - 1 >= 0) {
                const adjPiece = board.getPiece(Square.at(myRow, myCol - 1))
                if (adjPiece instanceof Pawn && adjPiece.player != this.player && adjPiece.vulnerableToEnPassant) {
                    moveArray.push(Square.at(newRow, myCol - 1))
                }
            }
            
            if (myCol + 1 < 8) {
                const adjPiece2 = board.getPiece(Square.at(myRow, myCol + 1))
                if (adjPiece2 instanceof Pawn && adjPiece2.player != this.player && adjPiece2.vulnerableToEnPassant) {
                    moveArray.push(Square.at(newRow, myCol + 1))
                }
            }
        }

        if (this.player == Player.WHITE && newRow == 5) {
            if (myCol - 1 >= 0) {
                const adjPiece = board.getPiece(Square.at(myRow, myCol - 1))
                if (adjPiece instanceof Pawn && adjPiece.player != this.player && adjPiece.vulnerableToEnPassant) {
                    moveArray.push(Square.at(newRow, myCol - 1))
                }
            }
            
            if (myCol + 1 < 8) {
                const adjPiece2 = board.getPiece(Square.at(myRow, myCol + 1))
                if (adjPiece2 instanceof Pawn && adjPiece2.player != this.player && adjPiece2.vulnerableToEnPassant) {
                    moveArray.push(Square.at(newRow, myCol + 1))
                }
            }
        }
        
        return moveArray
    }
}
