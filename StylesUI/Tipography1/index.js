import Styles from './styles.module.css';

const Tipography1 =(props)=>{
    return(
        <div className={Styles.tipography1}>
                {props.children}
        </div>  
    );
}

export default Tipography1;