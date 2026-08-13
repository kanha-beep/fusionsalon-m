function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-brand-700">{description}</p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
