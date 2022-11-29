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
}
