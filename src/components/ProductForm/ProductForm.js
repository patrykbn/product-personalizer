import React from 'react';
import PropTypes from 'prop-types';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import Button from '../Button/Button';
import styles from '../Product/Product.module.scss';

const ProductForm = ({
    sizes,
    colors,
    selectedSize,
    selectedColor,
    handleSizeChange,
    handleColorChange,
    handleAddToCart,
    getPrice,
}) => {
    return (
        <form onSubmit={handleAddToCart}>
            <OptionSize sizes={sizes} selectedSize={selectedSize} handleSizeChange={handleSizeChange} />
            <OptionColor colors={colors} selectedColor={selectedColor} handleColorChange={handleColorChange} />
            <Button className={styles.button} type="submit">
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    )
}

ProductForm.propTypes = {
    sizes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalPrice: PropTypes.number.isRequired,
      })
    ).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedSize: PropTypes.string.isRequired,
    selectedColor: PropTypes.string.isRequired,
    handleSizeChange: PropTypes.func.isRequired,
    handleColorChange: PropTypes.func.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    getPrice: PropTypes.string.isRequired,
  };
  
  export default ProductForm;