import { Profile } from "./Profile/Profile";

import PropTypes from 'prop-types';

export const App = (user) => {
  return (
    <Profile
      //username={user.username}
      //tag={user.tag}
      // location={user.location}
      // avatar={user.avatar}
      // followers={user.stats.followers}
      // views={user.stats.views}
      // likes={user.stats.likes}
    />
  );
};

App.propTypes = {
  user: PropTypes.object.isRequired
};
