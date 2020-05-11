import React from 'react';

const SubDefinition = () => {
    //const { type, definition } = def;
    return (
        <div className="mt3 flex tl justify-around">
            <div>
                <h4>VERB</h4>
                <p className="f5">"mark with a badge or other distinguishing emblem."</p>
                <p className="f5 mt2">example : <br />the badge of the Cheshire Regiment</p>
            </div>
            <img
                width="150"
                height="150"
                alt="word"
                className="ba br3"
                src="https://media.owlbot.info/dictionary/images/uuy.jpg.400x400_q85_box-0,0,225,225_crop_detail.jpg"
            />
        </div>
    );
};

export default SubDefinition;