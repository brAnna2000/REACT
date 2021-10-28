import React from 'react';
import { connect } from 'react-redux';

import './styles.css';

class Preloader extends React.Component {

    get isLoading() {
        const { info } = this.props;
        return info.isFetching;
    }
    render() {
        return this.isLoading && <div className="preloader">Loading...</div>;
    }
}

const mapStateToProps = ({ info }) => ({
    info
});

export default connect(mapStateToProps)(Preloader);
