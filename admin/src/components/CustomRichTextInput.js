import React from 'react';
import RichTextInput from 'ra-input-rich-text';

export default props => (
	<RichTextInput
		toolbar={[
			[{ header: [2, 3, 4, 5, 6, false] }],
			['bold', 'italic', 'underline', 'strike', 'link'],
			['blockquote', 'code-block'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ indent: '-1' }, { indent: '+1' }],
			[{ align: [] }],
			[{ color: [] }, { background: [] }],
			[{ font: [] }],
			[{ size: ['small', false, 'large', 'huge'] }],
			['clean'],
			['image']
		]}
		{...props}
	/>
);
