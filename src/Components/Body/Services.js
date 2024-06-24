import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { value: 5, label: 'A' },
  { value: 10, label: 'B' },
  { value: 15, label: 'C' },
  { value: 20, label: 'D' },
];

const size = {
  width: 400,
  height: 200,
};

function Services() {
  return (
    <div className='main'>
      <div className='main'>
      <Row >
        
        <Col sm={4} >
              <div className='sub5'><br></br>
                <h6>Weekly Sales</h6><br></br>
                <h2>$ 15,0000</h2><br></br><br></br>
                <p>Increased by 60%</p>
              </div>
        </Col>

        <Col sm={4} >
              <div className='sub5'><br></br>
                <h6>Weekly Orders</h6><br></br>
                <h2>45,6334</h2><br></br><br></br>
                <p>Decreased by 10%</p>
              </div>
        </Col>
        
        <Col sm={4} >
              <div className='sub5'><br></br>
                <h6>Weekly Online</h6><br></br>
                <h2>95,5741</h2><br></br><br></br>
                <p>Increased  by 5%</p>
              </div>
        </Col>

      </Row>
    </div>

    <div className='main'>
    <Row>
      <Col sm={6}>
        <div className='sub6'>
        <h4>Visit And Sales Statistics</h4><br></br><br></br><br></br>
          <BarChart
            series={[
              { data: [3, 4, 1, 6, 5], stack: 'A', label: 'A1' },
              { data: [4, 3, 1, 5, 8], stack: 'A', label: 'A2' },
              { data: [4, 2, 5, 4, 1], stack: 'B', label: 'B1' },
              { data: [2, 8, 1, 3, 1], stack: 'B', label: 'B2' },
              { data: [10, 6, 5, 8, 9], label: 'C1' },
            ]}
            width={500}
            height={350}
          />
        </div>
      </Col>

      <Col sm={6}>
      <div className='sub6'>
        <h4>Traffic Sources</h4><br></br><br></br><br></br>
      <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
    </div>
    
      </Col>
    </Row>
    </div>


    </div>
  )
}

export default Services
