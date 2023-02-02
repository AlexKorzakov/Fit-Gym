import { Button } from '../Button/Button';

import './QuestionForm.css'

export const QuestionForm = () => {
		return (
			<form autoComplete='on' className='form'>
				<div className='container'>
					<div className='info_block'>
							<h2 className='info_text'>Задать вопрос</h2>
							<span className='info_text_description'>Мы с радостью ответим на Ваши вопросы и замечания.</span>
					</div>
					<div className='input_block'>
						<div className='form_item'>
							<input className='form_input' required />
							<label className='form_label'>E-mail: *</label>
						</div>
						<div className='form_item'>
							<input className='form_input' required />
							<label className='form_label'>Ваше имя: *</label>
						</div>
						<div className='form_item'>
							<textarea className='form_input' required/>
							<label className='form_label'>Текст обращения: *</label>
						</div>

					</div>
					<div className='question_confirm_block'>
						<Button>Отправить</Button>
						{/* <a href="/login">Войти в аккаунт</a>
						<a href="/registration">Зарегистрироваться</a> */}
					</div>
				</div>
			</form>
			);
}
