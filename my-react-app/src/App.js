import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 295.45, date: new Date() },
    { title: 'Car Insurance', amount: 295.45, date: new Date() },
    { title: 'Car Insurance', amount: 295.45, date: new Date() },
    { title: 'Car Insurance', amount: 295.45, date: new Date() },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>

        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
      </header>
    </div>

  );
}

export default App;
