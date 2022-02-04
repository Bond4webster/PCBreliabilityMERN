import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/products',{
            title: title,
            price: price
        });
        navigate("/list");
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input 
                        className="form-control"
                        type="text"
                        id="title"
                        placeholder="Title"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                    />
                </div>
 
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input 
                        className="form-control"
                        type="text"
                        id="price"
                        placeholder="Price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>
                <button className="btn btn-primary mt-3">Save</button>
            </form>
        </div>
    )
}
 
export default AddProduct