//! src/pages/Home/sections/ContactSection.jsx

import { useTranslation } from 'react-i18next';
import SectionTitle from '../../../components/shared/SectionTitle';
import SectionButton from '../../../components/shared/SectionButton';
import FormField from '../../../components/ui/FormField';
import Input from '../../../components/ui/Input';
import Textarea from '../../../components/ui/Textarea';

export default function ContactSection({ user, onLogin }) {
	user = true;
	const isGuest = !user;
	const { t } = useTranslation('home');

	return (
		<section id='contact' className='contact-section'>
			<div className='container'>
				<SectionTitle>{t('contact.title')}</SectionTitle>

				<p className='contact-hint'>{t('contact.hint')}</p>

				<div className='contact-card'>
					{isGuest && (
						<div
							className='contact-gate'
							role='note'
							aria-live='polite'
						>
							<p className='mb-3 text-sm text-[rgb(var(--c-muted))]'>
								{t('contact.guest')}
							</p>
							<SectionButton onClick={onLogin}>
								{t('layout:auth.login_signup')}
							</SectionButton>
							<div className='section-btn-wrapper'>
								<button
									type='button'
									onClick={onLogin}
									className='section-btn'
								>
									{t('layout:auth.login_signup')}
								</button>
							</div>
						</div>
					)}

					<form
						className='contact-form'
						onSubmit={(e) => e.preventDefault()}
					>
						<fieldset
							disabled={isGuest}
							aria-disabled={isGuest}
							className='space-y-4'
						>
							<FormField
								id='contact-subject'
								label={t('contact.subject')}
							>
								<Input name='subject' autoComplete='off' />
							</FormField>

							<FormField
								id='contact-message'
								label={t('contact.message')}
							>
								<Textarea name='message' rows={6} />
							</FormField>
							<SectionButton type='submit'>
								{t('layout:common.send')}
							</SectionButton>
						</fieldset>
					</form>
				</div>
			</div>
		</section>
	);
}
