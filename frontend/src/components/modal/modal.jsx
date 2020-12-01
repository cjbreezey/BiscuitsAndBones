import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditProfileContainer from '../profile/edit_profile_container';
import ReviewCreateContainer from '../reviews/reviews_create_container';
import './modal.css';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'editprofile':
      component = <EditProfileContainer />;
      break;
    case 'review':
      component = <ReviewCreateContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={event => event.stopPropagation()}>
        <div className="modal-content">
            <div className="close-x">
          <span className="close" onClick={closeModal}>&times;</span>
            </div>
          { component }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
