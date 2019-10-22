import React from 'react';
import { SimpleForm, NumberInput, SelectInput, TextInput, required } from 'react-admin';

export default props => {
  let correctedProps = { ...props };
  delete correctedProps.hasCreate;
  delete correctedProps.hasEdit;
  delete correctedProps.hasList;
  delete correctedProps.hasShow;
  return (
    <SimpleForm {...correctedProps} redirect="list">
      <TextInput fullWidth label="Nome" source="name" validate={required()} />
      <SelectInput source="type" choices={[
        { id: 'Produtor', name: 'Produtor' },
        { id: 'Ponto de Venda', name: 'Ponto de Venda' }
      ]} validate={required()} />
      <NumberInput fullWidth label="Latitude" source="latitude" validate={required()} />
      <NumberInput fullWidth label="Longitude" source="longitude" validate={required()} />
    </SimpleForm>
  )
};
