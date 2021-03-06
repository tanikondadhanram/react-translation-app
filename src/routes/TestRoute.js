import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

import withChangeLang from '../hocs/withChangeLang';
import withNavButton from '../hocs/withNavButton';

class TestRoute extends Component {
	render() {
		const { t: translate } = this.props;
		return (
			<>
				<p>{translate('common:hi')}</p>
				<p>{translate('common:hello')}</p>
			</>
		);
	}
}

export default withNavButton(withChangeLang(withTranslation('translation')(TestRoute)));
