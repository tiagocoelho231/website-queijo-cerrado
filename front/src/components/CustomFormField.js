import React from 'react'
import { ErrorMessage } from 'formik'

export default ({ field, form, labelRender, className = '', ...props }) => {
	if (!props.id)
		props.id = field.name

	return (
		<div className={`input ${className}`}>
			<label htmlFor={props.id}>
				{labelRender && labelRender()}
				{!labelRender && props.label}
			</label>
			<input {...field} {...props} />
			<ErrorMessage component="span" name={field.name} className="error" />
		</div>
	)
}
