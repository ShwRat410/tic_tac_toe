import Player from './components/Player.jsx'
import GameBoard from './components/Gameboard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'
import { WINNING_COMBINATIONS } from './winning-combination.js'
import GameOver from './components/GameOver.jsx'

const initialBoard=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

function App() {

  const[gameTurns,setGameTurns]=useState([]);

  const gameBoard=initialBoard;

  console.log(gameTurns);
  for(const turn of gameTurns){
      const{square,player}=turn;
      const{row,col}=square;
      gameBoard[row][col]=player;
  }

  function setGamePlayer(turns){
    let currentPlayer = 'X';

    if(turns.length>0 && turns[0].player === 'X'){
      currentPlayer = 'O';
    }
    return currentPlayer;
  }


  const activePlayer = setGamePlayer(gameTurns)
  // const[activePlayer,setactivePlayer]=useState('X');
  let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
      winner=firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex,colIndex){
  //  setactivePlayer((curActivePlayer)=>curActivePlayer==='X'?'O':'X')

    setGameTurns((prevGameTurns)=>{
        
      const currentPlayer = setGamePlayer(prevGameTurns)

      const returnedGameTurns=[
        { square:{
          row:rowIndex,
          col:colIndex
         },
        player:currentPlayer       
        },
        ...prevGameTurns
      ];
      return returnedGameTurns
    })
  }

  return (
  <main>
    <div id="game-container">
      <div>
        <ol id="players" className="highlight-player">
          <Player initialName="Player1" symbol="X" isActive={(activePlayer==='X')}></Player>
          <Player initialName="Player2" symbol="O" isActive={(activePlayer==='O')}></Player>
        </ol>
      </div>
      <div>
        {(winner)&&<GameOver winner={winner}></GameOver>}
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameBoard}></GameBoard>
      </div>
    </div>
    <div>
      <Log gameTurnsData={gameTurns}></Log>
    </div>
  </main>
  )
}

export default App
