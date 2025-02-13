import Player from './components/Player.jsx'
function App() {

  return (
  <main>
    <div id="game-container">
      <div>
        <ol id="players">
          <Player name="Player1" symbol="X"></Player>
          <Player name="Player2" symbol="O"></Player>
        </ol>
      </div>
      <div>
        GameBoard
      </div>
    </div>
    <div>
      Log
    </div>
  </main>
  )
}

export default App
