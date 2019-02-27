import axios from 'axios'
import {
  server_api, STORE_AUTHOR, STORE_BOOKS, STORE_LOAN, STORE_STUDENTS,
  version_api,
} from '../../config/config';

/**
 * Books
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 */
export function sassbooks() {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/getbooks`).then((response) => {
      dispatch({
        type: STORE_BOOKS,
        books: response.data
      })
    })
  }
}

/**
 * Books Loan
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 */
export function sassBooksLoan() {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/getbooksloan`).then((response) => {
      dispatch({
        type: STORE_LOAN,
        booksloan: response.data
      })
    })
  }
}

/**
 * Books Loan
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 */
export function sassBooksLoanAll() {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/getbooksloanall`).then((response) => {
      dispatch({
        type: STORE_LOAN,
        booksloan: response.data
      })
    })
  }
}

/**
 * Books Loan
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 */
export function sassStudents() {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/getstudents`).then((response) => {
      dispatch({
        type: STORE_STUDENTS,
        students: response.data
      })
    })
  }
}

/**
 * Books Loan
 * @returns {function(*): Promise<AxiosResponse<any> | never>}
 * @constructor
 */
export function sassAuthorBook() {
  return (dispatch) => {
    return axios.get(`${server_api}/${version_api}/getauthors`).then((response) => {
      dispatch({
        type: STORE_AUTHOR,
        authors: response.data
      })
    })
  }
}
