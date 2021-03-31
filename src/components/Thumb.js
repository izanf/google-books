import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Figure = styled.figure`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Thumb = ({ width, height, url }) => (
  <Figure width={width} height={height}>
    <Image src={url} />
  </Figure>
)

Thumb.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string
}

Thumb.defaultProps = {
  width: 'auto',
  height: 'auto'
}

export default Thumb
