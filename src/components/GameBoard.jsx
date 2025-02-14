import { useState } from "react"

const initialBoard=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
]

export default function GameBoard({onSelectSquare, activePlayerSymbol}){

    const [gameBoard,setGameBoard]=useState(initialBoard)

    function handlePlayerSymbol(rowIndex,colIndex){
        setGameBoard((prevGameBoard)=>{
            const updateBoard = [...prevGameBoard.map(innerArray=>[...innerArray])]
            updateBoard[rowIndex][colIndex]=activePlayerSymbol
            return updateBoard
    })
    onSelectSquare();
    }

    return(
        <div>
            <ol id="game-board">
                {gameBoard.map((row,rowIndex)=><li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                        <li key={colIndex}>
                        <button onClick={()=>handlePlayerSymbol(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                        ))}
                    </ol>
                </li>)}
            </ol>
        </div>
    )
}