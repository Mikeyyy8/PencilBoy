import PencilBoys from "../components/PencilBoys";

const About = () => {
    const links = ['panache', 'Cupid', 'Soore', 'Hish']

    const linkElements = links.map((link) => <PencilBoys name={link} descr={link} />)

  return (
    <section className="h-full place-items-center m-5 lg:mx-15 space-y-5">
      <h1 className="text-5xl uppercase tracking-tight">These are the pencil boys</h1>

    <div className="grid grid-rows-4 lg:grid-rows-1 lg:grid-cols-4 gap-5 w-full">
        {linkElements}
        This is where the bento grid will be
    </div>
    </section>
  );
};

export default About;
