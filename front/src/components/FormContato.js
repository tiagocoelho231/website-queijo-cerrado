import React, { Component } from 'react';
import { withFormik, ErrorMessage, Form, Field } from 'formik';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MaskedInput from 'react-text-mask';
import { CustomFormField } from '.';

export class FormContato extends Component {
	componentDidUpdate(prevProps) {
		const { resetForm, success } = this.props;
		if (success && prevProps.success !== success)
			resetForm();
	}

	render() {
		const { isValid, isSaving } = this.props;
		return (
			<Form className="form-contato">
				<Field name="name" type="text" placeholder="Nome" component={CustomFormField} />
				<Field name="email" type="email" placeholder="Email" component={CustomFormField} />
				<Field name="phone" render={({ field }) => (
					<div className="input phone">
						<MaskedInput
							mask={['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
							guide={false}
							placeholder="Telefone"
							type="text"
							name="phone"
							{...field}
						/>
						<label>Telefone</label>
						<ErrorMessage component="span" name={field.name} className="error" />
					</div>
				)} />
				<Field name="message" render={({ field }) => (
					<div className="textarea message">
						<textarea placeholder="Mensagem" name="message" {...field} />
						<label className="textarea">Mensagem</label>
						<ErrorMessage
							component="span"
							name={field.name}
							className="error"
						/>
					</div>
				)} />
				<button className="contato-button" type="submit" disabled={!isValid || isSaving}>Enviar</button>
			</Form>
		)
	}
}

const mapStateToProps = ({ messages: { success, error } }) => ({ success, error });

const mapDispatchToProps = dispatch => ({
	sendMessage: values => dispatch.messages.sendMessage(values)
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withFormik({
		mapPropsToValues: () => ({ name: '', email: '', phone: '', message: '' }),
		handleSubmit: (values, { props: { sendMessage } }) => {
			sendMessage(values);
		},
	})
)(FormContato)