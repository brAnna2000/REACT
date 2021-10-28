import { connect } from 'react-redux'
import { leftPage, rightPage, firstPage, lastPage } from '../../ducks/pagination';

const Pagination = (props) => {
    const data = Boolean(props.find.find_data.length) ? props.find.find_data : props.info.data
    const lastPage = Math.ceil(data.length / props.pagination.pageLimit)

    return (
        <div style={{marginTop:'5px', textAlign:'center'}}>
            <button style={{size:'small', backgroundColor: 'white', borderWidth: '0' }} onClick={props.leftPage} disabled={props.pagination.currentPage === 1 ? true : false}><i></i>≪</button>
            <button style={{size:'small', backgroundColor: 'white', borderWidth: '0'}} onClick={props.firstPage}>{1}</button>
            {
                props.pagination.currentPage === 1 || props.pagination.currentPage === lastPage ||
                <button style={{size:'small', backgroundColor: 'white', borderWidth: '0'}} disabled>{props.pagination.currentPage}</button>
            }
            {
                lastPage === 1 ||
                <button style={{size:'small', backgroundColor: 'white', borderWidth: '0'}} onClick={props.lastPage}>{lastPage}</button>
            }
            <button style={{size:'small', backgroundColor: 'white', borderWidth: '0'}} onClick={props.rightPage} disabled={props.pagination.currentPage === lastPage ? true : false}><i></i>≫</button>
        </div>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    leftPage: () => dispatch(leftPage()),
    rightPage: () => dispatch(rightPage()),
    firstPage: () => dispatch(firstPage()),
    lastPage: () => dispatch(lastPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);