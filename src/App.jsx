
function App() {
  

  return (
  <main>
    <div id="game-container">
      <div>
        <ol id="players">
          <li>
            <span className="player-name">Player1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player2</span>
            <span className="player-symbol">O</span>
          </li>
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
