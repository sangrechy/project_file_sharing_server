🚀 Fast File Sharer
Fast File Sharer is a simple web application for uploading and downloading files efficiently. It features a clean user interface for seamless file management.

📂 Directory Structure
/project-root
│── /public
│   ├── /css
│   │   ├── styles.css
│   ├── /images
│   │   ├── ICON.png
│   │   ├── twitter.png
│   │   ├── instagram.png
│   │   ├── facebook.png
│   ├── main.html
│   ├── home.html
│   ├── upload.html
│   ├── download.html
│── /uploads  # (Stores uploaded files)
│── /routes
│   ├── fileRoutes.js
│── /controllers
│   ├── fileController.js
│── /middleware
│   ├── uploadMiddleware.js
│── /config
│   ├── serverConfig.js
│── server.js
│── package.json
│── README.md
│── .gitignore

🚀 Features
📤 Upload and manage files easily
📥 Download files seamlessly

🛠️ Setup & Installation
Clone the repository:
```sh
git clone https://github.com/sangrechy/project_file_sharing_server.git
cd project_file_sharing_server
```
Install dependencies:
```sh
npm install
```
Start the server:
```sh
node server.js
```
Open in browser:
**http://localhost:3000**

🛡️ Security Considerations
- Restrict public access to the /uploads folder.
- Implement express-rate-limit to prevent spam uploads.

📜 License
This project is licensed under the MIT License.

**Requirements:**
- Node.js (https://nodejs.org/)
- Express.js
- Multer

**Installation:**
1. Install Node.js from the official website.
2. Navigate to the project directory:
   ```sh
   cd project_file_sharing_server
   ```
3. Install dependencies:
   ```sh
   npm install express multer
   ```
4. Start the server:
   ```sh
   node server.js
   ```
5. Open in browser:
   **http://localhost:3000**

