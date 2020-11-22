import React from 'react'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
import Header from '../components/theme/Header'

const NotFoundPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="not_found" />
			<Header />
			<Container>
				<h2>
					<FormattedMessage id="not_found" />
				</h2>
			</Container>
		</React.Fragment>
	</Layout>
)

export default NotFoundPage
