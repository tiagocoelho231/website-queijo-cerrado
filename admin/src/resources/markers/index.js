import icon from '@material-ui/icons/Room';
import create from './create';
import edit from './edit';
import list from './list';

export { create, edit, list };
export default {
	name: 'markers',
	options: { label: 'Marcadores no Mapa' },
	icon,
	create,
	edit,
	list
};

