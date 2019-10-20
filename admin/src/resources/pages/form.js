import React from 'react';
import { SimpleForm, ReferenceInput, SelectInput, TextInput, required } from 'react-admin';
import { CustomRichTextInput } from '../../components';

export default props => {
  let correctedProps = { ...props };
  delete correctedProps.hasCreate;
  delete correctedProps.hasEdit;
  delete correctedProps.hasList;
  delete correctedProps.hasShow;
  return (
    <SimpleForm {...correctedProps} redirect="list">
      <TextInput fullWidth label="Título" source="title" validate={required()} />
      <TextInput fullWidth label="URL" source="url" validate={required()} />
      <ReferenceInput label="Categoria" source="category" reference="categories" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <CustomRichTextInput fullWidth label="Conteúdo" source="content" validate={required()} />
    </SimpleForm>
  )
};
