import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <>
            {menuData.map((ele) => {
                return (
                    <div className="card mb-3 mx-2 text-bg-dark" key={ele.id}>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={ele.image}className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title">{ele.name}</h5>
                                    <p className="card-text">{ele.description}</p>
                                    <small className="text-muted card-text"><p>{ele.category}</p> <p>{ele.price}</p></small>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default MenuCard
