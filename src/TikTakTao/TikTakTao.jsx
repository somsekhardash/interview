import { useEffect, useReducer, useState } from "react";

export default function TikTakTao() {
  const winnerMatrix = [
    ["p1", "p2", "p3"],
    ["p1", "p4", "p7"],
    ["p7", "p8", "p9"],
    ["p6", "p9", "p3"],
    ["p1", "p5", "p9"],
    ["p5", "p7", "p3"],
    ["p2", "p5", "p8"],
    ["p4", "p5", "p6"],
  ];

  const [state, dispatch] = useReducer(
    (state, action) => {
      return { ...state, ...action };
    },
    {
      p1: "",
      p2: "",
      p3: "",
      p4: "",
      p5: "",
      p6: "",
      p7: "",
      p8: "",
      p9: "",
    }
  );

  const [flag, setFlag] = useState(false);
  const [winner, setWinner] = useState([]);
//   const [reset, setReset] = useState(null);

  useEffect(() => {
    winnerMatrix.forEach((condition) => {
      if (
        state[condition[0]] === state[condition[1]] &&
        state[condition[1]] === state[condition[2]] &&
        state[condition[1]] !== ""
      ) {
        if (state[condition[1]] === "O") alert("Player1 Wins");
        else alert("Player2 Wins");
        setWinner(condition);
      }
    });
  }, [state]);

//   useEffect(() => {
//     if (reset) {
//       dispatch({
//         p1: "",
//         p2: "",
//         p3: "",
//         p4: "",
//         p5: "",
//         p6: "",
//         p7: "",
//         p8: "",
//         p9: "",
//       });
//       setWinner([]);
//     }
//   }, [reset]);

  const colour = [
    "red",
    "orange",
    "teal",
    "blue",
    "green",
    "indigo",
    "violet",
    "coral",
    "purple",
  ];

  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {Object.keys(state).map((node, inx) => {
        return (
          <span
            key={inx}
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: winner.includes(node) ? "white" : colour[inx],
              display: "block",
              margin: "10px",
              fontSize: "66px",
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              if (state[node]) return;
              dispatch({ [node]: flag ? "X" : "O" });
              setFlag(!flag);
            }}
          >
            {state[node]}
          </span>
        );
      })}
    </div>
  );
}
