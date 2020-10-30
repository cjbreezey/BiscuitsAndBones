import { connect } from 'react-redux';
import { updateEvent } from '../../actions/event_actions';
import EditEvent from './edit_event'

const mapStateToProps = (state) => {
    debugger
    return {
        currentUser: state.session.user,
        event: this.props.event
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateEvent: event => dispatch(updateEvent(event))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);