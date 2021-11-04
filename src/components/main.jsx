import React from 'react';
import '../pages/_home.scss';
import '../base/_typography.scss';

const Main = (props) => {

    return (
        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        About
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-2">
                        <h3 className="heading-tertiary u-center-text u-margin-bottom-small">
                            A little about me
                        </h3>
                        <p className="para u-margin-bottom-medium">
                            I could tell you that I love web development, but then again, 
                            I wouldn't be making a website about myself. I am a graduate of CUNY Brooklyn College with
                            a degree in computer science. My first language was Java, which I hold a certification in, 
                            but I have since transitioned into web development. I currently work as a contractor under Cognizant.
                        </p>
                        <a href="#" className="btn-text">More &rarr;</a>
                    </div>
                    <div className="col-1-2">
                        <div className="composition">
                            <img src="https://i.pinimg.com/originals/9f/54/94/9f5494b957962b29210b6432dcfce23c.png" alt=" 1" className="composition__photo composition__photo--p1" />
                            <img src="https://i.pinimg.com/originals/9f/54/94/9f5494b957962b29210b6432dcfce23c.png" alt="2" className="composition__photo composition__photo--p2" />
                            <img src="https://i.pinimg.com/originals/9f/54/94/9f5494b957962b29210b6432dcfce23c.png" alt=" 3" className="composition__photo composition__photo--p3" />
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}
export default Main;