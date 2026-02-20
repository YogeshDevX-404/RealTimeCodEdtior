# 🚀 Real-Time Code Editor

A collaborative **Real-Time Code Editor** built using the **MERN stack + Socket.io** that allows multiple users to join a room and code together instantly — just like Google Docs, but for programming.

---

## 🌐 Live Demo

🔗 **Try it here:**
https://realtimecodedtior-3.onrender.com

---

## ✨ Features

* 👥 **Multi-user Collaboration** — Multiple users can join the same room.
* ⚡ **Real-Time Code Sync** — Code updates instantly for everyone.
* 🧠 **Live Presence Tracking** — See who is connected.
* 🎨 **Syntax Highlighting** using CodeMirror.
* 🔐 **Room-based Sessions** — Unique Room ID for each session.
* 🔄 **Join / Leave Notifications** in real-time.
* ☁️ **Deployed on Render** for live accessibility.
* 📱 Responsive layout for better usability.

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* CodeMirror
* Socket.io Client
* CSS

### Backend

* Node.js
* Express.js
* Socket.io

### Deployment

* Render (Full-stack deployment)

---

## 📂 Project Structure

```
RealTimeCodEditor/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── Actions.js
│   └── socket.js
├── server.js
├── package.json
```

---

## ⚙️ How It Works

1️⃣ User enters a username and creates / joins a room.

2️⃣ Socket.io establishes a WebSocket connection.

3️⃣ Every keystroke emits a `CODE_CHANGE` event.

4️⃣ Server broadcasts updates to all users in the same room.

5️⃣ All editors stay synchronized in real time.

---

## 💻 Local Setup

### Clone the repository

```bash
git clone https://github.com/YogeshDevX-404/RealTimeCodEditor.git
cd RealTimeCodEditor
```

### Install dependencies

```bash
npm install
```

### Run Backend

```bash
npm run server:dev
```

### Run Frontend

```bash
npm run start:front
```

Open:

```
http://localhost:3000
```

---

## 🚀 Production Build

```bash
npm run build
npm start
```

---

## 🔮 Future Improvements

* ✅ Multi-language support (Python, C++, Java)
* ✅ Code execution inside browser
* ✅ User authentication (JWT / OAuth)
* ✅ Chat feature alongside editor
* ✅ File sharing & project persistence
* ✅ Cursor position tracking (like VS Code Live Share)
* ✅ Dark/Light theme toggle

---

## 📌 Use Cases

* 👨‍🏫 Teaching & live coding sessions
* 👩‍💻 Pair programming
* 🧪 Coding interviews
* 🎓 Hackathons & collaboration
* 🧠 DSA practice with friends

---

## 👨‍💻 Author

**Yogesh Prajapati**
B.Tech CSE | MERN Stack Developer
Passionate about building real-world collaborative systems.

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub and share it with others!

---

