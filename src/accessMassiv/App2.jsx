import React from 'react';
import { useState } from 'react';

function App2(props) {


    const [massiv2,setMassiv2] = useState([])

    const [massiv, setMassiv] = useState([
        { id: 1, son:0, title: "first title" },
        { id: 2, son:1, title: "second title" },
        { id: 3, son:2, title: "third title" },
        { id: 4, son:3, title: "fourth title" },
        { id: 5, son:4, title: "5 title" },
        { id: 6, son:5, title: "6 title" },
        { id: 7, son:6, title: "7 title" },
    ]);


    const hanleMassiv =(obj)=>{


        let arr2 = massiv.map((val,idx)=>{
            if(val.id === obj.id){
                return{
                    ...val,
                    son:val.son+10
                }
            }else{
                return val
            }
        });
        let arr3 = arr2.filter(s=>s.id == obj.id);

        console.log(arr3);

        let arr;
        arr = [...massiv2,arr3[0]];
        setMassiv2(arr)
    }

    return (
        <div className='row'>
            <div className="col-md-4">
                {
                    massiv?.map((value, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{value.title}</h3>
                                <p>{value.son}</p>
                                <button onClick={()=>hanleMassiv(value)}>Set backet</button>
                            </div>
                        )
                    })
                }
            </div>
                <div className="col-md-4">
                {
                    massiv2?.map((value, idx) => {
                        return (
                            <div key={idx}>
                                <h3>{value.title}</h3>
                                <p>{value.son}</p>

                                <button onClick={()=>hanleMassiv(value)}>Set backet</button>
                            </div>
                        )
                    })
                }
                </div>
        </div>
    );
}

export default App2;