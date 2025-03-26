import React, { useEffect, useState } from "react";
import { fetchRooms, createRoom } from "../api/DailyVideoCallApi";
import Card from "./Card";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Login from "../pages/Login";

const RoomList = () => {
    const [rooms, setRooms] = useState([]);
    const [roomName, setRoomName] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Kiểm tra trạng thái đăng nhập
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    // Lấy danh sách phòng khi user đăng nhập
    useEffect(() => {
        if (user) {
            const getRooms = async () => {
                const roomData = await fetchRooms();
                setRooms(roomData);
            };
            getRooms();
        }
    }, [user]);

    // Đăng nhập Google
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Login error:", error.message);
        }
    };

    

    return (
        <>
            {user ? (
                <div className="grid align-center justify-center">
                    <Login/>
                    <section className="flex md:flex-row md:justify-between justify-between items-center flex-col">

                        <div className="flex items-center space-x-3">
                            
                        </div>
                    </section>

                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {rooms.length > 0 ? (
                            rooms.map((room) => (
                                <Link to={`rooms/${room.name}`} key={room.id}>
                                    <Card key={room.id}>{room.name} - {room.url}</Card>
                                </Link>
                            ))
                        ) : (
                            <p>We don't have any room</p>
                        )}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-bold mb-4">Please Login to Continue</h2>
                    <button
                        onClick={handleGoogleLogin}
                        className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                        Login with Google
                    </button>
                </div>
            )}
        </>
    );
};

export default RoomList;
