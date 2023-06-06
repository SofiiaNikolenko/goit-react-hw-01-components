import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span className={css.status}>{ isOnline }</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{ name }</p>
        </li>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

// "avatar": "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
// "name": "Mango",
// "isOnline": true,
// "id": 1812