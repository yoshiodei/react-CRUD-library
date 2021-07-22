import React, { Component } from 'react';

class EditForm extends Component {

    constructor(props){
        super(props);

        this.state = {
                        name: this.props.book.name,
                        author: this.props.book.author,
                        genre: this.props.book.genre,
                        id: this.props.book.id
                     }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.editBook(this.state, this.props.book.id);
        this.setState({
            name: "",
            author: "",
            genre: "Drama"
        }
        );
        this.props.handleClose();
    }

    render() {
        return (
            <form className="edit" onSubmit={this.handleSubmit}>
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

export default EditForm;

