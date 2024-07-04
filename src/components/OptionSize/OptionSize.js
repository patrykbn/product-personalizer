import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../Product/Product.module.scss';

const OptionSize = ({ sizes, selectedSize, handleSizeChange}) => {
    return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
            {sizes.map(size => (
                <li key={size.name}>
                  <button
                    type="button"
                    className={clsx({ [styles.active]: selectedSize === size.name })}
                    onClick={() => handleSizeChange(size.name)}
                  >
                  {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
    );
};

OptionSize.propTypes = {
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            additionalPrice: PropTypes.number.isRequired,
        })
    ).isRequired,
selectedSize: PropTypes.string.isRequired,
handleSizeChange: PropTypes.func.isRequired,
};

export default OptionSize;