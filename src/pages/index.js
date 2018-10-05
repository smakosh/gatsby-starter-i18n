import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import { Layout, SEO, Container } from '../components/common'
import Header from '../components/theme/Header'

const IndexPage = () => (
	<Layout>
		<React.Fragment>
			<SEO />
			<Header />
			<Welcome as={Container}>
				<h2>
					<FormattedMessage id="welcome" />
				</h2>
			</Welcome>
		</React.Fragment>
	</Layout>
)

const Welcome = styled.div`
	padding: 2rem 0;
`

export default IndexPage
