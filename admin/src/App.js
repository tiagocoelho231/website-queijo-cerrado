import React from 'react';
import { Admin } from 'react-admin';
import portugueseMessages from 'ra-language-portuguese';
import restProvider from 'ra-data-simple-rest';

const messages = { pt: portugueseMessages };
const i18nProvider = locale => messages[locale];

import { MessageList, MessageEdit, MessageCreate, MessageIcon } from './resources/messages';
import config from './config';

const App = () => {
  return (
    <Admin
      locale="pt"
      i18nProvider={i18nProvider}
      dataProvider={restProvider(config.API)}
    >
      <Resource name="messages" list={MessageList} edit={MessageEdit} create={MessageCreate} icon={MessageIcon} />
    </Admin>
  );
}

export default App;
