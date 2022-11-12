
import './App.css';
import { useEffect, useState } from 'react';
import CarsList from './components/CarsList';
import Pagination from './components/Pagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jsonData from './cars.json';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(4);

  useEffect(() => {
    setData(jsonData);
  }, [])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <BrowserRouter>
      <div className='App'>
        <CarsList carsData={currentPosts} />
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
      <Routes>
        <Route path="/learn/:id" element="" />
        <Route path="/shop/:id" element="" />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
