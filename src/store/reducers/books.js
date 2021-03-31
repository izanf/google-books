export const Types = {
	FETCH_BOOKS: 'books/FETCH_BOOKS',
	FETCH_BOOKS_SUCCESS: 'books/FETCH_BOOKS_SUCCESS',
	FETCH_BOOKS_FAILURE: 'books/FETCH_BOOKS_FAILURE',
}

export const initialState = {
	loading: false,
	list: [],
	totalItems: 0,
	error: null
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.FETCH_BOOKS:
			return {
				...state,
				loading: true,
				error: null
			}
		case Types.FETCH_BOOKS_SUCCESS:
			return {
				...state,
				loading: false,
				list: action.payload.data.items,
				totalItems: action.payload.data.totalItems,
				error: null
			}
		case Types.FETCH_BOOKS_FAILURE:
			return {
				...state,
				loading: false
			}
		default:
			return state
	}
}

export function fetchBooks(params) {
	return {
		type: Types.FETCH_BOOKS,
		params
	}
}

export default reducer
