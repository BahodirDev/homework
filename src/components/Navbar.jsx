import React from 'react';
import { useState } from 'react';
import { useContextState } from '../context/context';

function Navbar({backet}) {

    const [search, setSearch] = useState('');
    const [state, setState] = useContextState('');

    const handleSearch =(e)=>{
        e.preventDefault();
        setState(search)
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light px-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
              
                <form className="d-flex" role="search" onSubmit={handleSearch}>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        aria-label="Search" />
                    <button className="btn btn-outline-success " type="submit" onClick={handleSearch}>Search</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;