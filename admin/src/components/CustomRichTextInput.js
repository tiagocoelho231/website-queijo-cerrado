import React from 'react';
import RichTextInput from 'ra-input-rich-text';

export default props => (
	<RichTextInput
		toolbar={[
			[{ header: [2, 3, 4, 5, 6, false] }],
			['bold', 'italic', 'underline', 'strike', 'link'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ align: [] }],
			[{ color: [] }, { background: [] }],
			[{ size: ['small', false, 'large', 'huge'] }],
			['clean'],
			['image']
		]}
		{...props}
	/>
);
