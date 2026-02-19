//! src/components/LanguageSwitcher/LanguageSwitcher.jsx

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../../config/languages.js';

export default function LanguageSwitcher({ vertical = false }) {
	const { i18n, t } = useTranslation();
	const [open, setOpen] = useState(false);
	const wrapRef = useRef(null);

	const currentCode = (i18n.resolvedLanguage || 'en').split('-')[0];
	const current = useMemo(
		() => languages.find((l) => l.code === currentCode) || languages[0],
		[currentCode],
	);

	const isRtl = i18n.dir() === 'rtl';
	const label = t('lang.label');

	useEffect(() => {
		const onDocClick = (e) => {
			if (!wrapRef.current) return;
			if (!wrapRef.current.contains(e.target)) setOpen(false);
		};
		document.addEventListener('mousedown', onDocClick);
		return () => document.removeEventListener('mousedown', onDocClick);
	}, []);

	return (
		<div ref={wrapRef} className='relative inline-block'>
			<button
				type='button'
				onClick={() => setOpen((v) => !v)}
				aria-label={label}
				title={!vertical ? label : undefined}
				className='h-9 w-9 inline-flex items-center justify-center align-middle rounded-md
             border border-gray-200 dark:border-zinc-800
             hover:bg-gray-100 dark:hover:bg-zinc-900
             transition-colors focus:ring-2 focus:ring-brand'
			>
				<img
					src={current.flag}
					alt=''
					className='h-6 w-6 object-cover rounded-sm block'
				/>
			</button>

			{open && (
				<div
					className={[
						'absolute mt-2 w-44 rounded-lg border border-gray-200 dark:border-zinc-800',
						'bg-white dark:bg-zinc-950 shadow-lg overflow-hidden z-50',
						// Align dropdown end edge with button end edge (mirrors in RTL)
						isRtl ? 'left-0' : 'right-0',
					].join(' ')}
				>
					{languages.map(
						({ code, label: langLabel, flag, altFlag }) => {
							const active = code === current.code;

							return (
								<button
									key={code}
									type='button'
									onClick={() => {
										i18n.changeLanguage(code);
										setOpen(false);
									}}
									className={[
										'w-full flex items-center gap-2 px-3 py-2 text-sm text-left',
										'hover:bg-gray-100 dark:hover:bg-zinc-900',
										active ? 'text-brand' : '',
									].join(' ')}
								>
									<img
										src={flag}
										alt={t(`lang.${altFlag}`)}
										className='h-5 w-5 rounded-sm object-cover'
									/>
									<span>{langLabel}</span>
								</button>
							);
						},
					)}
				</div>
			)}
		</div>
	);
}
