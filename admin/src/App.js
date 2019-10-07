import React from 'react';
import { Admin, Resource } from 'react-admin';
import portugueseMessages from 'ra-language-portuguese';
import restProvider from 'ra-data-simple-rest';

import { MessageList, MessageEdit } from './resources/messages';
import config from './config';

const messages = { pt: portugueseMessages };
const i18nProvider = locale => messages[locale];


const App = () => {
  return (
    <Admin
      locale="pt"
      i18nProvider={i18nProvider}
      dataProvider={restProvider(config.API)}
    >
      <Resource name="messages" options={{ label: "Contato" }} list={MessageList} edit={MessageEdit} />
    </Admin>
  );
}

export default App;
