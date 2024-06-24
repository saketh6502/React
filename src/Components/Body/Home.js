import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LineChart } from '@mui/x-charts/LineChart';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { Chance } from 'chance';


const Tableau10 = [
  '#4e79a7',
  '#f28e2c',
  '#e15759',  
  '#76b7b2',
  '#59a14f',
  '#edc949',
  '#af7aa1',
  '#ff9da7',
  '#9c755f',
  '#bab0ab',
];

const chartsParams = {
  margin: { bottom: 20, left: 25, right: 5 },
  height: 300,
};





const chance = new Chance(42);

const data = Array.from({ length: 50 }, () => ({
  x: chance.floating({ min: -20, max: 20 }),
  y: chance.floating({ min: -20, max: 20 }),
})).map((d, index) => ({ ...d, id: index }));


function Home() {
const [color, setColor] = React.useState('#4e79a7');

  const handleChange = (event, nextColor) => {
    setColor(nextColor);
  };

  return (
    <div className='main'>
      <h1>Saketh</h1>
      <hr></hr>
      <h4>Account</h4>
      <div>
      <Row>
        <Col sm={4}>
        <div className='sub0'>
        <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 7, 6] }]}
        width={300}
        height={300}
        />
        </div>
        </Col>
        <Col sm={4}>
        <div className='sub0'>
        <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [8, 6, 7] }, { data: [2, 6, 3] }, { data: [3, 7, 6] }]}
        width={300}
        height={300}
        />
        </div>
        </Col>
        <Col sm={4}>
        <div className='sub0'>
        <BarChart
        xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
        series={[{ data: [5, 6, 2] }, { data: [3, 7, 7] }, { data: [8, 5, 5] }]}
        width={300}
        height={300}
        />
        </div>
        </Col>
      </Row>
      </div>
      <div className='main'>
      <Row>
        <Col sm={8} className='money'>
        <div className='money1'>
          <h4>About</h4>
          <button className='btn btn-outline-info'>Click</button>
          </div>
          <hr></hr>
          <div className='sub1'>
          <Stack direction="column" spacing={2} alignItems="center" sx={{ width: '100%' }}>
          <LineChart
          {...chartsParams}
          series={[
          {
            data: [15, 23, 18, 19, 13],
            label: 'Example',
            color,
          },
        ]}
      />
      <ToggleButtonGroup
        // orientation="vertical"
        value={color}
        exclusive
        onChange={handleChange}
      >
        {Tableau10.map((value) => (
          <ToggleButton key={value} value={value} sx={{ p: 1 }}>
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: value,
                display: 'inline-block',
              }}
            />
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </Stack>
    </div>

    </Col> 
    
    <Col sm={4}>
    <div className='sub1'>
    <ScatterChart
      series={[
        { type: 'scatter', label: 'Var A', data: data.slice(0, 25) },
        { type: 'scatter', label: 'Var B', data: data.slice(25) },
      ]}
      width={290}
      height={418}
    />
    </div>
    </Col>

      </Row>
      </div>
    </div>
    
  )
}
export default Home



