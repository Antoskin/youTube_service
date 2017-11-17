import React from 'react';
import CurentVideo from './video_curent';
import { Col } from 'react-materialize';


const List = ({videos, selectV}) => {
    if(!videos) return <div>waiting...</div>;
    const CurVideo = videos.map( (video, id) =>
             <CurentVideo selectV={selectV} key={id} video={video}  />
        );
    return <Col l={4} m={12} className="video_list">
        {CurVideo}
    </Col>

};

export default List;