import React,{useEffect,useState} from 'react';
import io from 'socket.io-client';
const socket= io.connect("http://10.113.19.100:3001");
const Shared = () => {
  const [message,setMessage]=useState("");
  const[mReceived,setMReceived]=useState("");
  // const socketRef=useRef(null);
  // useEffect(()=>{
  //   socketRef.current =io('localhost:3000/shared');

  //   socketRef.current.on('message',(data)=>{
  //     console.log('recived message:',data);
  //   });
  //   return()=>{
  //     socketRef.current.disconnect();

  //   };
  // },[]);

const sendMessage=()=>{
  
  // const message='hello server';
  // socketRef.current.emit('message',message);ket.emit()
  socket.emit("send_message",{message});

};
useEffect(()=>{
  socket.on("receive_message",(data)=>{
    setMReceived(data.message)
  })
})
  return (
    <div>
      <h1>Socket.io</h1>
      <input placeholder="message" onChange={(e)=>{
        setMessage(e.target.value);
      }} />
      <button onClick={sendMessage}>send message</button>
      <h1>message</h1>
      {mReceived}
    </div>
  )
};

export default Shared;