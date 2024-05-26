import {Fragment} from 'react'
// fragment is empty tag also known as <> </>
import HeadercartButton from './HeadercartButton'
import mealsImage from "../../assets/meals.jpg"
import classes from "./Header.module.css"

const Header = (props) => {
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeadercartButton onclick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
          <img src={mealsImage} alt='a table full of delisious food!'/>
        </div>
    </Fragment>
  )
}

export default Header