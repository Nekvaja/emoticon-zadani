import {eyesData} from '../../data';
import { useSettings } from '../context/setting-context';

const EyesSelector:React.FC = () => {

	const {setEyes} = useSettings();

	return (
		<div className="items">
			{eyesData.map(eyes =>
				<img
					className='item'
					key={eyes.id}
					src={eyes.image}
					onClick={() => {
						setEyes(eyes.id)
					}}
					/>
			)}
		</div>
	);
}

export default EyesSelector;