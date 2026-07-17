import app from './app.js';

const port = Number(process.env.PORT || 3333);

const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use. Stop the existing process or set PORT to another value.`);
        process.exit(1);
    }

    throw error;
});