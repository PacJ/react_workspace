import axios from 'axios';
import { baseUrl } from '../../apiurl';
import { boardReducers } from '../reducers/board_reducer';

function getBoardList(currentPage) {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/list/${currentPage}`)
      .then((Response) => Response.data);
    console.log(data);
    dispatch(boardReducers.getBoardList({ data }));
  };
}

const getBoardDetail = (num, config) => {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/view/${num}`, config)
      .then((Response) => Response.data);
    dispatch(boardReducers.getBoardDetail({ data }));
  };
};

const getBoardDownload = (upload) => {
  return async (dispatch) => {
    const data = await axios
      .get(`${baseUrl}/board/contentdownload/${upload}`, {
        responseType: 'blob',
      })
      .then((Response) => Response.data);
    // dispatch(boardActions.getBoardDownload({ data }));
    return data;
  };
};

const getBoardDelete = (num, config) => {
  return async (dispatch) => {
    await axios
      .delete(`${baseUrl}/board/delete/${num}`, config)
      .then((response) => response.data);
  };
};

const getBoardWrite = (formData, config) => {
  return async () => {
    await axios
      .post(`${baseUrl}/board/write`, formData, config)
      .then((response) => response.data);
  };
};

const getBoardUpdate = (formData, config) => {
  return async () => {
    await axios
      .put(`${baseUrl}/board/update/`, formData, config)
      .then((response) => response.data);
  };
};

export const boardActions = {
  getBoardList,
  getBoardDetail,
  getBoardDownload,
  getBoardDelete,
  getBoardWrite,
  getBoardUpdate,
};
