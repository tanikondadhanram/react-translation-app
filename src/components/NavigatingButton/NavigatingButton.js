import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NavigatingButton extends Component {
	handleOnclick = () => {
		const { history, routeName } = this.props;
		history.replace(`${routeName}`);
	};
	render() {
		const { routeName } = this.props;

		return <button onClick={this.handleOnclick}>navigate to {routeName}</button>;
	}
}

export default withRouter(NavigatingButton);
