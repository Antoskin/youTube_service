import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Search from './components/video_search';
import List from './components/video_list';
import View from './components/video_view';

import {Row} from 'react-materialize';
import YuTubeSearch from 'youtube-api-search';

const You_key = `AIzaSyCSksvUzO0c1REt9cT57rRnJcIycMkUcXQ`;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            curentVideo: null,
        };
        this.updatePlayList('success');
    }

    updatePlayList = (term) =>  {
        YuTubeSearch({key:You_key, term:term}, (data) => {
            this.setState({videos: data, curentVideo:data[0]});
        })
    };

    render() {
        console.log(this.state.curentVideo);
        return <Row>
            <Search propForSearch={ item => this.updatePlayList(item) } />
            <View curentVideo={this.state.curentVideo} />
            <List
                selectV={item => this.setState({curentVideo:item})}
                videos={this.state.videos} />
        </Row>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

