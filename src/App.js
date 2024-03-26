import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Discount from './components/Discount'
import Header from './components/Header'
import Home from './pages/Home'
import Community from './pages/Community'

function App() {
  return (
    <main>
      <BrowserRouter>
        <Discount discount={50} />
        <div className={`w-full flex flex-col sm:flex-row items-stretch`}>
          <aside className={`aside flex-none w-full sm:w-1/4 py-2.5 px-5`}>
            <Header />
          </aside>
          <article className={`flex-auto w-full sm:w-3/4 mb-20 md:m-0`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="community" element={<Community />} />
              <Route path="stories" element={"Stories"} />
              <Route path="shop" element={"Shop"} />
              <Route path="feedback" element={"Feedback"} />
            </Routes>
          </article>
        </div>
      </BrowserRouter>
    </main>
  );
}

export default App;
