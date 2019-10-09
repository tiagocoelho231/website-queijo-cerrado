import React from 'react';
import { Admin, Resource } from 'react-admin';
import portugueseMessages from 'ra-language-portuguese';

import restProvider from './restProvider';
import resources from './resources';
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
      <Resource {...resources.messages} />
    </Admin>
  );
}

export default App;
