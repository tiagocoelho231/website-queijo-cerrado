import axios from 'axios';
import config from './config';

const uploadImage = async (file, resource) => {
	const body = new FormData();
	body.append('file', file.rawFile);
	const res = await axios.post(`${config.API}/uploads/${resource}`, body);
	return res.data;
};

const isFile = (field) => field.rawFile && field.rawFile instanceof File;

const uploadArrayField = async (field, resource) => {
	const requests = field.map(async value => {
		if (isFile(value))
			value = await uploadImage(value, resource);
		return value;
	})
	return await Promise.all(requests);
}


const addUploadCapabilities = requestHandler => async (type, resource, params) => {
	if (type === 'CREATE' || type === 'UPDATE') {
		const requests = Object.entries(params.data).map(async ([key, value]) => {
			if (isFile(value))
				params.data[key] = await uploadImage(value, resource);
			else if (Array.isArray(value))
				params.data[key] = await uploadArrayField(value, resource);
		})
		await Promise.all(requests);
	}
	return requestHandler(type, resource, params);
};

export default addUploadCapabilities;