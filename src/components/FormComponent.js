import React from 'react';



class FormComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            val1:'',
            val2:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({
            [nam]:val
        });


    }
    handleSubmit = (event) => {
        event.preventDefault();

        alert(
            `{
                val1: ${this.state.val1},
                val2: ${this.state.val2}
            }            
            `
        );
    }

    render(){
        return(
            //className attribute gives access to css styling. Go to ../index.css and reference classes like this:
            // .form-component{
            //    color:"#666";   
            //}
            <form className="form-component" onSubmit={this.handleSubmit}>
            <input type="text" className="username-input" name="username" onChange={this.handleChange} placeholder="username"></input>
            <input type="text" className="password-input" name="password" onChange={this.handleChange} placeholder="password"></input>
            <button className="form-component-button" type="submit">Submit</button>
            </form>





        );
    }






}

export default FormComponent;