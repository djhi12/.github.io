import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 295.45, date: new Date() },
    { title: 'Medical', amount: 495.45, date: new Date() },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Expenses />
      </header>
    </div>

  );
}

export default App;
