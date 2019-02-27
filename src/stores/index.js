import {
	STORE_AUTHOR,
	STORE_BOOKS,
	STORE_LOAN, STORE_STUDENTS,
} from '../config/config';

let defaultState = {
	books: [],
	booksloan: [],
	students: [],
	authors: [],
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		/**
		 * Redux Books
		 */
		case STORE_BOOKS:
			return {
				...state,
				books: action.books
			};

		/**
		 * Redux Book loan
		 */
		case STORE_LOAN:
			return {
				...state,
				booksloan: action.booksloan
			};

		/**
		 * Redux Students
		 */
		case STORE_STUDENTS:
			return {
				...state,
				students: action.students
			};

		/**
		 * Redux Students
		 */
		case STORE_AUTHOR:
			return {
				...state,
				authors: action.authors
			};

		default:
			return state
	}

};

export default reducer


