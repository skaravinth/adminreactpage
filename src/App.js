import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import './App.css';
import  images from'./images//download (7).png'

// Register all necessary Chart.js components
Chart.register(...registerables);

function OverviewBox({ topic, number, status }) {
  return (
    <div className="box">
      <div className="right-side">
        <div className="box-topic">{topic}</div>
        <div className="number">{number}</div>
        <div className="indicator">
          <span className="text">{status}</span>
        </div>
      </div>
    </div>
  );
}

function SalesDetails({ title, details }) {
  return (
    <div className="recent-sales box">
      
      <div className="title">{title}</div>
    
      <div className="sales-details">
        {details.map((detail, index) => (
          <ul className="details" key={index}>
            <li className="topic">{detail.topic}</li>
            {detail.items.map((item, idx) => (
              <li key={idx}><a href="#">{item}</a></li>
            ))}
          </ul>
        ))}
      </div>
      <div className="button">
        <a href="#">See All</a>
      </div>
    </div>
  );
}

function LineChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','august','septe,ber','october','november','december'],
    datasets: [
      {
    
        label: 'Sales',
        data: [10, 19, 22, 10, 22, 20, 15,30,29,32,22,23],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}

function App() {
  const overviewData = [
    { topic: "Total Order", number: "40,876", status: "Up from yesterday" },
    { topic: "Total Sales", number: "38,876", status: "Up from yesterday" },
    { topic: "Total Profit", number: "$12,876", status: "Up from yesterday" },
    { topic: "Total Return", number: "11,086", status: "Down From Today" }
  ];

  const salesDetailsData = {
    title: "Recent Sales",
    details: [
      { topic: "Date", items: Array(9).fill("02 Jan 2021") },
      { topic: "Customer", items: ['Aravinth', 'Akilan', 'Sajin', 'Atharva', 'Senthooran', 'Ruban', 'Siva', 'Shivanesh', 'Adithi'] },
      { topic: "Sales", items: ['Delivered', 'Pending', 'Returned', 'Delivered', 'Pending', 'Returned', 'Delivered', 'Pending', 'Delivered'] },
      { topic: "Total", items: ['र20000', 'र10.43', 'र25.88', 'र170.66', 'र56.56', 'र44.95', 'र67.33', 'र23.53',] }
    ]
  };

  const products = [
    { id: 1, name: 'Vuitton Sunglasses', price: 'र1107', imageUrl: 'https://images.app.goo.gl/Uxb79dAk2R7EpFNW8' },
    { id: 2, name: 'Hourglass Jeans', price: 'र1567', imageUrl: 'https://images.app.goo.gl/kRs1n9TDRX43gvGy9' },
    { id: 3, name: 'Nike Sport Shoe', price: 'र1234', imageUrl: 'https://images.app.goo.gl/iwu8m1dAiSjdgS397' },
    { id: 4, name: 'Hermes Silk Scarves', price: 'र2312', imageUrl: 'https://images.app.goo.gl/JK8kUeJS6HBbsnza7' },
    { id: 5, name: 'Succi Ladies Bag', price: 'र1456', imageUrl: 'https://images.app.goo.gl/x2oCneJ8Y3kQRuFW8' },
    { id: 6, name: "Gucci Women's Bags", price: 'र2345', imageUrl: 'https://images.app.goo.gl/2r2zxh1CzjceEMrE6' },
    { id: 7, name: 'Adidas Running Shoe', price: 'र2345', imageUrl: 'https://images.app.goo.gl/krxriBNnGhic2wQx5' },
    { id: 8, name: "Black Wear's Shirt", price: 'र1245', imageUrl: 'https://images.app.goo.gl/GYfRHQZCsG9PxkS87' },
  ];

  return (
    <div className="App">
      <div className="sidebar">
        <div className="logo-details">
          <span className="logo_name">ADMIN DASHBOARD</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">
              <i className='bx bx-box'></i>
              <span className="links_name">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
             
              <span className="links_name">Order list</span>
            </a>
          </li>
          <li>
            <a href="#">
              
              <span className="links_name">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              
              <span className="links_name">Stock</span>
            </a>
          </li>
          <li>
            <a href="#">
           
              <span className="links_name">Total order</span>
            </a>
          </li>
          <li>
            <a href="#">
             
              <span className="links_name">Team</span>
            </a>
          </li>
          <li>
            <a href="#">
             
              <span className="links_name">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
             
              <span className="links_name">Favorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              
              <span className="links_name">Setting</span>
            </a>
          </li>
          <li className="log_out">
            <a href="#">
             
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile-details">
            <span className="admin_name">Aravinth.SK</span>
            <img className="adminprofile"src={images}alt="" />
          </div>
        </nav>
        <div className="home-content">
          <div className="overview-boxes">
            {overviewData.map((data, index) => (
              <OverviewBox key={index} {...data} />
            ))}
          </div>
          <div className="straight">
          <div className="sales-boxes">
            <SalesDetails {...salesDetailsData} />
          </div>
          <div className="top-sales box">
          <div className="title">Top Selling Product</div>
          <ul className="top-sales-details">
            {products.map(product => (
              <li key={product.id}>
                <a href="#">
                  <img src={product.imageUrl} alt={product.name} />
                  <span className="product">{product.name}</span>
                </a>
                <span className="price">{product.price}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
          <div className="chart-box box">
            <div className="title">Sales Overview</div>
            <LineChart />
          </div>
       
        </div>
       
      </section>
    </div>
  );
}

export default App;
