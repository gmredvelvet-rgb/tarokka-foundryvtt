import { Coffee } from 'lucide-react';

const KO_FI_URL = 'https://ko-fi.com/thegmstudio';
const PATREON_URL = 'https://patreon.com/gmredvelvet';

function PatreonIcon({ className = '' }: { className?: string }) {
	return (
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
			<path d="M14.82 2.41c3.96 0 7.18 3.24 7.18 7.21 0 3.96-3.22 7.18-7.18 7.18-3.97 0-7.21-3.22-7.21-7.18 0-3.97 3.24-7.21 7.21-7.21M2 21.6h3.5V2.41H2V21.6" />
		</svg>
	);
}

type SupportButtonProps = {
	href: string;
	label: string;
	hoverClass: string;
	children: React.ReactNode;
};

function SupportButton({ href, label, hoverClass, children }: SupportButtonProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			title={`Support on ${label}`}
			className={`flex items-center gap-2 px-3 py-1.5
				bg-slate-800/90 text-yellow-400 border border-yellow-500/25
				rounded-full shadow-lg backdrop-blur-sm
				text-sm font-semibold whitespace-nowrap
				transition-all duration-250 cursor-pointer
				hover:text-slate-900 ${hoverClass}`}
		>
			<span className="flex shrink-0 items-center justify-center">{children}</span>
			{label}
		</a>
	);
}

export default function SupportLinks() {
	return (
		<div className="absolute bottom-4 left-4 z-30 flex flex-col gap-2">
			<SupportButton
				href={KO_FI_URL}
				label="Ko-fi"
				hoverClass="hover:bg-[#ff5e5b] hover:border-[#ff5e5b]"
			>
				<Coffee className="w-4 h-4" />
			</SupportButton>
			<SupportButton
				href={PATREON_URL}
				label="Patreon"
				hoverClass="hover:bg-[#f96854] hover:border-[#f96854]"
			>
				<PatreonIcon className="w-4 h-4" />
			</SupportButton>
		</div>
	);
}
