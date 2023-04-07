import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  boardList: [],
  pv: { currentPage: 1 },
  boardDetail: {},
  boardFile: null,
};

// state의 초기값이 이렇게 할당?
const boardSlice = createSlice({
  name: 'board',
  initialState,

  reducers: {
    getBoardList(state, action) {
      state.boardList = action.payload.data.aList;
      state.pv = action.payload.data.pv;
    },

    getBoardDetail(state, action) {
      state.boardDetail = action.payload.data;
    },

    getBoardDownload(state, action) {
      state.boardFile = action.payload.data;
    },
  },
});

// 이걸 이용해서 함수명 자동 완성을 할 수 있다.
// boardSlice.actions 대신 boardReducers 호출 ex) boardReducers.getBoardList
export const boardReducers = boardSlice.actions;
export default boardSlice.reducer;
