import React, { isValidElement, useEffect, useState } from 'react'
import './Head.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link, Navigate } from 'react-router-dom';

export const Head = () => {
    const [use, setUse] = useState([])
    const [searchItem, setSearchItem] = useState('')
    const fetchData = (value) => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setUse(json)

            }).catch(error => {
                console.log(error)
                alert('failed to retrieve data')
            })
    }
    useEffect((e) => {
        fetchData();

    }, [])


    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light  py-3 shadow-sm ">
                <div className="container">
                    <a id='kist' className="navbar-brand fw-bold fs-4" href="/"><h2> OnlineStore</h2></a>


                    <Link to='/'> <button className='btn'><a href="" className="btn btn-outline-dark">Home</a></button></Link>
                    <Link to='/porducts'> <button className='btn'><a href="" className="btn btn-outline-dark">Products</a></button></Link>
                    <Link to='/contact'> <button className='btn'><a href="" className="btn btn-outline-dark"> Contact</a></button></Link>


                    <div className='input-wrapper'>
                        <SearchIcon id='search-icon' />
                        <input placeholder='type to search' value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} />

                    </div>
                    <div className='template_container' >
                        {
                            use.filter((val) => {
                                if (searchItem == '') {
                                    return ''
                                } else if (val.title.toLowerCase().includes(searchItem.toLowerCase())) { return val; }

                            })
                                .map((val) => {
                                    return (

                                        <Link style={{ textDecoration: 'none' }} to={`/products/${val.id}`}><div className='Search_list'  >
                                            <div > {val.title}</div>
                                        </div></Link>


                                    )
                                })
                        }


                    </div>

                </div>
                <Link to='/login'> <button className='btn'><a href="" className="btn btn-outline-dark"> Login</a></button></Link>
                <Link to='cart'> <button className='btn'><a href="" className="btn btn-outline-dark">Cart</a></button></Link>

            </nav>


        </>
    )
}