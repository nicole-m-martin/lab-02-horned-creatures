import React, { Component } from 'react'
import ImageItem from '../ImageItem/ImageItem.js'

export default class ImageList extends Component {
  render() {
    return (
      
           this.props.filterCreatures.map(image => 
          <ImageItem
          key={image.description}
          image={image.url} 
          type={image.keyword} 
          title={image.title} />)
          
    );
          }
}