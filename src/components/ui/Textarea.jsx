//! src/components/ui/Textarea.jsx

export default function Textarea({ className = '', ...props }) {
	return (
		<textarea {...props} className={`ui-textarea ${className}`.trim()} />
	);
}
