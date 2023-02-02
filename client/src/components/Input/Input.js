import './Input.css'

export const Input = (props) => {
	const {placeholder} = props;
	return (
		<input 
			className='input' 
			placeholder={placeholder}/>
	);
};
