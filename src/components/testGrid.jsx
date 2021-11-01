import React from 'react';
import '../layout/_testGrid.scss';
import '../abstracts/_variables.scss';

const TestGrid = (props) => {

    return (
        <section className="grid-test">
            <div className="row">
                <div className="col-1-2">
                    Col 1 of 2
                </div>
                <div className="col-1-2">
                    Col 1 of 2
                </div>
            </div>

            <div className="row">
                <div className="col-1-3">
                    Col 1 of 3
                </div>
                <div className="col-1-3">
                    Col 1 of 3
                </div>
                <div className="col-1-3">
                    Col 1 of 3
                </div>
            </div>

            <div className="row">
                <div className="col-1-3">
                    Col 1 of 3
                </div>
                <div className="col-2-3">
                    Col 2 of 3
                </div>

            </div>
        </section>
    )
}

export default TestGrid;