import React from 'react';
import { Link } from 'react-router-dom';
import CardMeals from '../components/CardMeals';

function Catalog({ meals, getBacket}) {
    return (
        <div className="row py-2">
            {
                meals?.map((value, idx) => {
                    return (
                       <CardMeals 
                       isStyle={false}
                        title={value.strCategory}
                        desc={value.strCategoryDescription}
                        img={value.strCategoryThumb}
                        param={value.strCategory}
                        key={value.idCategory}
                        path={'category'}
                        getBacket={getBacket}
                       />
                    )
                })
            }
        </div>
    );
}

export default Catalog;