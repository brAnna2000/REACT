import React, { Component } from 'react';
import Post from "./Post";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            tag: '',
            data:[],
            note: [],
            valueChange: '',
            json: null,
            change: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.noteChange = this.noteChange.bind(this);
        this.searchTag = this.searchTag.bind(this);
    }
    handleActive(item){
        this.setState({ value: item});
    }
    noteChange(e){
        this.setState({
            tag: e.target.value,
        });
    }
    searchTag(e){
        e.preventDefault();
        let data = this.state.data;
        let note = this.state.note;
        if(note.indexOf(this.state.tag) !==-1){
            let indexOfStevie = data.findIndex(i => i.indexOf(this.state.tag) !==-1);
            data.unshift(data[indexOfStevie]);
            data.splice(indexOfStevie+1,1);
            this.setState({
                data:data
            })
        }
        else{
            alert('тег не найден')
        }
        
    }
    handleChange(e){
       this.setState({
            value: e.target.value,
        }); 
    }
    handleChangeNotes = (index, e) =>{
        this.setState({
            valueChange: e.target.value,
        });    
    }

    handleSubmit(e) {
        e.preventDefault();
        let note = this.state.note;
        let dataCh = this.state.data.concat(this.state.value);
        let positiveArr = [];
        let a = [];
        let myJson;

        positiveArr = dataCh.filter(i => i.indexOf('#') !== -1);
        positiveArr.forEach(i => a.push(i.slice(i.indexOf('#'),i.length)));
    
        if (note.length !== 0){
            myJson = {
                data:dataCh,
                note:a,
                change:Array(dataCh.length).fill(false)
            };
        }
        else{
            myJson = {
                data:dataCh,
                note:a,
                change:Array(dataCh.length).fill(false)
            };
        }
        this.setState({
            data: this.state.data.concat(this.state.value),
            note: myJson.note,
            change: myJson.change,
            json: JSON.stringify(myJson)
        });
    }
    delPost = (index)=>{
        let arr = this.state.data;
        arr.splice(index,1);

        this.setState({ data: arr});
        let myJson = {
            data:arr,
            change:Array(arr.length).fill(false)
        };
        this.setState({json: JSON.stringify(myJson)})
    };
    delHashtag = (index)=>{
        let tag = this.state.note;
        let val = this.state.value;
        let del = tag.splice(index,1);
        let clearTag = val.substring(0, val.length - 1).replace(del,'');
        this.setState({
        note: tag,
        value: clearTag,
        });
    };
    edit = (index)=>{
        
        let change = this.state.change
        let val = this.state.valueChange;
        let arr = this.state.data;
        
         
        if(change[index] === true){
            let positiveArr = '';
            let a = '';
            positiveArr = val.indexOf('#');
            if (positiveArr !== -1){
                a = val.slice(positiveArr,val.length)
                
                this.setState({note: this.state.note.splice(index,1,a)});
                console.log(this.state.note);
            }
            else{
                a = '';
            }
            
            let myJson ={
                data: this.state.data.splice(index,1,val),
                change: this.state.change.fill(false),
                note: this.state.note
            }
            this.setState({json: JSON.stringify(myJson)})
            this.setState({valueChange: ''});
        }
        else{
            change.fill(true, index, index+1)    
            arr.splice(index,1,val);
            this.setState({data: this.state.data});
            this.setState({change: change});
            let myJson ={
                data: this.state.data,
                change: this.state.change,
                note: this.state.note 
            }
            this.setState({json: JSON.stringify(myJson)})
        }
        
    };
    render() {
        return (
            <div>
               <Post
                   value={this.state.value}
                   valueChange={this.state.valueChange}
                   change={this.state.change}
                   data={this.state.data}
                   note={this.state.note}
                   tag={this.state.tag}
                   handleChange={this.handleChange}
                   handleChangeNotes={this.handleChangeNotes}
                   delHashtag={this.delHashtag}
                   delPost={this.delPost}
                   edit={this.edit}
                   handleSubmit={this.handleSubmit}
                   handleActive={this.handleActive}
                   searchTag={this.searchTag}
                   noteChange={this.noteChange}
               />
            </div>
        );
    }
}
export default Form;
