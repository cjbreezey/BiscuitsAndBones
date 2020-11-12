import {connect} from 'react-redux';
import {fetchUser, updatePicture} from '../../actions/users_actions'
import EditProfilePage from './edit_profile_page'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    // debugger
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
        updatePicture: (data) => dispatch(updatePicture(data))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProfilePage))