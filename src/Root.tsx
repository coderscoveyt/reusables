import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={190}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					text: '</transmission>',
				}}
			/>
		</>
	);
};
