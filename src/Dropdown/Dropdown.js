import React from 'react'

export default class Dropdown extends React.Component {
  render() {
    return (
       <select
       value={this.props.currentValue}
       onChange={this.props.handleChange}> 
       
       {this.props.options.map(CreatureItem =>
        <option value={CreatureItem}> {CreatureItem} </option>)
        }
        
       </select>
    
    )
  }
}
