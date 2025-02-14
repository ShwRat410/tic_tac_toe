import React from 'react'

export default function Log({gameTurnsData}) {
  return (
    <div>
        <ol id="log">
          {gameTurnsData.map((turn)=>(
              <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
          ))
          }
        </ol>
    </div>
  )
}
