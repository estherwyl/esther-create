import './WritingCard.css';

export default function WritingCard({ piece }) {
  const { title, description, platform, status, date, readTime, image, url } = piece;
  const isComingSoon = status === 'coming-soon';

  const inner = (
    <article className={`writing-row ${isComingSoon ? 'writing-row--muted' : ''}`}>
      {/* ── Left: text ── */}
      <div className="writing-row__text">
        {/* Meta: date + read time */}
        <div className="writing-row__meta">
          {date && <span>{date}</span>}
          {date && readTime && <span className="writing-row__dot">·</span>}
          {readTime && <span>{readTime}</span>}
          {isComingSoon && (
            <span className="writing-row__coming-soon">Coming soon</span>
          )}
        </div>

        {/* Title */}
        <h3 className="writing-row__title">{title}</h3>

        {/* Excerpt */}
        <p className="writing-row__desc">{description}</p>
      </div>

      {/* ── Right: thumbnail ── */}
      <div className="writing-row__thumb">
        {image
          ? <img src={image} alt={title} />
          : <div className="writing-row__thumb-placeholder" />
        }
      </div>
    </article>
  );

  if (url && !isComingSoon) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className="writing-row-link">
        {inner}
      </a>
    );
  }

  return inner;
}
