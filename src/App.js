import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import images from './data.js';
import ImageList from './ImageList/ImageList.js'



export default class App extends React.Component {
    state = {
      url: '',
      keyword: '',
    }
    
    handleKeywordChange = (e) => {
      this.setState({
        keyword: e.target.value
      })
    }
    
    render() {
      const filterCreatures = images.filter((image) => {
        if(!this.state.keyword) return true;
        if(image.keyword === this.state.keyword){
          return true;
        }
      })

      return (
        <>  
        <Header />
        <select value={this.state.keyword} 
        onChange={this.handleKeywordChange}>
          <option value=''>Pick Your Creature</option>
          <option value='narwhal'>Narwhals</option>
          <option value='rhino'>Rhinos</option>
          <option value='unicorn'>Unicorns</option>
          <option value='unilego'>UniLegos</option>
          <option value='triceratops'>Triceratops</option>
          <option value='markhor'>Markhors</option>
          <option value='mouflon'>Mouflons</option>
          <option value='chameleon'>Chameleons</option>
          <option value='lizard'>Horned Lizards</option>
          <option value='dragon'>Dragons</option>
        </select>
        
        <ImageList images={ filterCreatures } />
        </>
      )
    }
  }
  