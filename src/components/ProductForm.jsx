import { useState, useEffect } from "react";

function ProductForm() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState();
  const [productDescription, setProductDescription] = useState("");

  let productInfo = (event) => {
    event.preventDefault();
    alert(`
      "name": ${productName},
      "price": ${productPrice},
      "image": ${productImage},
      "description": ${productDescription}`);
  };

  return (
    <form className="post-form" onSubmit={productInfo}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={productName}
            placeholder="Enter name here"
            onChange={(event) => {
              setProductName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={productImage}
            placeholder="Enter image url here"
            onChange={(event) => {
              setProductImage(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={productPrice}
            placeholder="Enter price here"
            onChange={(event) => {
              setProductPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            value={productDescription}
            placeholder="Enter description here"
            onChange={(event) => {
              setProductDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
