import React from 'react';
import { Filter, Datagrid, TextField, TextInput } from 'react-admin';
import { CustomList } from '../../components';

const Filters = props => (
	<Filter {...props}>
		<TextInput fullWidth label="Nome" source="name[$regex]" />
		<TextInput fullWidth label="URL" source="url[$regex]" />
	</Filter>
);

export default props => (
	<CustomList
		filters={<Filters />}
		{...props}
		title={props.options.label}
		sort={{ field: 'name', order: 'ASC' }}
	>
		<Datagrid rowClick="edit">
			<TextField label="Nome" source="name" />
			<TextField label="URL" source="url" />
		</Datagrid>
	</CustomList>
);
