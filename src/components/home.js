const Home = () => {
  const par1 = 'This app has been created as part of an academic project to demonstrate the use of React.'
  + ' By clicking on the Calculator link you can access a simple calculator that can perform basic arithmetic operations.';
  const par2 = 'Finally, by clicking on the Quote link, you will read a simple but powerful quote about mathematics from one of the'
  + ' most famous saviors of the world, Galileo Galilei.';
  const par3 = 'Thank you for visiting my app and enjoy the magic of maths!';
  const par4 = 'Dario Alessio';

  return (
    <section className="Home">
      <h1 className="hometitle">Welcome to the magic of Maths!!!</h1>
      <p className="text">{par1}</p>
      <br />
      <p className="text">{par2}</p>
      <br />
      <p className="text">{par3}</p>
      <br />
      <br />
      <p className="text-sign">{par4}</p>
    </section>
  );
};

export default Home;
