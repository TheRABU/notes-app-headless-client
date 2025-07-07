const NoteCard = ({ card }) => {
  return (
    <>
      <div
        className="group card h-[89mm] bg-blue-900"
        rel="noreferrer noopener"
      >
        <div className="flex rounded-2xl h-[42mm] overflow-hidden">
          <img
            className="w-full sm:group-hover:scale-[120%] transition duration-800"
            src={card.imageUrl}
            alt="Smartwatch"
          />
        </div>
        <h1 className="relative text-xl font-bold mt-4 mb-2 ml-8">
          {card.title}
        </h1>
        <h2 className="relative text-base mx-6">
          It's got the time and notifications and stuff I guess.
        </h2>
        <div className="flex flex-row gap-2 ml-4 mt-4">
          <span className="badge badge-primary">Hardware</span>
          <span className="badge badge-secondary">Watch</span>
          <span className="badge bg-[var(--color-base)]">Fake</span>
        </div>
      </div>
    </>
  );
};

export default NoteCard;
