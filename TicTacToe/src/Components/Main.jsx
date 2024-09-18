import React, { useState } from 'react'
import './Styling.css';
import Button from './Button';

function Main() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    function handleClick(i){
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
  return (
    <div>
      <div className="main">
      <div className="status">{status}</div>

        <div className="overall-box">
            <div className="first">
                <Button value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Button value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Button value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="first">
                <Button value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Button value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Button value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="first">
                <Button value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Button value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Button value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>

      </div>
    </div>
  )
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Main
