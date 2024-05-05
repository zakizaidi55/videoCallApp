import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';




function RoomPage() {
    const {RoomId} = useParams();
    let myMeeting = async (element) => {
        const appID = 2115801620;
        const serverSecret = "3d00bd7c0b6ad35aaebb899ce24e0980";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, RoomId, Date.now().toString(), "Enter your name");  //kit object create an instance which required to start the meeting
        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'copy link',
                url: `https://console-api-sig.zegocloud.com/s/uikit/RvIZRn/Room/${RoomId}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    
    }
    
  return (
    <div>
        <div
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
    </div>
  )
}

export default RoomPage