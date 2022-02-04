/* eslint-disable react-hooks/exhaustive-deps */
import  React,{ useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/products/${id}`,{
            title: title,
            price: price
        });
        navigate("/list");
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }
 
    return (
        <div>
            <form onSubmit={ updateProduct }>
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
 
export default EditProduct