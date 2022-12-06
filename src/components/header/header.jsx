import styles from './header.module.css';

export default function Header({filters, onFilterChange}) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={styles.filter}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
