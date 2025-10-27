import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from the backend server!');
// });


//Get list of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 2,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {  
            id: 3,
            title: "Why don't skeletons fight each other?",
            content: "They don't have the guts."
        },
        {
            id: 4,
            title: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 5,
            title: "Why did the bicycle fall over?",
            content: "Because it was two-tired!"
        }
    ];
    res.json(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}
);