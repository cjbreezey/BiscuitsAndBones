import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
import EventsContainer from './events/events_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import EventCreateContainer from './events/event_create_container';
import EditProfileContainer from './profile/edit_profile_container';
import EventShowContainer from './events/event_show_container';
import Modal from './modal/modal';
import PastEventShowContainer from './events/past_event_show_container';


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/users/:id/edit" component={EditProfileContainer} />
      <ProtectedRoute exact path="/pastevents/:event_id" component={PastEventShowContainer} />
      <ProtectedRoute exact path="/events/:event_id" component={EventShowContainer} />
      <ProtectedRoute exact path="/profile/:user_id" component={ProfileContainer} />
      <ProtectedRoute exact path="/events" component={EventsContainer} />
      <ProtectedRoute exact path="/new_event" component={EventCreateContainer} />
    </Switch>
  </div>
);

export default App;