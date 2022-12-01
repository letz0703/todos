export default function Header({filters, onFilterChange}) {
	return (
		<header>
			<div className="flex">
				<ul>
					{filters.map((value, index) => (
						<li key={index}>
							<button onClick={() => onFilterChange(value)}>{value}</button>
						</li>
					))}
				</ul>
			</div>
		</header>
	)
export default function Header({filters, filter, onFilterChange}) {
  return (
    <header className={styles.header}>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
}
