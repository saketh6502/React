import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { chartsGridClasses } from '@mui/x-charts/ChartsGrid';
import { BarChart } from '@mui/x-charts/BarChart';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';



const chartSetting = {
  yAxis: [{ label: 'Profit & Loss' }],
  height: 300,
};
const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'Jan',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'Fev',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'Mar',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'Apr',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'Aug',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'Sept',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'Oct',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'Nov',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;


const timeData = [
  new Date(2023, 7, 31),
  new Date(2023, 7, 31, 12),
  new Date(2023, 8, 1),
  new Date(2023, 8, 1, 12),
  new Date(2023, 8, 2),
  new Date(2023, 8, 2, 12),
  new Date(2023, 8, 3),
  new Date(2023, 8, 3, 12),
  new Date(2023, 8, 4),
];

const y1 = [5, 5, 10, 90, 85, 70, 30, 25, 25];
const y2 = [90, 85, 70, 25, 23, 40, 45, 40, 50];

const valueFormatter1 = (date) =>
  date.getHours() === 0
    ? date.toLocaleDateString('fr-FR', {
        month: '2-digit',
        day: '2-digit',
      })
    : date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
      });

const config = {
  series: [{ data: y1 }, { data: y2 }],
  height: 300,
  topAxis: 'half days',
  leftAxis: null,
};
const xAxisCommon = {
  data: timeData,
  scaleType: 'time',
  valueFormatter1,
};

function About() {
  return (
    <div className='main'>
    <div className='main'>
      <Row >
        
        <Col sm={3} >
              <div className='sub2'>
                <p>New Employees</p>
                <h2>10</h2>
                <p>Overall Employees 218</p>
              </div>
        </Col>

        <Col sm={3} >
              <div className='sub2'>
                <p>Earning</p>
                <h2>$1,23,000</h2>
                <p>Previous Month $1,14,789</p>
              </div>
        </Col>
        
        <Col sm={3} >
              <div className='sub2'>
                <p>Expenses</p>
                <h2>$8,500</h2>
                <p>Previous Month $7,600</p>
              </div>
        </Col>
        
        
        <Col sm={3} >
              <div className='sub2'>
                <p>Profit</p>
                <h2>$89,000</h2>
                <p>Previous Month $1,02,000</p>
              </div>
        </Col>

      </Row>
    </div>

    <div className='main'>
    <Row>
      <Col sm={6}>
      <div className='sub3'>
      <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Total Revenue', valueFormatter }]}
      grid={{ horizontal: true }}
      sx={{
        [`& .${axisClasses.left} .${axisClasses.label}`]: {
          transform: 'translateX(-10px)',
        },
        [`& .${chartsGridClasses.line}`]: { strokeDasharray: '5 3', strokeWidth: 2 },
      }}
      {...chartSetting}
    />
    </div>
      </Col>

        <Col sm={6}>
        <div className='sub3'>
        <Box sx={{ width: '100%', maxWidth: 800 }}>
      <LineChart
        xAxis={[
          {
            ...xAxisCommon,
            tickMinStep: 3600 * 1000 * 24, // min step: 24h
          },
          {
            ...xAxisCommon,
            id: 'half days',
            tickMinStep: 3600 * 1000 * 12, // min step: 12hu
          },
        ]}
        {...config}
      />
    </Box>
    </div>
        </Col>
    </Row>
    </div>

    <div className='main'>
    <Row >
        
        <Col sm={4} >
              <div className='sub4'>
                <h3>Statistics</h3><br></br>
                <div className='line'><p>4/65</p></div>
                <p>Today Leave</p>
                <div className='line1'></div><br></br>
                <div className='line'><p>15/92</p></div>
                <p>Pending Invoice</p>
                <div className='line2'></div><br></br>
                <div className='line'><p>85/122</p></div>
                <p>Completed projects</p>
                <div className='line3'></div><br></br>
                <div className='line'><p>190/212</p></div>
                <p>Open Tickets</p>
                <div className='line4'></div><br></br>
              </div>
        </Col>

        <Col sm={4} >
              <div className='sub4'>
                <h3>Task Statistics</h3><br></br>
                <p>Total Tasks</p>
                <h2>385</h2>
                <p>Overtime Tasks</p>
                <h2>19</h2>
              </div>
        </Col>
        
        <Col sm={4} >
              <div className='sub4'>
              <h3>Today Absent</h3><br></br>
                <h5>Martin Lewis</h5>
                <p>Leave Date: 20 June 2024</p>
                <button className='btn btn-outline-primary'>Approved</button>
                <br></br>
                <br></br>
                <h5>Charles</h5>
                <p>Leave Date: 20 June 2024</p>
                <button className='btn btn-outline-warning'>Pending</button>
                <br></br>
                <br></br>
                <h5>Steve Rogers</h5>
                <p>Leave Date: 20 June 2024</p>
                <button className='btn btn-outline-primary'>Approved</button>
              </div>
        </Col>

      </Row>

    </div>


    </div>
    

  );
}

export default About



