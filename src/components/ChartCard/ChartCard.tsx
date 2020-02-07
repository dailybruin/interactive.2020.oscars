import React from "react";
import { Pie } from "react-chartjs-2";
import { css } from "emotion";
import { colors, fonts, mediaQueries } from "../../shared/config";

const { black } = colors;
const { title } = fonts;

function PieChart(props) {
  return (
    <div
      className={css`
        width: 300px;
        height: 300px;
        ${mediaQueries.mobile} {
          height: 30%;
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
            fontFamily: "Nunito",
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

interface ChartCardProps {
  onNextClick: any;
  userData: any;
  dbData: any;
  showNext: boolean;
}

export default class ChartCard extends React.Component<ChartCardProps> {
  render() {
    const { userData, dbData, showNext } = this.props;
    const { mobile } = mediaQueries;
    return (
      <div
        className={css`
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            ${mobile} {
              height: 100vh;

              flex-direction: column;
              justify-content: flex-end;
            }
          `}
        >
          <PieChart title="Your Votes" data={userData} />
          <PieChart title="DB Editor Votes" data={dbData} />
        </div>

        <div
          onClick={() => this.props.onNextClick()}
          className={css`
            border: 1px solid grey;
            margin-top: 10px;
            height: 40px;
            width: 100px;
            font-size: 20px;
            line-height: 40px;
            font-weight: bold;
            cursor: pointer;
            text-align: center;
            vertical-align: middle;
            &:hover {
              background-color: white;
            }
            opacity: ${showNext ? 1 : 0};
          `}
        >
          NEXT
        </div>
      </div>
    );
  }
}
