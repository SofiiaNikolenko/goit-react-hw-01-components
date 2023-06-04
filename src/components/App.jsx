import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';

import User from './data/user.json';
import Data from './data/data.json';

export const App = () => {
  const { username, tag, location, avatar, stats } = User;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
      <Statistics
        title="Upload stats"
        files={Data}
      />
    </>
  );
};