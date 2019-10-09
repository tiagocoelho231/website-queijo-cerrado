import React from 'react';
import { List } from 'react-admin';

export default props => (
	<List
		{...props}
		perPage={25}
		sort={{ field: props.sort.field, order: props.sort.order || 'DESC' }}
		title={props.options.label}
	>
		{props.children}
	</List>
);
