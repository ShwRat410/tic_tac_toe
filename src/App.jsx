import Player from './components/Player.jsx'
import GameBoard from './components/Gameboard.jsx'
import { useState } from 'react'
function App() {

  const[activePlayer,setactivePlayer]=useState('X');
  
  function handleSelectSquare(){
    setactivePlayer((curActivePlayer)=>curActivePlayer==='X'?'O':'X')
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
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}></GameBoard>
      </div>
    </div>
    <div>
      Log
    </div>
  </main>
  )
}

export default App
