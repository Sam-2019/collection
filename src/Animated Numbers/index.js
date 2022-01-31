import React from "react";
import AnimatedNumbers from "react-animated-numbers";

function Numbers() {
	const [num, setNum] = React.useState(3764587300);
	return (
		<div className="container">
			<div>
				<AnimatedNumbers
					includeComma
					animateToNumber={num}
					fontStyle={{ fontSize: 32 }}
					configs={(number, index) => {
						return { mass: 1, tension: 230 * (index + 4), friction: 170 };
					}}
				></AnimatedNumbers>
			</div>
		</div>
	);
}

export default Numbers;
