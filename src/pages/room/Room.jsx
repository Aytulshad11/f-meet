import React from "react";
import {useParams } from "react-router-dom"
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
const RoomPage = () => {
    const {roomId} = useParams();
    const myMeeting = async (element) => {

    const appID = 1038911461;
    const serverSecret = import.meta.env.VITE_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        roomId, Date.now().toString(),
        "test"
    );
    
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
        container: element,
        scenario: {
            mode: ZegoUIKitPrebuilt.VideoConference,
        },
    });
};
    return (
        <div className="room-page flex items-center justify-center min-h-screen bg-gray-900 px-4">
            <div className="w-full max-w-6xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                <div ref={myMeeting} className="meeting-container h-[70vh] sm:h-[80vh]"/>
            </div>
        </div>
    )
};
export default RoomPage;