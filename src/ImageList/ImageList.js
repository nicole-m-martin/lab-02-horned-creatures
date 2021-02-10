import React, { Component } from 'react'
import images from '../data.js'
import ImageItem from '../ImageItem/ImageItem.js'

export default class ImageList extends Component {
  render() {
    return (
          images.map(image => 
          <ImageItem image={image.url} type={image.keyword} horns={image.horns} />)
    )
  }
}