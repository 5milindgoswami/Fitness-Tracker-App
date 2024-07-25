import React, { useEffect, useState } from 'react'

const ChatRoom = () =>{
    const [messages,setMessages] = useState([]);
    const [user, setUser] = useState("");
    const [message,setMessage] = useState("");
    const fetchMessage= async()=>{
        try{
            const response = await fetch ('http://localhost:5000/messages')
            const data = await response.json()
            console.log(data);
            setMessages(data)
        }catch(error){
            console.log(error);
        }
    }
    const sendMessage = async()=>{
        try{
          await fetch('http://localhost:5000/messages',{method:"POST",headers:{"Content-type":"application/json"},
        body:JSON.stringify({user,message}),});
        setMessage('')
        fetchMessage();
        }catch(error){
          console.error(error);
        }
    };
    useEffect(()=>{
        fetchMessage()
        const interval = setInterval(() =>{fetchMessage();
        },2000);
        return () => clearInterval(interval);
    },[]);
  return(
    <div>
        <h2>Chat Room</h2>
        <ul className="list-group">
        {messages?.map((item) => {
          return (
            <li
              key={item._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.user}
              <span className="badge bg-primary rounded-pill">
                {item.message}
              </span>
            </li>
          );
        })}
      </ul>
        {/* <ul>{message?.map((item)=>{
            return <li key={item._id}>{`${item.user} ${item.message}`}</li>
        })}</ul> */}
    <div className="list-group">
        <input type="text" value= {user} placeholder='user' onChange={(e)=>setUser(e.target.value)} />
        <input type="text" value={message} placeholder='message' onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={sendMessage}>Send</button>
    </div>
    </div>
  )
}
export default ChatRoom;