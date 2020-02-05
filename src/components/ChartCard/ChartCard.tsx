import React from "react";
import { Pie } from "react-chartjs-2";
import { css } from "emotion";
import { colors, fonts } from "../../shared/config";

const { black } = colors;
const { title } = fonts;

function PieChart(props) {
  return (
    <div
      className={css`
        width: 20vw;
        height: 20vw;
        @media (max-width: 1200px) {
          width: 25w;
          height: 25vw;
          margin-bottom: 5vh;
        }
        @media (max-width: 800px) {
          width: 40vw;
          height: 40vw;
          margin-bottom: 5vh;
        }
      `}
    >
      <Pie
        data={props.data}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: props.title,
            fontFamily: "Calibri",
            fontSize: 30,
            fontColor: black
          },
          legend: {
            display: false
          }
        }}
      />
    </div>
  );
}

function ChartCard(props) {
  return (
    <div>
      <div
        className={css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        `}
      >
        <div
          className={css`
            margin: 0 10vw;
          `}
        >
          <PieChart title="User Votes" data={props.userData} />
        </div>
        <div
          className={css`
            margin: 0 10vw;
          `}
        >
          <PieChart title="DB Votes" data={props.dbData} />
        </div>
      </div>

      <div>
        <button
          className={css`
            border: 1px solid grey;
            background-color: white;
            height: 40px;
            width: 100px;
            position: relative;
            bottom: 50px;
            font-size: 30px;
            font-weight: bold;
            @media (max-width: 800px) {
              bottom: 0px;
            }
          `}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default ChartCard;
