//! src/components/ui/OAuthButton.jsx

import BrandIcon from './BrandIcon';
import '../../styles/components/oauth.css';

export default function OAuthButton({
	provider,
	children,
	onClick,
	className = '',
	disabled = false,
}) {
	return (
		<button
			type='button'
			onClick={onClick}
			disabled={disabled}
			className={`ui-oauth-btn ${className}`}
		>
			<span className='ui-oauth-icon'>
				<BrandIcon name={provider} className={`h-6 w-6`} />
			</span>

			<span className='ui-oauth-text'>{children}</span>
		</button>
	);
}
