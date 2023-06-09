import css from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ title, files }) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>

            <ul className={css.statList}>
                {files.map(file => (
                    <li key={file.id} className={css.item} style={{ backgroundColor: getRandomHexColor() }}>
                        <span className={css.label}>{file.label}</span>
                        <span className={css.percentage}>{file.percentage} %</span>
                    </li>
                ))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    files: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }),
    )
}