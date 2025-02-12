import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    return (<button className={clsx(styles.button, props.className)} onCLick={props.onClick}>{props.children}</button>);
};

export default Button;