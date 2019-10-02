import React from 'react';
import { ListButton, CardActions } from 'react-admin';

export default props => WrappedComponent => {
	const ActionListButton = ({ basePath }) => (
		<CardActions>
			<ListButton basePath={basePath} />
		</CardActions>
	);

	return (
		<WrappedComponent
			redirect="list"
			actions={<ActionListButton />}
			{...props}
		/>
	);
};
