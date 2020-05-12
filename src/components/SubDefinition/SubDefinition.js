import React, { Fragment } from 'react';

const SubDefinition = ({ def }) => {
    const { type, definition, example, image_url, emoji } = def;
    return (
        <Fragment>
            <div className={`mt3 flex ${image_url ? 'tl' : 'tc'} justify-center items-center`}>
                <div className="w-70">
                    <h3 className="fw7">{`${type} ${emoji || ""}`}</h3>
                    <p className="f5"><i>{`'${definition}'`}</i></p>
                    <p className="f5 mt2 white-70" dangerouslySetInnerHTML={{ __html: example || "" }}></p>
                </div>
                {
                    image_url && <img
                        width="100"
                        height="100"
                        alt="word"
                        className="br3 ml1"
                        src={image_url}
                    />
                }
            </div>
            <hr className="bg-white dim mt1" />
        </Fragment>
    );
};

export default SubDefinition;