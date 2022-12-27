import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import FilterByCategory from './pages/FilterByCategory';
import FilterById from './pages/FilterById';
import Search from './pages/Search';
import { toast, Toaster } from 'react-hot-toast';
import { useContextState } from './context/context';


function App(props) {

  // state
  const [state,setState] = useContextState();



  const [meals, setMeals] = useState([]);
  const [meals1, setMeals1] = useState([]);
  const [backet, setBacket] = useState([]);

  // hooks
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(data => data.json())
      .then(res => {
        setMeals(res.categories);
      })
  }, []);


  useEffect(() => {
    getSearch()
  }, [state]);





  const getSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${state && state}`)
      .then(data => data.json())
      .then(res => {
        if (res.meals === null) {
          toast.error(`Not found in "${state}" category`)
          navigate('/');
        } else {
          setMeals1(res.meals);
          navigate('/search');
     
        }
      });
  }

  const getBacket =(title)=>{
      let arr = [...backet,title];
      setBacket(arr)
  }

  return (
    <>
      <Toaster />
      <Navbar
      backet={backet}
        getSearch={getSearch}
      />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Catalog meals={meals} getBacket={getBacket} />} />
          <Route path='/category/:category' element={<FilterByCategory />} />
          <Route path='/categoryId/:id' element={<FilterById />} />
          <Route path='/search' element={<Search
            filterMeals={meals1}
          />} />
        </Routes>
      </div>


    </>
  );
}

export default App;