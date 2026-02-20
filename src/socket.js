import { io } from "socket.io-client";

export const initSocket = async () => {
    const options = {
        "force new connection": true,
        reconnectionAttempts: Infinity,
        timeout: 10000,
        transports: ["websocket"],
    };

    // 👉 Local vs Production auto detect
    const BACKEND_URL =
        process.env.NODE_ENV === "production"
            ? "/"                       // Render par same domain
            : "http://localhost:5000";  // Local backend

    return io(BACKEND_URL, options);
};