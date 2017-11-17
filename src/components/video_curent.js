import React from 'react';
import { Collection, CollectionItem } from 'react-materialize';
import '../all.css';

const CurentVideo = ({video, selectV}) => {
    const thumbnail = video.snippet.thumbnails.default.url;
    const title = video.snippet.channelTitle;
    const description = video.snippet.description;
    return <Collection className="z-depth-3">
        <CollectionItem href="#!" className="blue-grey darken-1" onClick={() => selectV(video)}>
            <img className="thumb responsive-img" src={thumbnail} alt=""/>
            <h5>{title}</h5>
            <p >{description}</p>
        </CollectionItem>
    </Collection>
};
export default CurentVideo;
