import { Button } from '../Button/Button';

import './ResetForm.css'

export const ResetForm = () => {
		return (
			<form autoComplete='on' className='form'>
				<div className='container'>
					<div className='info_block'>
							<h2 className='info_text'>Восстановление доступа</h2>
							<span className='info_text_description'>На указанный e-mail будет отправлена ссылка для смены пароля</span>
					</div>
					<div className='input_block'>
						<div className='form_item'>
							<input className='form_input' required />
							<label className='form_label'>E-mail: *</label>
						</div>

					</div>
					<div className='auth_confirm_block'>
						<Button>Отправить</Button>
						<a href="/login">Войти в аккаунт</a>
						<a href="/registration">Зарегистрироваться</a>
					</div>
				</div>
			</form>
			);
}
