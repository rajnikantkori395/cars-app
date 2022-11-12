
import './App.css';
import { useEffect, useState } from 'react';
import CarsList from './components/CarsList';
import axios from 'axios';
import Pagination from './components/Pagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(4);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/cars');
    setData(response.data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);


  return (

    <BrowserRouter>
      <CarsList carsData={currentPosts} />
      <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <Routes>
        <Route path="/learn/:id" element=""/>
        <Route path="/shop/:id" element=""/> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
