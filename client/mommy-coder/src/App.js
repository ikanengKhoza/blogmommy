
import AddABlog from './AddBlog';
import './App.css';
import BlogList from './BlogList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BlogList />
      <AddABlog />
      </header>
    </div>
  );
}

export default App;
