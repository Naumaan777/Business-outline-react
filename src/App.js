import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './Header';
import AwardDetails from './AwardDetails';
import Footer from './Footer'
// export { Header } from './Header'
// export { AwardDetails } from './AwardDetails'
// export { Footer } from './Footer'

const App = () => {
  return (
    <>
    <div className="app">
      <Header />
      <AwardDetails />
      <Footer />
    </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));


// function App() {
//   return (
//     <h1>welcome to this website </h1>
    
//   );
// }

export default App;