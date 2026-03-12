// creating HeaderComponent as a functional component
import React from 'react'

const HeaderComponent = () => {
  return (
                                                       //designing the header component in the div section
    <div>       
        <header>
            <nav className='navbar navbar-dark bg-dark'>
            <a className="navbar-brand" href="https://www.google.com/">Student Management System</a>

            </nav>

        </header>                                    
    </div>
  )
}

export default HeaderComponent