import React from 'react';
import { CustomEdit } from '../../components';
import Form from './form';

export default props => (
	<CustomEdit {...props} title="Editar depoimento">
		<Form {...props} />
	</CustomEdit>
);
