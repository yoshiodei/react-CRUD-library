import React, { Component } from 'react';

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
                        name: "",
                        author: "",
                        genre: "Drama"
                     }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
        
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addBook(this.state);
        this.setState({
            name: "",
            author: "",
            genre: "Drama"
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Book Name</label>
                <input type="text" name="name" placeholder="Please enter book name" onChange={this.handleChange} value={this.state.name}/>
                <label>Author</label>
                <input type="text" name="author" placeholder="Please enter author name" onChange={this.handleChange} value={this.state.author} />
                <label>Genre</label>
                <select name="genre" onChange={this.handleChange} value={this.state.genre}>
                    <option value="Drama">Drama</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Comic">Comic</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;
