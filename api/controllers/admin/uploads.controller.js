module.exports.create = (req, res) => {
	const { file, params, protocol } = req;
	const url = `/uploads/${params.resource}/${file.filename}`;
	const data = {
		originalName: file.originalname,
		mimetype: file.mimetype,
		size: file.size,
		url,
	};
	return res.send(data);
};