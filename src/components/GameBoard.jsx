//import { useState } from "react"

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

    return(
        <div>
            <ol id="game-board">
                {turns.map((row,rowIndex)=><li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                        <li key={colIndex}>
                        <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!==null}>{playerSymbol}</button>
                        </li>
                        ))}
                    </ol>
                </li>)}
            </ol>
        </div>
    )
}