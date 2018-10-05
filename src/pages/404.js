import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, SEO, Container } from '../components/common'
import Header from '../components/theme/Header'

const NotFoundPage = () => (
	<Layout>
		<React.Fragment>
			<SEO />
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
