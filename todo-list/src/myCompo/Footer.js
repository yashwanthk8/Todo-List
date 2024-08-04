import React from 'react'

export default function Footer() {
  let footerStyle = {
    backgroundColor: '#343a40', // Use camelCase
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    width: '100%'
  };
  
  return (

    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <p className="text-center">
        Copyright &copy; MyTodoList.com
      </p>

    </footer>
  )
}
