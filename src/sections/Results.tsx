const RESULTS = [
  {
    title: 'Better assessment consistency',
    detail: 'Every assessor applying the same standard, every time.',
  },
  {
    title: 'Stronger operator confidence',
    detail: 'Crews who know they can do the job — and can prove it.',
  },
  {
    title: 'Improved safety behaviours',
    detail: 'Competency that shows up in how people actually work.',
  },
  {
    title: 'Faster onboarding',
    detail: 'New starters verified and productive sooner.',
  },
  {
    title: 'Less confusion and rework',
    detail: 'Clear standards mean fewer do-overs and disputes.',
  },
  {
    title: 'Increased compliance clarity',
    detail: 'Evidence that stands up when the auditor asks.',
  },
]

export function Results() {
  return (
    <section className="section" id="results">
      <div className="container">
        <span className="kicker">Client results</span>
        <h2 className="section-title">What changes on site</h2>
        <div className="results-grid">
          {RESULTS.map((result) => (
            <div className="result" key={result.title}>
              <span className="checklist__dot" aria-hidden="true" />
              <div>
                <h3>{result.title}</h3>
                <p>{result.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
