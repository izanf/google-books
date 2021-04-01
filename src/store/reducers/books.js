export const Types = {
	FETCH_BOOKS: 'books/FETCH_BOOKS',
	FETCH_BOOKS_SUCCESS: 'books/FETCH_BOOKS_SUCCESS',
	FETCH_BOOKS_FAILURE: 'books/FETCH_BOOKS_FAILURE',
	HANDLE_FAVORITE: 'books/HANDLE_FAVORITE',
	HANDLE_FAVORITE_SUCCESS: 'books/HANDLE_FAVORITE_SUCCESS',
	HANDLE_FAVORITE_FAILURE: 'books/HANDLE_FAVORITE_FAILURE'
}

export const initialState = {
	loading: false,
	list: [],
	favorites: [],
	search: '',
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
				list: action.payload.items,
				totalItems: action.payload.totalItems,
				search: action.payload.search,
				error: null
			}
		case Types.FETCH_BOOKS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
			}
		case Types.HANDLE_FAVORITE:
			return {
				...state,
				loading: true
			}
		case Types.HANDLE_FAVORITE_SUCCESS:
			return {
				...state,
				loading: false,
				favorites: action.payload.favorites,
				error: null
			}
		case Types.HANDLE_FAVORITE_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error
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

export function handleFavorite(params) {
	return {
		type: Types.HANDLE_FAVORITE,
		params
	}
}

export default reducer
