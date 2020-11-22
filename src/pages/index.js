import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import Header from '../components/theme/Header'

const IndexPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="welcome" />
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
