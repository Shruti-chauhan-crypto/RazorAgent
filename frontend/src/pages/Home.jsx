import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {
  return (
    <main className="bg-(--bg) text-(--text) min-h-screen">
      <Hero />
      <Features />
    </main>
  );
};

export default Home;