const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const app = express();
const port = 3000;

// Ensure 'uploads' directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Serve Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(uploadDir));

// Set Storage Engine
const storage = multer.diskStorage({
    destination: uploadDir,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Upload Route
app.post('/upload', upload.single('file'), (req, res) => {
    res.send(' ');
});

// Serve Uploads Directory
app.get('/files', (req, res) => {
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve files' });
        }
        res.json(files);
    });
});

// File Download Route
// File Download Route (Fix for spaces in filenames)
app.get('/download/:filename', (req, res) => {
    let filename = decodeURIComponent(req.params.filename); // Fix spaces issue
    const filePath = path.join(uploadDir, filename);

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).send("File not found");
    }
});



// Root Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

// Update download.html dynamically
app.get('/download.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'download.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${port}`);
});
