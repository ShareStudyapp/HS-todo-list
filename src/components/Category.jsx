import React, { useState, useRef, useCallback } from 'react';
import '../assets/css/App.css';

function Category (props) {
  let [_isAdd, setIsAdd] = useState(false);
  let [_categories, setCategories] = useState(['전체', '할일', '하는중', '완료', '보류']);
  let inputRef = useRef(null)

  const addCate = useCallback( params => {
    let categories = _categories.concat(params);
    setCategories(categories);
    setIsAdd(false);
  })
  // 이런식으로 useCallback으로 묶어주면 리렌더링될 때 다시 생성 안되고 이전 함수값 유지됨


  // const style = {
  //   backgroundColor: 'black',
  //   color: 'aqua',
  //   fontSize: 24,
  //   padding: '1rem'
  // }
  let addWrap = <div className="addWrap">
    <input placeholder="카테고리 명" ref={inputRef}
    onKeyPress={(e) => { if (e.key === 'Enter') addCate(inputRef.current.value) }} />
    <button onClick={() => addCate(inputRef.current.value) }>Add Cate</button>
  </div>
  return (
    <>
      {/* <div style={style}>style Example</div> */}
      <div className="cateBar">
        {<div className="cateChip" onClick={() => setIsAdd(!_isAdd)}>···</div>}
        {_categories.map((item, idx) => (
          <div key={idx} className="cateChip" onClick={() => props.setCate(item)}>{item}</div>
        ))}
      </div>
      {_isAdd && addWrap}
    </>
  )
}

// Category.defaultProps = {
//   name: '이름없음'
// }

// vue의 slot 기능은 react의 props.children으로 찾아보고 적용하면 됨 

// 메소드 실행에 대한 규칙 :
// 1. 파라메터 없을 시 - onClick={addCate}
//    -  addCate를 함수형 (addCate())으로 실행시 앱 마운트 될 때 실행됨 그러니 함수형으로 사용 ㄴㄴ
// 2. 파라메터 있을 시 - onClick={() => addCate(inputRef.current.value) }
// -  그러나 파라메터를 전달하려면 함수형의 모습이어야함 그 문제를 애로우 펑션 안에서 실행하는걸로 해결

// 배열 랜더링 시 값으로 하는 것 보다

// {users.map((user, index) => (
//   <User user={user} key={index} />
// ))}
// 요런식으로 html부분을 활용하자

// 삭제 구현 시
// setUsers(users.filter(user => user.id !== id));
// 요런식으로 걸러진 데이터를 setUsers로 주입

// 수정 시는 요렇게
// let tData = _testName.reduce((accum, curr) => {
//   if(3 === curr.id) curr.name = '123412351231324'
//   accum.push(curr)
//   return accum
// }, [])
// setTestName(tData);
// 현재 데이터를 가져와서 수정한뒤 setTestName에 전체 뒤집어 쓰기

// vue의 computed는 useMemo를 사용하여 구현 가능
// const count = useMemo(() => countActiveUsers(users), [users]);
// 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 두번째 파라미터에는 deps 배열을 넣어주면 되는데, 이 배열 안에 넣은 내용이 바뀌면, 
// 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다.

// 리렌더링될 때 마다 함수도 다시 렌더링됨 그런것을 없에주기 위해 useCallback을 시용함
export default React.memo(Category);
