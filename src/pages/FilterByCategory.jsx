import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardMeals from '../components/CardMeals';

function FilterByCategory(props) {

    const [filterMeals, setFilteredMeals] = useState([])

    const { category } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(data => data.json())
            .then(res => {
                setFilteredMeals(res.meals);
            })
    }, [])


    const navigate = useNavigate()

    return (
        <div className='row'>

        <span>
            <button className='btn_back btn btn-outline-warning' onClick={()=>navigate(-1)}>Back</button>
        </span>

            {
                filterMeals?.map((value, idx) => {
                    return (
                        <CardMeals
                            isStyle={true}
                            title={value.strMeal}
                            desc={false}
                            img={value.strMealThumb}
                            param={value.idMeal}
                            key={value.idMeal}
                            path={'categoryId'}
                        />
                    )
                })
            }
        </div>
    );
}

export default FilterByCategory;