import React,{useState} from "react";
import ReactDom from "react-dom";
import './index.css';
const Board_Size=10;
const Board= () =>{
  // const [board,setboard] = useState(
  //   new Array(Board_Size).fill(0).map((row)=> {new Array(Board_Size).fill(0) }),
  // ); 
  const board=[[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4],[1,2,3,4,4,4,4,4,4,4]];
  return (
    <>
      {/* <h1>Score: {score}</h1> */}
      <div className="">
        {board.map((row) => (
          <div className="row">
            {row.map((cellValue) => {
             return <div className="ele"></div>;
            })}
          </div>
        ))}
      </div>
    </>
  );
}
export default Board;