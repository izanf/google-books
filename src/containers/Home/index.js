import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import loadingImg from '../../assets/images/loading.gif'
import { IMG_NOT_FOUND_BOOK, ITEMS_PER_PAGE } from '../../constants'
import Paths from '../../routes/routes.json'

import { fetchBooks } from '../../store/reducers/books'

import { Input, Button } from '../../components'
import Card from './Card'

const Container = styled.div`
	height: 100%;
	width: 1200px;
	margin: 0 auto;
`

const BooksList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: ${({ theme }) => theme.Spacing.large};
`

const Header = styled.div`
	padding: ${({ theme }) => theme.Spacing.medium} 0;
`

const NoItems = styled.p`
	font-family: 'Rubik', sans-serif;
	text-align: center;
	padding: ${({ theme }) => theme.Spacing.xxxlarge};
	color: ${({ theme }) => theme.Colors.white};
`

const LoadingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: ${({ theme }) => theme.Spacing.large};
`
const Image = styled.img`
`

const BooksWrapper = styled.div``
const LoadMoreWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: ${({ theme }) => theme.Spacing.large};
`

const Home = ({ loading, booksList, fetchBooks, history }) => {
	const [search, setSearch] = useState('')
	const [page, setPage] = useState(0)

	const _fetchBooks = (page, loadMore) => {
		console.log('SCR', page, loadMore)

		const params = {
			qs: {
				q: search,
				startIndex: page * ITEMS_PER_PAGE
			},
			loadMore
		}

		if (search.length > 3) fetchBooks(params)
	}

	useEffect(() => {
		setPage(0)
		_fetchBooks(0)
	}, [search])

	const _loadMore = () => {
		setPage(page + 1)
		_fetchBooks(page + 1, true)
	}

	const _goDetails = (data) => {
		history.push(Paths.DETAILS, { data })
	}

	const _renderCard = (item) => {
		const url = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : IMG_NOT_FOUND_BOOK

		return (
			<Card
				url={url}
				title={item.volumeInfo.title || ''}
				onClick={() => _goDetails(item)}
			/>
		)
	}

	return (
		<Container>
			<Header>
				<Input id="search-input" value={search} onChange={e => setSearch(e.target.value)}/>
			</Header>
			{loading ? (
				<LoadingWrapper>
					<Image src={loadingImg} />
				</LoadingWrapper>
			) : booksList.length ? (
				<BooksWrapper>
					<BooksList>
						{booksList.map(_renderCard)}
					</BooksList>
					<LoadMoreWrapper>
						<Button onClick={_loadMore}>Carregar mais</Button>
					</LoadMoreWrapper>
				</BooksWrapper>
			) : (
				<NoItems>
					Não há nenhum resultado encontrado na sua busca.
				</NoItems>
			)}
		</Container>
	)
}

const mapStateToProps = ({ books }) => ({
	loading: books.loading,
	error: books.error,
	booksList: books.list
})

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchBooks
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
