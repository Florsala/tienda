import React from 'react'

const NavBar = () => {
    return (
    <nav>
        <div className='flex-row'>
         
        <div>
            <ul className='listStyle'>
            <li><a className='text-orange'>HOME</a></li>

                <li><a className='link' href="#">Catalogo</a></li>
                <li><a className='link' href="#">Servicios</a></li>
                 <li><a className='link' href="#">Tiendas</a></li>

            </ul>
            
        </div> 


                
        </div>            
            
    </nav>
    )
}

export default NavBar
