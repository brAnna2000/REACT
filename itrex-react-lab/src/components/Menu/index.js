import React from 'react';
import { connect } from 'react-redux';
import { Box, TextField } from '@material-ui/core';
import { findData } from '../../ducks/finder';
import Pagination from '../Pagination'
import { text } from '../Column';
console.log(text);
class Menu extends React.Component {
    
    render() {

        
        return <>
            <div style = {{display:'flex', flexDirection:'column', padding:'10px', borderLeft:'1px solid black'}}>
                <form>
                    {(!Boolean(this.props.find.find_data.length) && this.props.find.find_flag) ?
                       <div>
                          <input
                            placeholder="Ошибка"
                            onChange={this.props.findDataAction}
                            >
                            
                        </input>
                        <p style= {{color:'red'}}>Ничего не найдено, показаны все результаты</p> 
                       </div>
                       
                        :
                        <input
                            placeholder="Поиск"
                            onChange={this.props.findDataAction}></input>
                    }
                </form>
                <Pagination />
                {
                    (text.idText != '') ?
                    <textarea value={text.idText} onChange={this.props.changeTextArea}></textarea>
                    :
                    <textarea></textarea>
                }
                
            </div>
        </>
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    findDataAction: (e) => dispatch(findData(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
