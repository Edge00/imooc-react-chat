import axios from 'axios';
const ADD = 'ADD';
const MINUS = 'MINUS';
const USER_DATA = 'USER';

const initState = {
  num: 0,
  user: {
    name: 'aaa',
    age: 10
  }
}

/**
 * 1. 创建 reducer
 * reducer 的作用：
 * 根据之前的 state 和 action 生成新的 state
 */
export function counter(state=initState, action) {
  console.log(state, action);
  switch(action.type) {
    case ADD:
      return { ...state, num: state.num + 1};
    case MINUS:
      return  { ...state, num: state.num - 1};
    case USER_DATA:
      return { ...state, user: action.payload[0] }
    default:
      return state;
  }
}

// actions
export function addGun() {
  return { type: ADD };
};

export function minusGun() {
  return { type: MINUS };
};

export function addGunAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addGun());
    }, 2000);
  }
};

export function changeUserDta(data) {
  return { type: USER_DATA , payload: data };
};

export function getData() {
  return dispatch => {
    axios.get('/data').then((res) => {
      dispatch(changeUserDta(res.data));
    });
  }
};
