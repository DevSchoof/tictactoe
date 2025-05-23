import CalculateWinner from '../utils/CalculateWinner.js';
import Square from './Square';


export default function Board({ xIsNext, squares, onPlay }) {
    const winner = CalculateWinner(squares);
    let status;
    if (winner) {
      status = `Vencedor: ${winner}`;
    } else {
      status = `Próximo Jogador: ${xIsNext ? 'X' : 'O'}`;
    }


  function handleClick(i) {
      if (winner || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      nextSquares[i] = xIsNext ? 'X' : "O"
      onPlay(nextSquares);
    }
        
    return (
      <>
        <div className="status"
        style={{
        fontSize: '80px',
        fontWeight: 'bold',
        margin: '20px 0',
        textAlign: 'center'
      }}>
          {status}</div>

        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
  }