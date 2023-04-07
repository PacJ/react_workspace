import axios from 'axios';
import { baseUrl } from '../../apiurl';

const memberUpdate = (formData, config) => {
  return async () => {
    await axios
      .put(`${baseUrl}/member/update`, formData, config)
      .then((response) => response.data);
  };
};

export const memberActions = {
  memberUpdate,
};
