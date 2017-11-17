import React from 'react';
import { Col, ProgressBar  } from 'react-materialize';

 const View = ({curentVideo}) => {
     if(!curentVideo) return <Col s={12}><ProgressBar/></Col>
     const VI = curentVideo.id.videoId;
     const vidos = `http://www.youtube.com/embed/${VI}`;
    return <Col l={8} s={12}  className="container-frame" >
                <div className="embed-responsive embed-responsive-16by9 z-depth-3">
                    <iframe src={vidos} frameBorder="0" className="embed-responsive-item"></iframe>
                </div>
                <p className="flow-text">{curentVideo.snippet.channelTitle}</p>
                <p>{curentVideo.snippet.description}</p>
            </Col>
};

export default View;