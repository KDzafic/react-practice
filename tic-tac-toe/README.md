# React Tic-Tac-Toe Game

## Overview

This is a simple Tic-Tac-Toe game built using React. It allows two players to take turns and play the classic game on a 3x3 grid. Players can customize their names, and the game keeps a log of each turn. The game ends when either a player wins by aligning three symbols in a row, column, or diagonal, or when all squares are filled, resulting in a draw.

The app also features a rematch button after the game is over.

## Features

- **Player customization**: Players can edit their names at any time.
- **Game board interaction**: Players take turns selecting squares on the board.
- **Win detection**: The game checks for a winning combination after each move.
- **Game log**: Each move is logged, showing which player selected which square.
- **Draw detection**: If all squares are filled and there's no winner, the game declares a draw.
- **Rematch functionality**: Players can start a new game after finishing the current one.

## Components

### `App.js`

The main component that holds the state for players, the game board, and the turn history. It also handles game logic such as determining the active player, checking for a winner, and resetting the game for a rematch.

### `GameBoard.js`

Displays the 3x3 grid of the game. It takes `board` (the current state of the game board) and `onSelectSquare` (the function to handle square selection) as props. Each square is represented by a button that becomes disabled once selected.

### `Player.js`

Handles the display and editing of player names. It takes `onChangeName`, `name`, `symbol`, and `isActive` as props, allowing users to edit their name and visually highlighting the active player.

### `GameOver.js`

Displayed when the game ends. It shows the result (either the winning player or a draw) and provides a button to restart the game.

### `Log.js`

Displays a log of all turns, showing which player selected which square. It takes `turns` as a prop.

## State Management

- **`players`**: Holds the names of both players, mapped by their symbols ('X' and 'O').
- **`gameTurns`**: An array representing the history of all turns, where each turn contains the selected square and the player who made the move.
- **`activePlayer`**: Derived from the number of turns, determining whose turn it is (either 'X' or 'O').

## Game Logic

- **Selecting a square**: When a player clicks a square, the `handleSelectSquare` function updates the `gameTurns` array. The board is then re-rendered based on the updated game state.
- **Checking for a winner**: After each turn, the game checks if any of the winning combinations (predefined in `WINNING_COMBINATIONS`) have been met.
- **Handling a draw**: If all squares are filled and no winning combination is found, the game declares a draw.

## Running the Project

To run the project locally:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the app with `npm run dev`.

## Conclusion

This Tic-Tac-Toe game is a fun way to learn and apply core React concepts, including state management, component-based architecture, and handling user interactions. Feel free to clone the repository and add new features or improvements!
