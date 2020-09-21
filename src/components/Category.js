import React, { Component } from 'react';
import '../assets/css/App.css';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: ['전체', '할일', '하는중', '완료', '보류']
    }
  }
  render () {
    let categories = this.state.categories.reduce((accum, curr, idx) => {
      accum.push(<div key={idx} className="cateChip" 
      onClick={() => this.props.setCate(curr)}>{curr}</div>)
      return accum
    }, [])
    return (
      <div className="cateBar">
        {categories}
        <div className="cateChip">···</div>
      </div>
    );
  }
}

export default Category;
