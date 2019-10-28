import icon from '@material-ui/icons/Label';
import create from './create';
import edit from './edit';
import list from './list';

export { create, edit, list };
export default {
	name: 'categories',
	options: { label: 'Categorias' },
	icon,
	create,
	edit,
	list
};
