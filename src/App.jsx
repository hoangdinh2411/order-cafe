import {useState, lazy, Suspense, useEffect} from 'react';
import bagSVG from './assets/graphics/drone.svg';
import {Routes, Route, Navigate} from 'react-router-dom';
import Loading from './components/Loading';

const Landing = lazy(() => import('./pages/Landing'));
const Menu = lazy(() => import('./pages/Menu'));
import ComingSoon from './pages/ComingSoon';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    document.addEventListener(
      'resize',
      handleWindowSizeChange
    );

    return () => {
      document.removeEventListener(
        'resize',
        handleWindowSizeChange
      );
    };
  }, []);

  if (width > 789)
    return (
      <div style={{height: '100vh'}}>
        <ComingSoon />;
      </div>
    );

  return (
    <div style={{height: '100vh'}}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='*' element={<h1>NOT FOUND</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
