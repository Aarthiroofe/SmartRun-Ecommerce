import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import productsData from '../Products.json';
import { getProducts } from '../Services/Apiservice';
import ProductPopup from './ProductPopup';
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import Pagination from '../Components/Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Style.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(8);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts(productsData.List);
    setCurrentPage(0);
    // getProducts().then((response) => {
    //   console.log(response);
    // });
  }, []);
  useEffect(() => {
    setCurrentPage(0);
  }, [selectedCategory, searchInput]);

  // Extract unique categories from products
  const uniqueCategories = Array.from(new Set(products.map(product => product.category)));

  const filteredProducts = products.filter((product) =>
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    (product.name.toLowerCase().includes(searchInput.toLowerCase()))
  );

  // Sort function based on the selected sort option
  const sortFunction = (a, b) => {
    if (sortBy === 'asc') {
      return a.price - b.price;
    } else if (sortBy === 'desc') {
      return b.price - a.price;
    }
    return 0;
  };

  const sortedProducts = [...filteredProducts].sort((a, b) => sortFunction(a, b));

  const indexOfLastProduct = (currentPage + 1) * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);



  // Function to handle the click on "View Details"
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* <h2 className="mt-4 mb-4">SmartRun Products</h2> */}
      <div className="container-fluid px-5">

        <div className='row mt-4' >

          <div className="col-12 col-md-3 product-heading">
            <h3>SmartRun Products</h3>
          </div>

          <div className="col-12 col-md-5">
            <select
              className="form-control mb-4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="All">All Categories</option>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>


          <div className="col-12 col-md-4">
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Search by name..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>

        </div>

        <div className="sort-buttons">
          {sortBy === 'asc' ? (
            <button className="btn btn-primary me-2" onClick={() => setSortBy('desc')}>
              Sort by Price  <AiFillCaretUp />
            </button>
          ) : (
            <button className="btn btn-primary me-2" onClick={() => setSortBy('asc')}>
              Sort by Price <AiFillCaretDown />
            </button>
          )}
        </div>

        <div className='row'>
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Col key={product.id} className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                <Card className="product-card" onClick={() => handleViewDetails(product)}>
                  <Card.Img variant="top" className="product_image" src={product.image} />
                  <div className="product-price">
                    <span className="badge bg-success">₹{product.price}</span>
                  </div>
                  <Card.Body>
                    <Card.Title >{product.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>

            ))
          ) : (
            <div className="col-12 text-center">
              <p>No data found.</p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className='pagination_container'>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

      </div>

      {/* Popup */}
      <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
    </div>
  );
};

export default ProductList;
