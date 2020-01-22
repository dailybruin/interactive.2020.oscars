import React from 'react'
import { Pie } from 'react-chartjs-2'
import { css } from 'emotion'

var data = {
  datasets: [
    {
      data: [
        '5.31',
        '9.34',
        '1.25',
        '5.54',
        '8.75',
      ],
      backgroundColor: [
        '#6d786a',
        '#aaba8c',
        '#fffcf5',
        '#efdcac',
      ],
      label: 'Dataset 1',
    },
  ],
  labels: [
    'Compostables',
    'Paper',
    'Plastic',
    'Metal',
    'Glass',
  ],
}

function PieChart(props) {
  return (
    <div
     className={css`
       height: 20vw;
       width: 20vw;
     `}
   >
      <Pie
        data={props.data}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: props.title,
          },
          legend: {
            display: false,
          }
        }}
      />
    </div>
  )
}

function ChartCard(props) {
  return (
    <div>
      <div
        className={css`
          display: flex;
          justify-content: space-between;
          margin: 10vh 20vw;
          `}
      >
      <PieChart title = "User Votes" data = {data}/>
      <div
      className={css`
        display: flex;
        align-content: center;
        justify-content: center;
        text-align: center;
        border: 1px solid #D2D2D2;
        position: relative;
        top: 17vw;
        sizing: border-box;
        padding: 15px 40px;
        `}
      >

        NEXT

      </div>

      <PieChart title = "DB Votes" data = {data}/>
      </div>
    </div>
  )
}

export default ChartCard
