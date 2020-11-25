import { connect } from 'react-redux';
import { updateEvent } from '../../actions/event_actions';
import EditEvent from './edit_event'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        event: state.event
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateEvent: event => dispatch(updateEvent(event))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEvent));