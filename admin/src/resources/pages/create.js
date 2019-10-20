import React from 'react';
import { CustomCreate } from '../../components';
import Form from './form';

export default props => (
  <CustomCreate {...props} title="Nova categoria">
    <Form {...props} />
  </CustomCreate>
);
