import { AbsoluteFill, staticFile, useCurrentFrame, Img, Audio } from 'remotion';

const logo = staticFile(`/logo.jpg`);
const intro = staticFile(`/intro.m4a`);
const cursor: React.CSSProperties = {
	height: 110,
	width: 3,
	display: 'inline-block',
	marginLeft: 4,
};

export const MyComposition: React.FC<{ text: string; }> = ({ text }) => {
	const frame = useCurrentFrame();
	let opacity = 1;
	const charsShown = Math.floor(frame / 3);
	let textToShow = text.slice(0, charsShown);
	if (frame >= 90) {
		const charsToRemove = text.length - ((frame - 90) / 3);
		textToShow = text.slice(0, charsToRemove);
	}
	if (frame > 130) {
		textToShow = "";
		opacity = 0;
	}
	return (
		<AbsoluteFill className="bg-slate-700 text-white items-center justify-center">
			<div className="m-5" />
			<Img src={logo} className="rounded-full" />
			<div className="m-10" />
			<div className='text-9xl' style={{ fontFamily: 'sans-serif' }}>
				{textToShow}
				<span className='bg-white text-9xl' style={{ ...cursor, verticalAlign: 'middle', opacity }} />
			</div>
			<div className="m-3" />
			<Audio src={intro} startFrom={30} />
		</AbsoluteFill>
	);
};
