import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Button } from '../components'

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Text = styled.p`
	font-family: 'Rubik', sans-serif;
	font-size: ${({ theme }) => theme.FontSize.xxlarge};
	color: ${({ theme }) => theme.Colors.white};
	margin-bottom: ${({ theme }) => theme.Spacing.medium};
`

const NotFound = () => {
	const history = useHistory()

	return (
		<Wrapper>
			<Text>Ooops... Esta página não existe.</Text>
			<Button onClick={history.goBack}>Voltar</Button>
		</Wrapper>
	)
}

export default NotFound
