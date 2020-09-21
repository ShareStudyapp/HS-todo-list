import React, { Component } from 'react';
import '../assets/css/App.css';

class Category extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAdd: false,
      categories: ['전체', '할일', '하는중', '완료', '보류']
    }
  }
  addCate(params) {
    let categories = this.state.categories.concat(params)
    this.setState({ categories: categories })
  }
  render () {
    let categories = this.state.categories.reduce((accum, curr, idx) => {
      accum.push(<div key={idx} className="cateChip" 
      onClick={() => this.props.setCate(curr)}>{curr}</div>)
      return accum
    }, [])
    let addWrap = this.state.isAdd ? <input placeholder="카테고리 명" onKeyPress={(e) => {
      if (e.key === 'Enter') this.addCate(e.target.value)
    }}></input> : <div className="cateChip" onClick={() => this.setState({ isAdd: true })}>···</div>
    return (
      <div className="cateBar">
        {categories}
        {addWrap}
      </div>
    );
  }
}

export default Category;
