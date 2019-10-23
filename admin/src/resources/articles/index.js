import icon from '@material-ui/icons/Email';
import create from './create';
import edit from './edit';
import list from './list';

export { create, edit, list };
export default {
	name: 'articles',
	options: { label: 'Notícias' },
	icon,
	create,
	edit,
	list
};
