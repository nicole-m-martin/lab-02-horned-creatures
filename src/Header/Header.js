import React from 'react';
import style from '../Header/HeaderStyle.module.css';



export default class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className={style.welcome}>
        Welcome to the Horned Beast Store!
        </h1> 
      </div>
    )
  }
}
