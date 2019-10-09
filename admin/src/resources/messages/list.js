import React from 'react';
import { Filter, Datagrid, TextField, DateField, TextInput } from 'react-admin';
import { CustomList } from '../../components';

const Filters = props => (
	<Filter {...props}>
		<TextInput fullWidth label="Nome" source="name[$regex]" />
		<TextInput fullWidth label="Email" source="email[$regex]" />
		<TextInput fullWidth label="Telefone" source="phone[$regex]" />
	</Filter>
);

export default props => (
	<CustomList
		filters={<Filters />}
		{...props}
		title={props.options.label}
		sort={{ field: 'createdAt', order: 'DESC' }}
	>
		<Datagrid rowClick="show">
			<TextField label="Nome" source="name" />
			<TextField label="Email" source="email" />
			<TextField label="Telefone" source="phone" />
			<DateField label="Data" source="createdAt" locales="pt-BR" showTime />
		</Datagrid>
	</CustomList>
);
