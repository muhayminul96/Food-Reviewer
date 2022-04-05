import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, PieChart, Pie, AreaChart, Area } from 'recharts';


const Dashboard = () => {
    const [datas, setDatas] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    },[])
    return (
        <div className='chart-container'>
            <div className='lineChart'>
                <h1>Line Chart</h1>
                
                <LineChart
                    width={500}
                    height={300}
                    data={datas}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sell" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
                </LineChart>
                
            </div >
            <div className="bar-chart">
                <h1>Bar Chart</h1>
                <BarChart
                    width={500}
                    height={300}
                    data={datas}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="sell" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="month" fill="#8884d8" />
                    <Bar dataKey="sell" fill="#82ca9d" />
                </BarChart>
            </div>
            <div className="pieChart">
                <h1>Pie Chart</h1>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="sell"
                        isAnimationActive={true}
                        data={datas}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="investment" data={datas} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>
            <div className="area-cart">
                <h1>Area Chart</h1>
                <AreaChart
          width={500}
          height={400}
          data={datas}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="sell" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
            </div>


        </div>
    );
};

export default Dashboard;