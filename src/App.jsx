import Player from './components/Player.jsx'
import GameBoard from './components/Gameboard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'
function App() {

  const[gameTurns,setGameTurns]=useState([]);

  function setGamePlayer(turns){
    let currentPlayer = 'X';

    if(turns.length>0 && turns[0].player === 'X'){
      currentPlayer = 'O';
    }
    return currentPlayer;
  }


  const activePlayer = setGamePlayer(gameTurns)
  // const[activePlayer,setactivePlayer]=useState('X');
  
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
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
      </div>
    </div>
    <div>
      <Log gameTurnsData={gameTurns}></Log>
    </div>
  </main>
  )
}

export default App
