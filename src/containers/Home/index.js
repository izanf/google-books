import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { IMG_NOT_FOUND_BOOK } from '../../constants'
import Paths from '../../routes/routes.json'

import { fetchBooks } from '../../store/reducers/books'

import { Input } from '../../components'
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

const Home = ({ loading, booksList, fetchBooks, history }) => {
	const [search, setSearch] = useState('')

	useEffect(() => {
		const params = {
			q: search
		}

		fetchBooks(params)
	}, [search])

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
			{loading ? <p>Carregando...</p> : booksList.length ? (
				<BooksList>
					{booksList.map(_renderCard)}
				</BooksList>
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
