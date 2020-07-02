import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

class ChangeLangButton extends Component {
	handleOnclick = (event) => {
		const { i18n } = this.props;
		i18n.changeLanguage(event.target.value);
	};
	render() {
		const { language, lang } = this.props;
		return (
			<>
				<button onClick={this.handleOnclick} value={lang}>
					{language}
				</button>
			</>
		);
	}
}

export default withTranslation('translation')(ChangeLangButton);
