import React from 'react'

export default function GameOver({winner,resetMatch}) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {(winner)&&<p>{winner} won</p>}
      {(!winner)&&<p>GAME DRAW</p>}
      <p><button onClick={resetMatch}>Rematch</button></p>
    </div> 
  )} 