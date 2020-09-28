import { createStore } from "redux"

export default createStore(function(state, action) {
  if (state === undefined) {
    let _todoL = [
      { id: 0, category:'할일', title: '산책시키기', dese: 'descTest1', toAt: '2020/09/18/20:20:00' },
      { id: 1, category:'하는중',title: '리액트 공부', dese: 'descTest2', toAt: '2020/09/19/10:25:00' },
      { id: 2, category:'완료',title: '운동', dese: 'descTest3', toAt: '2020/09/19/18:00:00' },
      { id: 3, category:'보류',title: '앱 개발', dese: 'descTest4', toAt: '2020/09/20/18:00:00' }
    ]
    return { _currCate: '전체', _todoL: _todoL }
  }
  if (action.type === 'setCurrCate') {
    return {...state, _currCate: action.cate}
  }
  if (action.type === 'setTodoL') {
    let content = state._todoL.concat({ id: state._todoL.length, category: state._currCate, title: action.title, toAt: 'test' })
    return {...state, _todoL: content}
  }
  return state;
})