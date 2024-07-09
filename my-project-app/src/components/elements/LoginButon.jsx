import React from 'react';
function LoginButton(props) {
    const { children } = props
    return (
      <button className="bg-yellow-600 hover:bg-yellow-300 rounded-md transition-all px-4 py-2" type="submit">
        {children}
      </button>
    )
  }
  
export default LoginButton