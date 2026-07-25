import { GalleryHorizontalEnd, RefreshCw } from 'lucide-react';

interface StackTheDeckProps {
	onRedraw: () => void;
	onSelect: () => void;
	onHover: (state: React.ReactNode) => void;
	className?: string;
}

export default function StackTheDeck({
	onRedraw,
	onSelect,
	onHover,
	className = '',
}: StackTheDeckProps) {
	const curryHandleClick = (action: () => void) => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		action();
	};

	return (
		<div
			className={`absolute top-0.5 right-0.5 flex flex-col items-center justify-center gap-0.5 bg-black/40 rounded-md p-0.5 ${className}`}
		>
			<button
				onMouseEnter={() => onHover(<p className="text-yellow-400">Redraw</p>)}
				onMouseLeave={() => onHover(null)}
				onTouchStart={() => onHover(<p className="text-yellow-400">Redraw</p>)}
				onTouchEnd={() => onHover(null)}
				className={`transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer`}
				onClick={curryHandleClick(onRedraw)}
			>
				<RefreshCw className="w-2 h-2" />
			</button>

			<button
				onMouseEnter={() => onHover(<p className="text-yellow-400">Select</p>)}
				onMouseLeave={() => onHover(null)}
				onTouchStart={() => onHover(<p className="text-yellow-400">Select</p>)}
				onTouchEnd={() => onHover(null)}
				className={`transition-all duration-250 text-yellow-400 hover:text-yellow-300 hover:drop-shadow-[0_0_3px_#ffd700] cursor-pointer`}
				onClick={curryHandleClick(onSelect)}
			>
				<GalleryHorizontalEnd className="w-2 h-2" />
			</button>
		</div>
	);
}
