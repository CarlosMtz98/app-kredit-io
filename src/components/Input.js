import React from 'react';

class Input extends React.Component {
    state = { term: '' }

    render() {
        return (
                <div className="field">
                    <label>Image Serach</label>
                    <input 
                        type="text" 
                        value={ this.state.term }
                        onChange={(e) => this.setState({ term: e.target.value })} 
                        placeholder="Search for an image.."/>
                </div>

        );
    }
}

export default Input;