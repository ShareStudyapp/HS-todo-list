import React, { Component } from 'react';
import '../App.css';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: ['전체', '할일', '하는중', '완료', '보류', '···']
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
      </div>
    );
  }
}

export default Category;
