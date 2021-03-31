import axios from 'axios'
import qs from 'qs'

import { API_KEY, API_URL } from '../constants'

const GOOGLE_BOOKS = axios.create({
  baseURL: API_URL
})

export const getBooks = async (params) => {
  const otherParams = params ? `&${qs.stringify(params)}` : ''

  const response = GOOGLE_BOOKS.get(`volumes?key=${API_KEY}${otherParams}`)

	return response
}
