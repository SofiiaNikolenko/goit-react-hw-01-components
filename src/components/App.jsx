import { Profile } from "./Profile/Profile";
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList'

import User from './data/user.json';
import Data from './data/data.json';
import Friends from './data/friends.json';

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
      <FriendList
        friends={Friends}
      />
    </>
  );
};