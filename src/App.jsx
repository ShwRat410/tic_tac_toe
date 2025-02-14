import Player from './components/Player.jsx'
import GameBoard from './components/Gameboard.jsx'
import { useState } from 'react'
function App() {

  const[gameTurns,setGameTurns]=useState([]);

  const[activePlayer,setactivePlayer]=useState('X');
  
  function handleSelectSquare(rowIndex,colIndex){
    setactivePlayer((curActivePlayer)=>curActivePlayer==='X'?'O':'X')

    setGameTurns((prevGameTurns)=>{
      let currentPlayer = 'X';

      console.log(prevGameTurns.length)
      console.log(prevGameTurns[0])

      if(prevGameTurns.length>0 && prevGameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
      </div>
    </div>
    <div>
      Log
    </div>
  </main>
  )
}

export default App
