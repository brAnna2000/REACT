import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../redux/actions';
import Column from '../Column'
import Menu from '../Menu';
import { Sort } from '../Sort'
import { titles } from './config';

class DataList extends React.Component {

    componentDidMount() {
        this.props.getDataAction();
    }

    render() {

        const data = Boolean(this.props.find.find_data.length) ?
            Sort(this.props, this.props.find.find_data.slice(this.props.pagination.indexOfFirst, this.props.pagination.indexOfLast)) :
            Sort(this.props, this.props.info.data.slice(this.props.pagination.indexOfFirst, this.props.pagination.indexOfLast))
        return (
            <div style={{padding:'5px', display: 'flex'}}>
                <div style={{border:'1px', display:'flex', alignItems:'baseline', minWidth:'690px'}}>
                    <Column title={titles.id} data={data.map(x => x.id)} keys={data.map(x => x.id)} />
                    <Column title={titles.firstName} data={data.map(x => x.firstName)} keys={data.map(x => x.id)} />
                    <Column title={titles.lastName} data={data.map(x => x.lastName)} keys={data.map(x => x.id)} />
                    <Column title={titles.email} data={data.map(x => x.email)} keys={data.map(x => x.id)} />
                    <Column title={titles.phone} data={data.map(x => x.phone)} keys={data.map(x => x.id)} />
                    <Column title={titles.state} data={data.map(x => x.adress.state)} keys={data.map(x => x.id)} />
                    
                </div>
                <Menu />
            </div>
            
        )
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    getDataAction: () => dispatch(getData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
