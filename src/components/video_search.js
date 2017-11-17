import React,{Component} from 'react';
import {Row, Col} from 'react-materialize';

class Search extends Component {
    state = {
        term: ``
    }

    render() {
        return (
            <Row>
                <Col>
                    <input
                        value={this.state.term}
                        onChange={e => this.inputChanged(e.target.value)}
                        placeholder="search..."
                    />
                </Col>
            </Row>
        )
    }
    inputChanged = (eTargetVal) => {
        this.setState({term:eTargetVal});
        this.props.propForSearch(eTargetVal);
    }
}

export default Search;