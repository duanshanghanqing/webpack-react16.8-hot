import { $http } from 'src/libs';

export const selectUserContactAccountBookList = (qs) => $http.get('/accountBook/selectUserContactAccountBookList', { params: qs });
