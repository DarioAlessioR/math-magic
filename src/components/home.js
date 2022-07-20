const Home = () => {
  const par = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est tortor.'
   + ' Pellentesque justo eros, fermentum tempus nisi sed, malesuada scelerisque ligula. Nulla et'
   + ' vulputate nulla. Integer viverra ligula sapien. Donec non eros at justo interdum tempus.';

  return (
    <section className="Home">
      <h1 className="hometitle">Welcome to the magic of Maths!!!</h1>
      <p className="text">{par}</p>
      <p className="text">{par}</p>
    </section>
  );
};

export default Home;
