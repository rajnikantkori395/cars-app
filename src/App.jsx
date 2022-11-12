
import './App.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jsonData from './cars.json';
import { Learn } from './components/Learn/Learn';
import { Shop } from './components/Shop/Shop';
import CarsList from './components/Cars/CarsList';
export const Context = createContext([]);


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
      <Context.Provider value={data}>
        <Routes>
          <Route path='/' element={<CarsList setCurrentPage={setCurrentPage} currentPage={currentPage} carsData={currentPosts} />} />
          <Route path="/learn/:id" element={<Learn />} />
          <Route path="/shop/:id" element={<Shop />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter >

  );
}

export default App;
