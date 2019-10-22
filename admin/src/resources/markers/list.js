import React from 'react';
import { Filter, Datagrid, NumberField, SelectField, TextField, TextInput } from 'react-admin';
import { CustomList } from '../../components';

const Filters = props => (
	<Filter {...props}>
		<TextInput fullWidth label="Nome" source="name[$regex]" />
		<TextInput fullWidth label="Tipo" source="type[$regex]" />
		<TextInput fullWidth label="Latitude" source="latitude[$regex]" />
		<TextInput fullWidth label="Longitude" source="longitude[$regex]" />
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
			<SelectField source="type" choices={[
				{ id: 'Produtor', name: 'Produtor' },
				{ id: 'Ponto de Venda', name: 'Ponto de Venda' },
			]} />
			<NumberField label="Latitude" source="latitude" />
			<NumberField label="Longitude" source="longitude" />
		</Datagrid>
	</CustomList>
);
