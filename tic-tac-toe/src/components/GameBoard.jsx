// import { useState } from "react";


export default function GameBoard({ onSelectSquare, board }) {

    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex, symbol) {
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];//2d array so it should be like this
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard
    //     });

    //     onSelectSquare();//pozivamo funk u app
    // }

    return (
        <ol id="game-board">
            {board.map((row, index) => (
                <li key={index}>
                    <ol>
                        {row.map((symbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(index, colIndex)} disabled={symbol !== null}>{symbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
