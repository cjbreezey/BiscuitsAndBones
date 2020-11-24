import {connect} from 'react-redux';
import {fetchUser, updatePicture, updateUser} from '../../actions/users_actions'
import EditProfilePage from './edit_profile_page'
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
    const profileInfo = ownProps.match.params.id
    const profileUser = state.users[profileInfo] 
    let defaultProfile = {
        name: "",
        pet_name: "",
        bio: "",
        profilePicture: null,
        photoUrl: "",
    }

    let profile = profileUser || defaultProfile
    debugger 
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        errors: state.session.errors,
        profile,
        profileInfo,
        profileUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchUser: (id) => dispatch(fetchUser(id)),
      updatePicture: (data) => dispatch(updatePicture(data)),
      updateUser: (data) => dispatch(updateUser(data)),
      closeModal: (modal) => dispatch(closeModal(modal))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfilePage))