import React from 'react';
import style from './ImageItem.module.css'


export default class ImageItem extends React.Component {
  render() {
    return (
      <div className={style.box}>
      <div className={style.imgDiv}>
        <img alt="pics" src={this.props.image} />
      </div>
      </div>
    )
  }
}
