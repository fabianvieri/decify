import React, { Fragment } from 'react';
import './SubDefinition.scss';

const SubDefinition = ({ def }) => {
    const { type, definition, example, image_url, emoji } = def;
    return (
        <Fragment>
            <div className={`mt3 ${image_url ? 'tl' : 'tc'} justify-center items-center sub__def`}>
                <div className="w-70 sub__detail">
                    <h3 className="fw7">{`${type} ${emoji || ""}`}</h3>
                    <p className="f5"><i>{`'${definition}'`}</i></p>
                    <p className="f5 mt2 white-70" dangerouslySetInnerHTML={{ __html: example || "" }}></p>
                </div>
                {
                    image_url && <img
                        alt="word"
                        className="br3 ml1 sub__img"
                        src={image_url}
                    />
                }
            </div>
            <hr className="bg-white dim mt1" />
        </Fragment>
    );
};


export default SubDefinition;