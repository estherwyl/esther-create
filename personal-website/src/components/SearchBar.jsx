export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      {/* Search icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="text"
        placeholder="Search projects by name, tag, or description..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search projects"
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}
