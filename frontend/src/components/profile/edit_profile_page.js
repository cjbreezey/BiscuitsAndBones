import React from 'react';
import './edit_profile.css';

class EditProfilePage extends React.Component {
    constructor(props) {
        debugger 
        super(props);
        this.state = this.props.currentUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        // debugger
        this.props.updateUser(this.state)
    }

    update(field){
        return(e) => {this.setState({ [field]: e.currentTarget.value})};
    }

    render() {
        debugger 
        return (
            <div className="edit-form-container">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        {/* Upload Profile Picture */}
                        <label> Name
                            <input type="text" value={this.state.name} onChange={this.update('name')}/>
                        </label> 
                        <label> Bio
                            <input type="textarea" value={this.state.bio} onChange={this.update('bio')} />
                        </label> 
                        <label> Pet Name
                            <input type="text" value={this.state.pet_name} onChange={this.update('pet_name')} />
                        </label> 
                        <button>Submit</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default EditProfilePage