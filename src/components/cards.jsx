import React from 'react';

const Cards = (props) => {

    return (
        <section className="section-cards">
            <div className="u-center-text u-margin-bottom-medium">
                <h2 className="heading-secondary">
                    Contact Me
                </h2>
            </div>

            <div className="row">
                <div className="col-1-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--1">

                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--1">
                                    LinkedIn
                                </span>
                            </h4>
                            <p className="card__content card__content--1">
                                View my profile on LinkedIn
                            </p>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">

                        </div>
                    </div>
                </div>
                <div className="col-1-3">
                    <div className="card">
                        <div className="card__side card__side--front ">
                            <div className="card__picture card__picture--2">

                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--2">
                                    Github
                                </span>
                            </h4>
                            <p className="card__content card__content--2">
                                View my profile on Github
                            </p>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">

                        </div>
                    </div>
                </div>
                <div className="col-1-3">
                    <div className="card">
                        <div className="card__side card__side--front">
                            <div className="card__picture card__picture--3">
                            </div>
                            <h4 className="card__heading">
                                <span className="card__heading-span card__heading-span--3">
                                    Resume
                                </span>
                            </h4>
                            <p className="card__content card__content--3">
                                View my resume
                            </p>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cards