import React from 'react'
import './ConnectWithMe.css'

function ConnectWithMe({ label, type = 'button', onClick }) {
  return (
    <button className="nav-connect" type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default ConnectWithMe