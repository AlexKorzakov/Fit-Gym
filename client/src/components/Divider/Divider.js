
export const Divider = (props) => {
	const { color } = props;
	const dividerStyle = color === 'white' ? 'white' : null;
	return (
		<hr className={`hr ${dividerStyle}`}/>
	)
}