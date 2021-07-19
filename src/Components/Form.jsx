import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <label>Book Name</label>
                <input type="text" name="name" placeholder="Please enter book name" />
                <label>Author</label>
                <input type="text" name="author" placeholder="Please enter author name" />
                <label>Genre</label>
                <select name="genre">
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
