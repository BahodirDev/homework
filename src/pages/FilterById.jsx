import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CardMeals from '../components/CardMeals';

function FilterById(props) {

    const [value, setFilteredMeals] = useState({})

    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(data => data.json())
            .then(res => {
                setFilteredMeals(res.meals[0]);
            })
    }, [])


    const navigate = useNavigate()

    return (
        <div className='row f_id'style={{position:"relative"}}> 

            <span className='btn_back'>
                <button className=' btn btn-outline-warning' onClick={() => navigate(-1)}>Back</button>
            </span>
            {
                value &&

                <div className="col-md-9 col-12 ">
                    <div className="card mt-2" style={{ position: 'relative' }}>
                        {
                            
                                <div className="card-body text-center p-3 f_id_box ">
                                    <div>
                                        <h4 className="cat-title">

                                            {value.strCategory && value.strCategory.slice(0, 13)}
                                        </h4>
                                        {
                                            value.strInstructions &&
                                            <p className='card-text'>{value.strInstructions.slice(0, 60)} ... </p>
                                        }
                                    </div>
                                    <div className="img">
                                        <img src={value.strMealThumb} className="img_id  img-fluid" alt=""  />
                                    </div>
                                </div>

                            
                        }

                    </div >
                </div >
            }
        </div>
    );
}

export default FilterById;