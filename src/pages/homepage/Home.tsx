import NoteCard from "../../components/NoteCard";
import cardData from "../../constants";
const Home = () => {
  return (
    <>
      <div className="h-screen bg-slate-700">
        <h2 className="text-5xl">Please Login and Add your notes</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cardData.map((card, idx) => (
            <NoteCard key={idx} card={card} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Home;
