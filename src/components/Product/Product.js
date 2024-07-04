import { useState } from 'react';
import ProductForm from '../ProductForm/ProductForm';
import ProductImage from '../ProductImage/ProductImage';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
const Product = props => {
  const [selectedSize, setSelectedSize] = useState(props.sizes[0].name);
  const [selectedColor, setSelectedColor] = useState(props.colors[0]);

  const handleSizeChange = size => {
    setSelectedSize(size);
    console.log('size test', selectedSize);
  };

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  const getPrice = () => {
    const selectedSizeObject = props.sizes.find(size => size.name === selectedSize);
    return (
      props.basePrice + (selectedSizeObject ? selectedSizeObject.additionalPrice : 0 )
    )
  }

  const handleAddToCart = e => {
    e.preventDefault();
    console.log('ADD TO CART SUMMARY');
    console.log('================');
    console.log(`Name: ${props.title}`);
    console.log(`Size: ${selectedSize}`);
    console.log(`Color: ${selectedColor}`);
    console.log(`Price: ${getPrice()}$`);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={selectedColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
          handleSizeChange={handleSizeChange}
          handleColorChange={handleColorChange}
          handleAddToCart={handleAddToCart}
          getPrice={getPrice}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default Product;