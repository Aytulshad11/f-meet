import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
const HomePage=() => {
    const [roomCode, setRoomCode] = useState("");

    const navigate = useNavigate();
    const handleFormSubmit = (ev) => {
        ev.preventDefault();
        navigate(`/room/${roomCode}`);
    }
    return (
        <div className="home-page flex items-center justify-center min-h-screen bg-gray-900 px-4">
            <form
                onSubmit={handleFormSubmit}
                className="form bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-lg space-y-6 text-gray-200"
            >
                <div className="flex flex-col">
                    <label className="mb-2 text-lg font-semibold">Enter Room Code</label>
                    <input
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        type="text"
                        required
                        placeholder="Enter Room Code"
                        className="p-3 bg-gray-700 border border-gray-600 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-gray-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                    Enter Room
                </button>
            </form>
        </div>
    );
};

export default HomePage;