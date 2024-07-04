import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from '../Product/Product.module.scss';

const OptionColor = ({ colors, selectedColor, handleColorChange}) => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => (
                <li key={color}>
                  <button
                    type="button"
                    className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`], { [styles.active]: selectedColor === color})}
                    onClick={() => handleColorChange(color)}
                  />
                </li>
              ))}
            </ul>
          </div>
    )
}

OptionColor.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedColor: PropTypes.string.isRequired,
    handleColorChange: PropTypes.func.isRequired,
  };
  
  export default OptionColor;