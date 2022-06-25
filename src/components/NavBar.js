import React from 'react'

const NavBar = ({ filterItem, menuList }) => {
    return (
        <>
        
            <ul className="nav navbar navbar-expand-lg justify-content-center mt-3">
                {
                    menuList.map((ele) => {
                        return (
                            <li className="nav-item" >
                                <button className="nav-link" onClick={() => filterItem(ele)} aria-current="page">{ele}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default NavBar
