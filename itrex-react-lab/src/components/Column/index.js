import React from 'react';
import { connect } from 'react-redux';
import {
    sortAscEmailColumn, sortAscStateColumn, sortAscPhoneColumn, sortAscFirstNameColumn, sortAscLastNameColumn,
    sortDescEmailColumn, sortDescStateColumn, sortDescPhoneColumn, sortDescFirstNameColumn, sortDescLastNameColumn,
} from '../../ducks/sort'
import { titles } from '../DataList/config';
import { Grid, Box, IconButton } from '@material-ui/core';

let text = {
    idText: '', 
    firstNameText: '', 
    lastNameText: '', 
    descriptionText: '', 
    streetAddressText: '', 
    cityText: '', 
    stateText: '', 
    zipText: ''
};
const Column = (props) => {
    const column_sort = () => {
        switch (props.title) {
            case titles.email:
                return [props.sortAscEmailColumn, props.sortDescEmailColumn]
            case titles.state:
                return [props.sortAscStateColumn, props.sortDescStateColumn]
            case titles.phone:
                return [props.sortAscPhoneColumn, props.sortDescPhoneColumn]
            case titles.firstName:
                return [props.sortAscFirstNameColumn, props.sortDescFirstNameColumn]
            case titles.lastName:
                return [props.sortAscLastNameColumn, props.sortDescLastNameColumn]
            default:
                break;
        }
    }
    
    const display = (i) => {
        const idText = props.info.data[i].id;
        const firstNameText = props.info.data[i].firstName;
        const lastNameText = props.info.data[i].lastName;
        const descriptionText = props.info.data[i].description;
        const streetAddressText = props.info.data[i].adress.streetAddress;
        const cityText = props.info.data[i].adress.city;
        const stateText = props.info.data[i].adress.state;
        const zipText = props.info.data[i].adress.zip;

        let textDublicate = {
            idText: idText, 
            firstNameText: firstNameText, 
            lastNameText: lastNameText, 
            descriptionText: descriptionText, 
            streetAddressText: streetAddressText, 
            cityText: cityText, 
            stateText: stateText, 
            zipText: zipText
        };
        for (let key in text) {
            text[key] = textDublicate[key];
        }

    }
console.log(props)
    return (
    //     <table style={{justify:"center", border: '1px', borderColor:'black', width:'100%', height:'40px', 
    //     display:'flex', justifyContent:'center', alignItems:'center'}}>
    //     <thead>
    //         <tr>
    //             {props.title !== 'id' ?
    //                 <td style={{margin:'0  5px 0 10px', display:'flex'}}>{props.title}
    //                 <button style={{size:'small', fontSize: '10px', backgroundColor: 'white', borderWidth: '0' }} onClick={column_sort()[0]}><i></i>⋀</button>
    //                 <button style={{size:'small', fontSize: '10px', backgroundColor: 'white', borderWidth: '0' }} onClick={column_sort()[1]}><i></i>⋁</button>
    //                 </td>
    //                 : <td>{props.title}</td>
    //             }
    //         </tr>
    //     </thead>
    //     <tbody>
    //             {props.data.map((x, i) =>
    //                 <tr style={{border:'1px', width:'100%', height:'35px', padding:'5px 0', display:'flex', 
    //                 justifyContent:'center', alignItems:'center', textAlign:'center'}} key={props.keys[i]} onClick={function() {display(i)}}>
    //                     <td>{x}</td>
    //                 </tr>)}
    //         {for(key in prop){

    //         }}
    //     </tbody>
    // </table>

        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Box
                border={1}
                width='100%'
                height='40px'
                display='flex'
                justifyContent='center'
                alignItems='center'>
                <Box
                    component='span'>
                    {props.title}
                </Box>
                {props.title !== 'id' ?
                    <Box
                        margin='0  5px 0 10px'
                        display='flex'
                        flexDirection='column'>
                        <IconButton
                            size="small"
                            style={{ fontSize: '10px' }}
                            onClick={column_sort()[0]}>
                            ⋀
                            </IconButton>
                        <IconButton
                            size="small"
                            style={{ fontSize: '10px' }}
                            onClick={column_sort()[1]}>
                            ⋁
                            </IconButton>
                    </Box>
                    : ''
                }
            </Box>
            {
                props.data.map((x, i) =>
                    <Box
                        border={1}
                        width='100%'
                        height='35px'
                        padding='5px 0'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        textAlign='center'
                        key={props.keys[i]}
                        onClick={function() {display(i)}}>
                        {x}
                    </Box>)
            }
        </Grid>
    )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({

    sortAscEmailColumn: () => dispatch(sortAscEmailColumn()),
    sortAscStateColumn: () => dispatch(sortAscStateColumn()),
    sortAscPhoneColumn: () => dispatch(sortAscPhoneColumn()),
    sortAscFirstNameColumn: () => dispatch(sortAscFirstNameColumn()),
    sortAscLastNameColumn: () => dispatch(sortAscLastNameColumn()),

    sortDescEmailColumn: () => dispatch(sortDescEmailColumn()),
    sortDescStateColumn: () => dispatch(sortDescStateColumn()),
    sortDescPhoneColumn: () => dispatch(sortDescPhoneColumn()),
    sortDescFirstNameColumn: () => dispatch(sortDescFirstNameColumn()),
    sortDescLastNameColumn: () => dispatch(sortDescLastNameColumn())

});


export {text};
export default connect(mapStateToProps, mapDispatchToProps)(Column);