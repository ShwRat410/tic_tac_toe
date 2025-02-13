export default function GameBoard(){

    const initialBoard=[
        [null,null,null],
        [null,null,null],
        [null,null,null]
    ]

    return(
        <div>
            <ol id="game-board">
                {initialBoard.map((row,rowIndex)=><li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol,colIndex)=>(
                        <li key={colIndex}>
                        <button>{playerSymbol}</button>
                        </li>
                        ))}
                    </ol>
                </li>)}
            </ol>
        </div>
    )
}