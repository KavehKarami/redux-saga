// Phase 02

import axios from 'axios';

export function requestGetUsers() {
  return axios.request({
    url: 'https://jsonplaceholder.typicode.com/users'
  });
}
