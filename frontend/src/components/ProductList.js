import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
export const ProductList = () => {
    const [products, setProduct] = useState([]);
 
    useEffect(() => {
        getProducts();
    }, []);
 
    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    }
 
    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:5000/products/${id}`);
        getProducts();
    }
 
    return (
        <div>
            <Link to="/add" className="btn btn-primary mt-2">Add New</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td className="d-flex justify-content-between">
                                <Link to={`/edit/${product.id}`} className="btn btn-info">Edit</Link>
                                <button onClick={ () => deleteProduct(product.id) } className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
