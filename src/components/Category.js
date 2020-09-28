import React, { useState } from 'react';
import '../assets/css/App.css';

function Category (props) {
  let [_isAdd, setIsAdd] = useState(false);
  let [_categories, setCategories] = useState(['전체', '할일', '하는중', '완료', '보류']);
  function addCate (params) {
    let categories = _categories.concat(params);
    setCategories(categories);
    setIsAdd(false);
  }
  let categories = _categories.reduce((accum, curr, idx) => {
    accum.push(<div key={idx} className="cateChip" 
    onClick={() => props.setCate(curr)}>{curr}</div>)
    return accum
  }, [])
  let addWrap = _isAdd ? <input placeholder="카테고리 명" onKeyPress={(e) => {
    if (e.key === 'Enter') addCate(e.target.value)
  }}></input> : <div className="cateChip" onClick={() => setIsAdd(true)}>···</div>
  return (
    <div className="cateBar">
      {categories}
      {addWrap}
    </div>
  )
}

export default Category;
