import React from 'react';
import { List } from 'react-admin';

export default ({ children, sort = {}, ...rest }) => (
	<List
		perPage={25}
		sort={{ field: sort.field, order: sort.order ? sort.order : 'DESC' }}
		title={rest.options.label}
		{...rest}
	>
		{children}
	</List>
);
