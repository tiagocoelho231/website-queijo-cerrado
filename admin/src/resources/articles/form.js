import React from 'react';
import { SimpleForm, Labeled, ImageInput, ImageField, TextInput, required } from 'react-admin';
import { CustomRichTextInput } from '../../components';
import config from '../../config';

export default props => {
  let correctedProps = { ...props };
  delete correctedProps.hasCreate;
  delete correctedProps.hasEdit;
  delete correctedProps.hasList;
  delete correctedProps.hasShow;
  return (
    <SimpleForm {...correctedProps} redirect="list">
      <TextInput fullWidth label="Título" source="title" validate={required()} />
      <TextInput fullWidth label="Descrição" source="description" validate={required()} />
      {props.record.image && (
        <Labeled label="Imagem atual">
          <img src={`${config.API}${props.record.image.url}`} alt={props.record.image.originalName} style={{ maxHeight: '10em' }} title={props.record.image.originalName} />
        </Labeled>
      )}
      <ImageInput label="Imagem" source="image" accept="image/*" validate={required()} >
        <ImageField title="originalName" />
      </ImageInput>
      <TextInput fullWidth label="URL" source="url" validate={required()} />
      <CustomRichTextInput fullWidth label="Conteúdo" source="content" validate={required()} />
    </SimpleForm>
  )
};
