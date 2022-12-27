import React from 'react';
import { Link } from 'react-router-dom';

function CardMeals({ img, title, desc, param, isStyle, path, getBacket}) {

    const setBascket  =(title)=>{
        getBacket(title)
    }

    return (
        <div className="col-md-4">
            <div className="card mt-2" style={{ position: 'relative' }}>
                <span className='arrow' style={{ position: "absolute", top: '2px', right: "1px", cursor: "pointer" }}>
                    <Link to={`/${path}/${param}`}>
                        <i className='material-icons'>arrow_forward</i>
                    </Link>
                </span>
                {
                    isStyle ? (
                        <div className="card-body text-center p-3">
                            <div>
                                <h4 className="cat-title">

                                    {title.slice(0,13)}
                                </h4>
                                {
                                    desc !== false &&
                                    <p className='card-text'>{desc.slice(0, 60)} ... </p>
                                }
                            </div>
                            <div className="img">
                                <img src={img} className="img img-fluid" alt="" />
                            </div>
                        </div>

                    ) : (

                        <div className="card-body d-flex justify-content-between p-3">
                            <div>
                                <h4 className="cat-title">

                                    {title}
                                </h4>
                                {
                                    desc !== false &&
                                    <p className='card-text'>{desc?.slice(0, 20)} ... </p>
                                }
                            </div>
                            <div className="img">
                                <img src={img} className="img img-fluid" alt="" />
                            </div>
                        </div >
                    )
                }

            </div >
            <button className='btn btn-outline-danger w-100' onClick={()=>setBascket(title)}>Set Backet</button>
        </div >
    );

}

export default CardMeals;