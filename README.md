# 🚀 Fast File Sharer

Fast File Sharer is a simple web application for uploading and downloading files efficiently. It features a clean user interface for seamless file management.

## 📂 Directory Structure
```text
project_file_sharing_server/
├── v1/
│   ├── public/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── images/
│   │   │   ├── ICON.png
│   │   │   ├── twitter.png
│   │   │   ├── instagram.png
│   │   │   └── facebook.png
│   │   ├── main.html
│   │   ├── home.html
│   │   ├── upload.html
│   │   ├── download.html
│   │   ├── script.js
│   │   └── styles.css
│   ├── uploads/  # (Stores uploaded files)
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── .gitignore
├── README.md
└── LICENSE
```

## 🚀 Features
- 📤 Upload and manage files easily
- 📥 Download files seamlessly

## 📋 Requirements:
- Node.js (https://nodejs.org/)
- Express.js
- Multer

## 🛠️ Setup & Installation
1. **Clone the repository**:
   ```sh
   git clone https://github.com/sangrechy/project_file_sharing_server.git
   cd project_file_sharing_server/v1
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Start the server**:
   ```sh
   node server.js
   ```
4. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 🛡️ Security Considerations
- Restrict public access to the `/uploads` folder.
- Implement `express-rate-limit` to prevent spam uploads.

## 📜 License
This project is licensed under the MIT License.

---
🚀 Developed with simplicity and efficiency in mind!

