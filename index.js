// hello there
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
	res.send('hello from behind');
});
app.get('/courses-categories', (req, res) => {
	res.send(categories);
});

app.get('/courses/:id', (req, res) => {
	const id = req.params.id;
	const selectedCourse = courses.find((course) => course._id === id);
	res.send(selectedCourse);
});
app.get('/category/:id', (req, res) => {
	const id = req.params.id;
	if (id === 'all') {
		res.send(courses);
	} else {
		const selectedCategory = courses.filter(
			(course) => course.category_id === id
		);
		res.send(selectedCategory);
	}
});

app.listen(port, () => {
	console.log(`server running at ${port}`);
});
