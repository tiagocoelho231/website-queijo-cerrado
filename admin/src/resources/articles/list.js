import React from 'react';
import { Filter, Datagrid, TextField, TextInput } from 'react-admin';
import { CustomList } from '../../components';

const Filters = props => (
  <Filter {...props}>
    <TextInput fullWidth label="Título" source="title[$regex]" />
    <TextInput fullWidth label="Categoria" source="category[$regex]" />
    <TextInput fullWidth label="Descrição" source="description[$regex]" />
    <TextInput fullWidth label="URL" source="url[$regex]" />
  </Filter>
);

export default props => (
  <CustomList
    filters={<Filters />}
    {...props}
    title={props.options.label}
    sort={{ field: 'name', order: 'DESC' }}
  >
    <Datagrid rowClick="edit">
      <TextField label="Título" source="title" />
      <TextField label="Descrição" source="description" />
      <TextField label="URL" source="url" />
    </Datagrid>
  </CustomList>
);
