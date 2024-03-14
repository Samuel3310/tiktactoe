// // import { useState } from "react";

// // const initialGameBoard = [
// //   [null, null, null],
// //   [null, null, null],
// //   [null, null, null],
// // ];

// // const GameBoard = () => {
// //   const [gameBoard, setGameboard] = useState(initialGameBoard);
// //   function handleSelectSquare(rowIndex, colIndex) {
// //     setGameboard((prevGameBoard) => {
// //       const updatedBoard = [
// //         ...prevGameBoard.map((innerArray) => [...innerArray]),
// //       ];
// //       updatedBoard[rowIndex][colIndex] = "😂";
// //       return updatedBoard;
// //     });
// //   }
// //   return (
// //     <ol id="game-board">
// //       {gameBoard.map((row, rowIndex) => (
// //         <li key={rowIndex}>
// //           <ol>
// //             {row.map((playerSymbol, colIndex) => (
// //               <li key={colIndex}>
// //                 <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
// //                   {playerSymbol}
// //                 </button>
// //               </li>
// //             ))}
// //           </ol>
// //         </li>
// //       ))}
// //     </ol>
// //   );
// // };

// // export default GameBoard;

// // import { useState } from "react";

// const GameBoard = ({ onSelectSquare, board }) => {
//   // State management using the useState hook
//   // const [gameBoard, setGameboard] = useState(initialGameBoard);

//   // // Function to handle selecting a square
//   // function handleSelectSquare(rowIndex, colIndex) {
//   //   // Updating the game board state using setGameboard
//   //   console.log(rowIndex, colIndex);
//   //   setGameboard((prevGameBoard) => {
//   //     console.log("Previous Game Board:", prevGameBoard);

//   //     // Creating a copy of the previous game board using the spread operator
//   //     const updatedBoard = [
//   //       ...prevGameBoard.map((innerArray) => [...innerArray]),
//   //     ];

//   //     console.log("Updated Board (Copy):", updatedBoard);

//   //     // Modifying the selected square in the copy
//   //     updatedBoard[rowIndex][colIndex] = activePlayer;

//   //     console.log("Updated Board with Selected Square:", updatedBoard);

//   //     // Returning the updated board to setGameboard
//   //     return updatedBoard;
//   //   });
//   //   onSelectSquare();
//   // }

//   // console.log("Current Game Board State:", gameBoard);

//   return (
//     <ol id="game-board">
//       {board.map((row, rowIndex) => (
//         <li key={rowIndex}>
//           <ol>
//             {row.map((playerSymbol, colIndex) => (
//               <li key={colIndex}>
//                 <button
//                   onClick={() => onSelectSquare(rowIndex, colIndex)}
//                   disabled={playerSymbol !== null ? true : false}
//                 >
//                   {playerSymbol}
//                 </button>
//               </li>
//             ))}
//           </ol>
//         </li>
//       ))}
//     </ol>
//   );
// };

// export default GameBoard;

export default function GameBoard({ onSelectSquare, board }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
