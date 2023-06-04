import css from './Profile.module.css';
import PropTypes from 'prop-types';

const user = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308
    }
}

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    // поставити картинку за замовтуванням
    // видалити user з значення тегив
    // додати стилізацію

    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                    src={user.avatar}
                    alt={user.username}
                    className={css.avatar}
                />
                <p className={css.name}>{user.username}</p>
                <p className={css.tag}>@{user.tag}</p>
                <p className={css.location}>{user.location}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{user.stats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{user.stats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};