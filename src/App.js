import Navbar from './components/Navbar'
import { TodoProvider } from './context/todoContext/TodoContext';
import {QuoteProvider} from './context/quoteContext/QuoteContext'
import Home from './pages/Home'

function App() {
  
  
 

  return (
    <TodoProvider>
    <Navbar/>
    <QuoteProvider>
    <Home />
    </QuoteProvider>
    </TodoProvider>
  );
}

export default App;
