import React from 'react'

const Header = (props) => {


    return (
        <section className="this-section">
            <img src="../img/image-head.jpg" alt="Top" className="img-header" />
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary__main">Mohamed</span>
                    <span className="heading-primary__main--2">Hassan</span>
                    <span className="heading-primary__sub">Web Development</span>
                </h1>
            </div>

        </section>

    )
}
export default Header