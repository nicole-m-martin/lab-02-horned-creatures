import React, { Component } from 'react'
// import images from '../data.js'
import ImageItem from '../ImageItem/ImageItem.js'

export default class ImageList extends Component {
  render() {
    return (
          this.props.images.map
          (item => <ImageItem 
          image={item.url}
          type={item.keyword} />)
    )
  }
}