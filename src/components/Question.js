import React, { useState } from 'react';
import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import './Question.css';

const Question = ({ title, info }) => {
	//initial p tag hidden cause by conditional rendering showInfo false when clicked showInfo true and show p tag
	const [showInfo, setShowInfo] = useState(false);

	return (
		<article className='question'>
			<header>
				<h4>{title}</h4>
				<button className='btn' onClick={() => setShowInfo(!showInfo)}>
					{showInfo ? <HiOutlineMinus /> : <HiOutlinePlus />}
				</button>
			</header>
			{showInfo && <p>{info}</p>}
		</article>
	);
};

export default Question;
