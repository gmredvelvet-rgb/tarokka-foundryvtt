import { useAppContext } from '@/AppContext';

export default function ReadingControls({ className }: { className?: string }) {
	const { gameData, isGM, emitStartReading } = useAppContext();

	if (!isGM) return null;

	return (
		<div className={`flex flex-col w-full gap-1 ${className}`}>
			<button
				onClick={emitStartReading}
				className="w-full py-1 px-2 text-sm transition-all duration-250 bg-slate-700 hover:bg-slate-600 hover:text-yellow-300 rounded-lg shadow cursor-pointer"
			>
				{gameData.started ? 'New Reading' : 'Start Reading'}
			</button>
		</div>
	);
}
