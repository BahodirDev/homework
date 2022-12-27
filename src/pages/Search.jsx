import React from 'react';
import CardMeals from '../components/CardMeals';
import {useNavigate} from 'react-router-dom'

function Search({filterMeals}) {

    const navigate = useNavigate();

    return (
        <div className='row'>

            <span>
                <button className='btn_back btn btn-outline-warning' onClick={() => navigate(-1)}>Back</button>
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

export default Search;