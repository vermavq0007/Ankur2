import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import Header from './Header/Header';
import ErrorFallBack from './ErrorFallBack/ErrorFallBack';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Headerr from './Header/Headerr';


function App() {
  

      
  return (
    <div>
    <BrowserRouter>
    <Headerr />
    <Header />

      <ErrorBoundary FallbackComponent={ErrorFallBack}>
     <Suspense fallback={
                          <div>
                            <div className="spinner-border m-5" role="status">
                              <span className="visually-hidden">Loading the page...</span>
                            </div>
                          </div>
                        }>

    <Routes>
      <Route path='/' element={<Home />} />
        
      
    </Routes>

                      
     </Suspense>   
     </ErrorBoundary>
     <Footer />
      </BrowserRouter>
     
    </div>
  );
}

export default App;
