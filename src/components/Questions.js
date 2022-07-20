import React from 'react';
import Question from './Question';
import { useState } from 'react';
import data from '../data';

const Questions = () => {
	const [questions, setQuestions] = useState(data);
	return (
		<main>
			<div className='container'>
				<h2 className='sidebar'>
					You can ask questions and review about our products
				</h2>
				<section>
					{questions.map((question) => {
						return (
							<Question
								key={question.id}
								{...question}
							></Question>
						);
					})}
				</section>
			</div>
		</main>
	);
};

export default Questions;
