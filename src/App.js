import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import images from './data.js';
import ImageList from './ImageList/ImageList.js'
import Dropdown from './Dropdown/Dropdown.js'



export default class App extends React.Component {
    state = {
       keyword: '',
       horns: '',
    }
    
    handleKeywordChange = (e) => {
      this.setState({
        keyword: e.target.value
      })
    }

    handleHornsChange = (e) => {
      this.setState({
        horns: Number(e.target.value)
      })
    }

    render() {
      const filterCreatures = images.filter((image) => {
        if(!this.state.keyword && !this.state.horns) return true;
        if(!this.state.keyword && this.state.horns) {
        if (image.keyword === this.state.keyword) return true
        } 
      
        if (this.state.horns && !this.state.keyword) {
        if (image.horns === this.state.horns) return true;
        }
      
        if (this.state.horns && this.state.keyword) {
        if (image.horns === this.state.horns && image === this.state.keyword) return true;
        }

        return false;

      })

      return (
        <>  
        <Header />

        <ImageList
        filterCreatures={filterCreatures} />

        Type
        <Dropdown
        currentValue={this.state.keyword}
        handleChange={this.handleKeywordChange}
        options={['', 'narwhals', 'rhinos', 'unilego', 'triceratops', 'markhor', 'mouflon', 'chameleon', 'lizard', 'dragon']} />
        Horns
        <Dropdown
        currentValue={this.state.horns}
        handleChange={this.handleHornsChange}
        options={['', 1, 2, 3, 100]} />
        </>
      );
    }
  }

  
  
   
   
