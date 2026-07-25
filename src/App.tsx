import { useAppContext } from '@/AppContext';
import CardSelect from '@/components/CardSelect';
import Notes from '@/components/Notes';
import Settings from '@/components/Settings';
import SupportLinks from '@/components/SupportLinks';
import TarokkaGrid from '@/components/TarokkaGrid';

const TABLE_BACKGROUND = "url('modules/tarokka/assets/img/table3-bg.gif')";

export default function App() {
	const { gameData, isGM, emitStartReading } = useAppContext();

	return (
		<main
			className="relative h-full w-full flex flex-col items-center justify-center gap-4 bg-cover bg-center"
			style={{ backgroundImage: TABLE_BACKGROUND }}
		>
			<Settings />
			<SupportLinks />
			{gameData.started ? (
				<>
					<TarokkaGrid />
					<Notes />
					<CardSelect />
				</>
			) : (
				<div className="flex flex-col items-center gap-6 text-center text-yellow-400 p-8">
					<h1 className="text-4xl font-bold">Tarokka</h1>
					<p className="max-w-[350px]">
						A Tarokka reading for <em>Dungeons &amp; Dragons: Curse of Strahd</em>.
					</p>
					{isGM ? (
						<button
							onClick={emitStartReading}
							className="bg-slate-800 hover:bg-slate-700 border border-yellow-500/25 hover:drop-shadow-[0_0_3px_rgba(255,215,0,0.5)] hover:text-yellow-300 text-lg px-6 py-3 rounded-lg shadow transition-all duration-250 cursor-pointer"
						>
							Start Reading
						</button>
					) : (
						<p className="text-sm text-yellow-400/70">The GM hasn&apos;t started a reading yet.</p>
					)}
				</div>
			)}
		</main>
	);
}
