import { useAppContext } from '@/AppContext';
import Switch from '@/components/Switch';
import { LOCAL_SETTINGS, PLAYER_SETTINGS } from '@/constants';
import type { Settings } from '@/types';

export default function Permissions() {
	const { isGM, settings, emitSettings, setLocalSettings } = useAppContext();

	const togglePermission = (key: string) => {
		if (LOCAL_SETTINGS.includes(key)) {
			setLocalSettings((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
		} else if (isGM) {
			emitSettings({ [key]: !settings[key as keyof Settings] });
		}
	};

	return (
		<>
			{Object.entries(settings)
				.filter(([_key, value]) => typeof value === 'boolean')
				.filter(([key]) => isGM || PLAYER_SETTINGS.includes(key))
				.map(([key, value]) => (
					<Switch
						key={key}
						label={key}
						value={value as boolean}
						toggleAction={() => togglePermission(key)}
					/>
				))}
		</>
	);
}
