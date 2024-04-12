import { Calendar, Whisper, Popover, Badge } from 'rsuite';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';


function getTodoList(date) {
  const day = date.getDate();

  switch (day) {
    case 10:
      return [
        { time: '10:30 am', title: 'Meeting' },
        { time: '12:00 pm', title: 'Lunch' }
      ];
    case 15:
      return [
        { time: '09:30 pm', title: 'Products Introduction Meeting' },
        { time: '12:30 pm', title: 'Client entertaining' },
        { time: '02:00 pm', title: 'Product design discussion' },
        { time: '05:00 pm', title: 'Product test and acceptance' },
        { time: '06:30 pm', title: 'Reporting' },
        { time: '10:00 pm', title: 'Going home to walk the dog' }
      ];
    default:
      return [];
  }
}

export default function Home() {
  // function renderCell(date) {
  //   const list = getTodoList(date);
  //   const displayList = list.filter((item, index) => index < 2);

  //   if (list.length) {
  //     const moreItem = (
  //       <li>
  //         <Whisper
  //           placement="top"
  //           trigger="click"
  //           speaker={
  //             <Popover>
  //               {list.map((item, index) => (
  //                 <p key={index}>
  //                   <b>{item.time}</b> - {item.title}
  //                 </p>
  //               ))}
  //             </Popover>
  //           }
  //         >
  //           <a>show</a>
  //         </Whisper>
  //       </li>
  //     );

  //     return (
  //       <ul className="calendar-todo-list">
  //         {displayList.map((item, index) => (
  //           <li key={index}>
  //             <Badge /> <b>{item.time}</b> - {item.title}
  //           </li>
  //         ))}
  //         {moreItem}
  //       </ul>
  //     );
  //   }

  //   return null;
  // }

  // return <Calendar bordered renderCell={renderCell} />;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Popup trigger={<button>Login</button>} modal>
      {close => (
        <div>
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="header"> Login </div>
          <div className="content">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="actions">
            <button
              className="button"
              onClick={() => {
                handleLogin();
                close();
              }}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}


