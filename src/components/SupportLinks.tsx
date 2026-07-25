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
	title: string;
	hoverClass: string;
	children: React.ReactNode;
};

function SupportButton({ href, label, title, hoverClass, children }: SupportButtonProps) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			title={title}
			className={`group flex items-center gap-0 overflow-hidden
				bg-slate-800/90 text-yellow-400 border border-yellow-500/25
				rounded-full shadow-lg backdrop-blur-sm
				transition-all duration-250 cursor-pointer
				hover:text-slate-900 ${hoverClass}`}
		>
			<span className="flex shrink-0 items-center justify-center w-9 h-9">{children}</span>
			<span
				className="max-w-0 whitespace-nowrap text-sm font-semibold
					opacity-0 -translate-x-2
					transition-all duration-250
					group-hover:max-w-[120px] group-hover:opacity-100 group-hover:translate-x-0 group-hover:pr-4"
			>
				{label}
			</span>
		</a>
	);
}

export default function SupportLinks() {
	return (
		<div className="fixed top-1/2 left-4 -translate-y-1/2 z-25 flex flex-col gap-3">
			<SupportButton
				href={KO_FI_URL}
				label="Ko-fi"
				title="Support on Ko-fi"
				hoverClass="hover:bg-[#ff5e5b] hover:border-[#ff5e5b]"
			>
				<Coffee className="w-4 h-4" />
			</SupportButton>
			<SupportButton
				href={PATREON_URL}
				label="Patreon"
				title="Support on Patreon"
				hoverClass="hover:bg-[#f96854] hover:border-[#f96854]"
			>
				<PatreonIcon className="w-4 h-4" />
			</SupportButton>
		</div>
	);
}
