import {connect} from 'react-redux';
import {updateUser, fetchUser} from '../../actions/users_actions'
import EditProfilePage from './edit_profile_page'

const mapStateToProps = (state) => {
    return {
        loggedIn: state.session.isAuthenticated,
        currentUser: state.session.user,
        errors: state.session.errors
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (id) => dispatch(fetchUser(id)),
        updateUser: (user) => dispatch(updateUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage)