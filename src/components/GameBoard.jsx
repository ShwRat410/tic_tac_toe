//import { useState } from "react"

const initialBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelectSquare,turns}){

    // const [gameBoard,setGameBoard]=useState(initialBoard)

    // function handlePlayerSymbol(rowIndex,colIndex){
    //     setGameBoard((prevGameBoard)=>{
    //         const updateBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
    //         updateBoard[rowIndex][colIndex]=activePlayerSymbol
    //         return updateBoard
    // })
    // onSelectSquare();
    // }

    const gameBoard=initialBoard;

    console.log(turns);
    for(const turn of turns){
        const{square,player}=turn;
        const{row,col}=square;
        gameBoard[row][col]=player;
    }

    return(
        <div>
            <ol id="game-board">
                {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                        <li key={colIndex}>
                        <button onClick={()=>onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                        ))}
                    </ol>
                </li>)}
            </ol>
        </div>
    )
}