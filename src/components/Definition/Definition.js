import React, { Fragment } from 'react';
import SubDefinition from '../SubDefinition/SubDefinition';

const Definition = ({ result }) => {
    if (result === 'error') {
        return (
            <div className="pa3">
                <h2 className="white">sorry, system can't found your words</h2>
            </div>
        );
    } else {
        const { word, pronunciation, definitions } = result;
        return (
            <div className="mr2 br3 ml-auto mr-auto mw7 mt2 white">
                {
                    result === "error" ? <h2>sorry, system can't found your words</h2>
                        : <Fragment>
                            <h1 className="mb0 mt1">{word}</h1>
                            <p>{pronunciation ? `\\${pronunciation}\\` : ""}</p>
                            <hr className="bg-white dim mt1" />
                            {definitions ? definitions.map((def, i) => <SubDefinition def={def} key={i} />) : ""}
                        </Fragment>
                }
            </div>
        );
    }
};

export default Definition;