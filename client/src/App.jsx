import { Footer, Navbar, Services, Transactions, Welcome } from './components';
import { AnimatedSection } from './components/AnimatedSection';
import LiveTokenChart from './components/LiveTokenChart';
import { GlassCard } from './components/glass-card';

function App() {
  return (
    <div className='main-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Services />

      <div className='gradient-bg-transactions 2xl:px-20'>
        <AnimatedSection>
          <section>
            <h2 className='text-3xl md:text-4xl font-bold mb-10 text-center text-white'>
              Live Market Chart
            </h2>
            <GlassCard className='p-4'>
              <LiveTokenChart />
            </GlassCard>
          </section>
        </AnimatedSection>
        <Transactions />
      </div>
      <Footer />
    </div>
  );
}

export default App;
