// Create web server
// Load the express library
const express = require('express');
const app = express();

// Load the body-parser library
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load the comments module
const comments = require('./comments');

// Create a new comment
app.post('/comments', (req, res) => {
    const comment = comments.createComment(req.body.comment);
    res.json(comment);
});

// Read all the comments
app.get('/comments', (req, res) => {
    const allComments = comments.getAllComments();
    res.json(allComments);
});

// Read a comment by id
app.get('/comments/:id', (req, res) => {
    const comment = comments.getComment(req.params.id);
    res.json(comment);
});

// Update a comment by id
app.put('/comments/:id', (req, res) => {
    const comment = comments.updateComment(req.params.id, req.body.comment);
    res.json(comment);
});

// Delete a comment by id
app.delete('/comments/:id', (req, res) => {
    comments.deleteComment(req.params.id);
    res.send('Comment deleted');
});

app.listen(3000, () => {
    console.log('Server started');
});
