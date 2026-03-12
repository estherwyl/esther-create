import './Nav.css';

const tabs = [
  { id: 'projects', label: 'Projects' },
  { id: 'writing',  label: 'Writing'  },
  { id: 'about',    label: 'About'    },
];

export default function Nav({ activePage, setActivePage }) {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        {/* Site identity */}
        <button
          className="nav-wordmark"
          onClick={() => setActivePage('projects')}
        >
          Esther Wang
        </button>

        {/* Tab links */}
        <ul className="nav-tabs">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                className={`nav-tab ${activePage === tab.id ? 'active' : ''}`}
                onClick={() => setActivePage(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
