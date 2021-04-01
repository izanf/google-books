import React from 'react'
import styled from 'styled-components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { IMG_NOT_FOUND_BOOK } from '../../constants'

import { handleFavorite } from '../../store/reducers/books'

import { Thumb } from '../../components'
import Favorite from './Favorite'
import Header from './Header'

const Container = styled.div`
`

const Content = styled.div`
  display: flex;
  padding: ${({ theme }) => `${theme.Spacing.large}`} 0;
  width: 1200px;
  margin: 0 auto;
`

const DetailsSection = styled.ul`
  padding: ${({ theme }) => theme.Spacing.medium};
`

const Detail = styled.li`
  font-family: 'Rubik', sans-serif;
  line-height: ${({ theme }) => theme.FontSize.big};
  color: ${({ theme }) => theme.Colors.white};
  padding-bottom: ${({ theme }) => theme.Spacing.small};

  &::first-letter {
    text-transform: uppercase;
  }
`

// Title, Subtitle, Author, Year, Total pages, Description and Categories

const Details = ({ location: { state: { data } }, favorites, handleFavorite }) => {
  const title = data.volumeInfo.title || ''
  const image = data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : IMG_NOT_FOUND_BOOK

  return (
    <Container>
      <Header title={title} />
      <Content>
        <div>
          <Thumb width="200px" url={image} />
          <Favorite
            id={data.id}
            favorites={favorites}
            onClick={handleFavorite}
          />
        </div>
        <DetailsSection>
          <Detail><strong>Titulo:</strong> {data.volumeInfo.title}</Detail>
          {data.volumeInfo.categories && <Detail><strong>Categorias: </strong>{data.volumeInfo.categories.join(', ')}</Detail>}
          {data.volumeInfo.description && <Detail><strong>Descrição: </strong>{data.volumeInfo.description.toLowerCase()}</Detail>}
        </DetailsSection>
      </Content>
    </Container>
  )
}

const mapStateToProps = ({ books }) => ({
	favorites: books.favorites
})

const mapDispatchToProps = dispatch => bindActionCreators({
	handleFavorite
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Details)
