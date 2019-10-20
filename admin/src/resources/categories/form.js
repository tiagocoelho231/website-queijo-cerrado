import React from 'react';
import { SimpleForm, TextInput, required } from 'react-admin';

export default props => {
  let correctedProps = { ...props };
  delete correctedProps.hasCreate;
  delete correctedProps.hasEdit;
  delete correctedProps.hasList;
  delete correctedProps.hasShow;
  return (
    <SimpleForm {...correctedProps} redirect="list">
      <TextInput fullWidth label="Nome" source="name" validate={required()} />
      <TextInput fullWidth label="URL" source="url" validate={required()} />
    </SimpleForm>
  )
};
