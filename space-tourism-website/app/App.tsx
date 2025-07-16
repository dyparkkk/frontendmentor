import './styles/app.css';
import Header from './components/header/Header';

function App() {
  return (
    <main>
      <div className="fullscreen-bg">
        <div className="flex flex-col  self-stretch">
          <Header />
          <div className="flex justify-center items-center flex-[1_0_0] p-[var(--spacing-1600) 0] self-stretch">
            <div className="flex "></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
