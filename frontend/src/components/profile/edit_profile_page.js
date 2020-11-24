import React from 'react';
import './edit_profile.css';

class EditProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   // debugger
  //   if (this.props.currentUser.id !== prevProps.currentUser.id) {
  //     this.props.fetchUser(this.props.currentUser.id);
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault();
    // let user = {
    //     name: this.state.name,
    //     bio: this.state.bio,
    //     pet_name: this.state.pet_name
    // };
    let profileId = this.props.currentUser.id;
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("image", this.state.profilePicture);
    formData.append("bio", this.state.bio);
    formData.append("pet_name", this.state.pet_name);
    formData.append("id", profileId);
    // this.props.updatePicture(formData)
    if (formData.get("image") !== "undefined") {
      this.props.updatePicture(formData).then(() => {
        this.props.updateUser(this.state, this.routeToProfile());
        this.props.closeModal();
      });
    } else {
      this.props.updateUser(this.state);
      this.props.closeModal();
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  routeToProfile() {
    this.props.history.push(`/profile/${this.props.currentUser.id}`);
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ profilePicture: file, photoUrl: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div className="edit-form-container">
        <div>
          <form className="edit-form-wrap" onSubmit={this.handleSubmit}>
            <label>
              Picture
              <input className="input-file" type="file" onChange={this.handleFile} />
            </label>
            <label>
              Name
              <input
                className="edit-field"
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
              />
            </label>
            <label>
              Bio
              <input
                className="edit-field"
                type="textarea"
                value={this.state.bio}
                onChange={this.update("bio")}
              />
            </label>
            <label>
              Pet Name
              <input
                className="edit-field"
                type="text"
                value={this.state.pet_name}
                onChange={this.update("pet_name")}
              />
            </label>
            <label>
            <button onClick={this.props.handleSubmit}>Submit</button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default EditProfilePage