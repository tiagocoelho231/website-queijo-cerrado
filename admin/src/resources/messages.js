import React from 'react';
import { List, Datagrid, Show, DateField, TextField } from 'react-admin';
import BookIcon from '@material-ui/core/svg-icons/action/book';
export const MessageIcon = BookIcon;

export const MessageList = (props) => (
	<List {...props}>
		<Datagrid>
			<TextField source="name" />
			<DateField source="createdAt" />
			<TextField source="email" />
			<EditButton basePath="/messages" />
		</Datagrid>
	</List>
);

const MessageTitle = ({ record }) => {
	return <span>Mensagem de {record ? `"${record.name}"` : ''}</span>;
};

export const MessageEdit = (props) => (
	<Show title={<MessageTitle />} {...props}>
		<Datagrid>
			<TextField source="name" />
			<TextField source="phone" />
			<TextField source="email" />
			<TextField source="message" />
			<DateField label="Data de publicação" source="createdAt" />
		</Datagrid>
	</Show>
);

// export const MessageCreate = (props) => (
// 	<Create title="Create a Message" {...props}>
// 		<SimpleForm>
// 			<TextInput source="title" />
// 			<TextInput source="teaser" options={{ multiLine: true }} />
// 			<LongTextInput source="body" />
// 			<TextInput label="Publication date" source="published_at" />
// 			<TextInput source="average_note" />
// 		</SimpleForm>
// 	</Create>
// );