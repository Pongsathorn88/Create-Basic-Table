import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Table ,Button } from 'antd';

const columns = [
  {
    title: 'AWB',
    dataIndex: 'AWB',
  },
  {
    title: 'Piece',
    dataIndex: 'Piece',
  },
  {
    title: 'Weight',
    dataIndex: 'Weight',
  },
  {
    title: 'ARR',
    dataIndex: 'ARR',
  },
  {
    title: 'DES',
    dataIndex: 'DES',
  },
  {
  title: 'Desception',
  dataIndex: 'Desception',
    },
  

  ];
const data = [
  {
    key: '1',
    AWB: '940-4500 1111',
    Piece: 32,
    Weight: '500kgs',
    ARR: 'DMK',
    DES: 'NRT',
    Desception: 'Fabric',
  },
  {
    key: '2',
    AWB: '940-2500 1100',
    Piece: 42,
    Weight: '800kgs',
    ARR: 'DMK',
    DES: 'NRT',
    Desception: 'Soap',
  },
  {
    key: '3',
    AWB: '940-7800 1188',
    Piece: 32,
    Weight: '500kgs',
    ARR: 'DMK',
    DES: 'NRT',
    Desception: 'Flower',
  },
];

const data1 = [
  {
    key: '1',
    AWB: '940-4500 1111',
    Piece: 30,
    Weight: '850kgs',
    ARR: 'DMK',
    DES: 'ICN',
    Desception: 'Fabric',
  },
  {
    key: '2',
    AWB: '940-2500 1100',
    Piece: 42,
    Weight: '800kgs',
    ARR: 'DMK',
    DES: 'ICN',
    Desception: 'Soap',
  },
  {
    key: '3',
    AWB: '940-7800 1188',
    Piece: 80,
    Weight: '1000kgs',
    ARR: 'DMK',
    DES: 'ICN',
    Desception: 'Flower',
  },
];



ReactDOM.render(
  <div>
    <Button type="primary">Back</Button>
    <h4>Flight: XJ602</h4> <h4>Thai AirAsiaX</h4> <h4>Date: 24 AUG 2020 </h4> 
    <Table columns={columns} dataSource={data} size="small" />
   <Button type="primary">Booking</Button>&nbsp;<Button type="primary">Edit</Button>
    <h4>Flight: XJ702</h4> <h4>Thai AirAsiaX</h4> <h4>Date: 24 AUG 2020 </h4> 
    <Table columns={columns} dataSource={data1} size="small" />
    <Button type="primary">Booking</Button>&nbsp;<Button type="primary">Edit</Button>
  </div>,
  
  document.getElementById('container'),
);