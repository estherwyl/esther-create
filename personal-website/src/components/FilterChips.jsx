export default function FilterChips({ chips, active, onSelect }) {
  return (
    <div className="filter-chips">
      {chips.map((chip) => (
        <button
          key={chip}
          className={`chip ${active === chip ? 'active' : ''}`}
          onClick={() => onSelect(chip)}
        >
          {chip}
        </button>
      ))}
    </div>
  );
}
