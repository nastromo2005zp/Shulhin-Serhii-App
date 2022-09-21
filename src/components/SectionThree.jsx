import React from 'react';



const SectionThree = (props) => {
    //debugger;

    return (
        <section>
            <div className="row">
                <div className="col-6 col-sm-6 d-flex justify-content-center">
                    <div className={props.activityObj.classTitle}>
                        <p>{props.activityObj.title}</p>
                        <h4>{props.activityObj.category}</h4>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SectionThree;