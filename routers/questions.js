const router = require('express').Router();
const Questions = require('../Model/questionSchema');

router.get('/questions', async (req, res) => {
	try {
		const questions = await Questions.find();
		res.json(questions);
	} catch (err) {
		console.log('Error ' + err);
	}
});

router.post('/questions', async (req, res) => {
	const questions = new Questions({
		question: req.body.question,
		optionA: req.body.optionA,
		optionB: req.body.optionB,
		optionC: req.body.optionC,
		optionD: req.body.optionD,
		correctAnswer: req.body.correctAnswer,
	});
	try {
		await questions.save();
		res.status(200).send('Success');
	} catch (err) {
		console.log('Error ' + err);
	}
});

module.exports = router;
