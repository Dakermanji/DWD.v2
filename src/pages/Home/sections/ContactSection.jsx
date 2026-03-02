//! src/pages/Home/sections/ContactSection.jsx

import { useTranslation } from 'react-i18next';
import SectionTitle from '../../../components/shared/SectionTitle';

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
							<label className='block'>
								<span className='mb-1 block text-sm font-medium text-[rgb(var(--c-text))]'>
									{t('contact.subject')}
								</span>

								<input
									name='subject'
									autoComplete='off'
									className='w-full rounded-md border border-[rgb(var(--c-border))] bg-[rgb(var(--c-popover))] px-3 py-2 text-[rgb(var(--c-text))] outline-none focus:border-transparent focus:ring-2 focus:ring-[rgb(var(--c-text))]/15 disabled:cursor-not-allowed disabled:opacity-60'
								/>
							</label>

							<label className='block'>
								<span className='mb-1 block text-sm font-medium text-[rgb(var(--c-text))]'>
									{t('contact.message')}
								</span>

								<textarea
									name='message'
									rows={6}
									className='w-full resize-y rounded-md border border-[rgb(var(--c-border))] bg-[rgb(var(--c-popover))] px-3 py-2 text-[rgb(var(--c-text))] outline-none focus:border-transparent focus:ring-2 focus:ring-[rgb(var(--c-text))]/15 disabled:cursor-not-allowed disabled:opacity-60'
								/>
							</label>
							<div className='section-btn-wrapper'>
								<button type='submit' className='section-btn'>
									{t('layout:common.send')}
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</section>
	);
}
