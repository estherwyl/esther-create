import { englishWriting } from '../data/writing';
import WritingCard from '../components/WritingCard';
import './Writing.css';

export default function Writing() {
  return (
    <div className="page">
      <div className="container">

        <header className="writing-hero">
          <h1 className="writing-hero__title">Writing</h1>
          <p className="writing-hero__sub">
            Thoughts on AI, product building, creativity, and life in transition.
          </p>
        </header>

        {/* ── English (Substack) ── */}
        <section className="writing-section">
          <div className="writing-list">
            {[...englishWriting]
              .sort((a, b) => {
                if (!a.date) return 1;
                if (!b.date) return -1;
                return new Date(b.date) - new Date(a.date);
              })
              .map((piece) => (
                <WritingCard key={piece.id} piece={piece} />
              ))}
          </div>
        </section>

      </div>
    </div>
  );
}
