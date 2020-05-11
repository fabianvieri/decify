import React from 'react';
import './Definition.scss';
import SubDefinition from '../SubDefinition/SubDefinition';

const Definition = ({ result }) => {
    const { word, pronunciation } = result;
    return (
        <div className="def-text white ml-auto mr-auto tc pa2 mw7">
            <div className="ba pa2 mr2 br3">
                <h1 className="mb0 mt1">{word}</h1>
                <p>{pronunciation ? `\\${pronunciation}\\` : ""}</p>
                <SubDefinition />
            </div>
        </div>
    );
};

export default Definition;