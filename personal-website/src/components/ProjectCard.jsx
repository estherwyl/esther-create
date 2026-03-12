// GitHub logo
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// Video / play icon for Demo
function VideoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

// Person icon for team
function PersonIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const { title, description, team, demo, github } = project;

  return (
    <article className="card project-card">
      {/* Title */}
      <h3 className="project-card__title">{title}</h3>

      {/* Team */}
      {team && team.length > 0 && (
        <div className="project-card__team">
          <PersonIcon />
          <span>{team.join(', ')}</span>
        </div>
      )}

      {/* Description */}
      <p className="project-card__desc">{description}</p>

      {/* Links: always shown — active when URL set, muted when not */}
      <div className="card-links">
        {demo ? (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="card-link card-link--demo">
            <VideoIcon /> Demo
          </a>
        ) : (
          <span className="card-link card-link--demo card-link--inactive">
            <VideoIcon /> Demo
          </span>
        )}

        {github ? (
          <a href={github} target="_blank" rel="noopener noreferrer" className="card-link card-link--github">
            <GitHubIcon /> GitHub
          </a>
        ) : (
          <span className="card-link card-link--github card-link--inactive">
            <GitHubIcon /> GitHub
          </span>
        )}
      </div>
    </article>
  );
}
