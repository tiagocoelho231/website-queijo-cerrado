import React from 'react';
import { CustomShow } from '../../components';
import { CardActions, DeleteButton, ListButton, SimpleShowLayout, DateField, TextField } from 'react-admin';

const Actions = ({ basePath, data, resource }) => (
	<CardActions>
		<ListButton basePath={basePath} />
		<DeleteButton basePath={basePath} record={data} resource={resource} />
	</CardActions>
);

export default props => (
	<CustomShow {...props} title="Visualizar mensagem" actions={<Actions />}>
		<SimpleShowLayout>
			<DateField source="createdAt" label="Data" locales="pt-BR" showTime />
			<TextField source="name" label="Nome" />
			<TextField source="email" label="E-mail" />
			<TextField source="phone" label="Telefone" />
			<TextField source="message" label="Mensagem" />
		</SimpleShowLayout>
	</CustomShow>
);
