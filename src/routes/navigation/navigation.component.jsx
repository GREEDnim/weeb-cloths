import { Fragment } from 'react';
import {Outlet , Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './navigation.styles.scss';
const Navigation=()=>{
    return (
    <Fragment>
      <div className='navigation'>
            <Link className='logo-container' to='/'>
                <Logo className='logo-image'></Logo>
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='shop'>
                SHOP
                </Link>
                <Link className='signin-link' to='signin'>
                SIGN IN
                </Link>
            </div>
      </div>
      
      <Outlet></Outlet>
    </Fragment>
    )
  }
  export default Navigation;