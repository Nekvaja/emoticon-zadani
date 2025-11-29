import './style.css';

import { colorsData, eyesData, mouthData } from '../../data';
import { useSettings } from '../context/setting-context';

const Emoticon:React.FC = () => {

	const {eyes, mouth, color} = useSettings();

	const currentEyes = eyesData.find((e) => e.id === eyes);
	const currentMouth = mouthData.find((m) => m.id === mouth);
	const currentColor = colorsData.find((c) => c.id === color);

	return (
		<div className='emoticon' style={{ backgroundColor: `${currentColor?.value}` }}>
			<img className="emoticon__eyes" src={currentEyes?.image} />
			<img className="emoticon__mouth" src={currentMouth?.image} />
		</div>
	);
}

export default Emoticon;