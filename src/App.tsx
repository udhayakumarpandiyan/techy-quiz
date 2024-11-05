import './App.css';
import Quiz from './pages/quiz/Quiz';
import { Route, RouterProvider } from './route/components/Router';
import { EDITOR, QUIZ } from './route/paths';
import SignUp from './pages/login/SignUp';
import Editor from './pages/editor/Editor';

function App() {
  const isUserLoggedIn = true;
  const onSignup = () => {
    window.history.pushState({}, "", '/user/register');
  }
  return (
    <div className="App">
      {isUserLoggedIn ? <RouterProvider>
        <Route path={QUIZ} component={<Quiz title='test' />} />
        <Route path={EDITOR} component={<Editor title='Editor' />} />
      </RouterProvider>
        : <RouterProvider>
          <Route path="/" component={<div>
            <button onClick={onSignup}>Signup</button>
          </div>} />
          <Route path="/user/register" component={<SignUp />} />
        </RouterProvider>
      }
    </div>
  );
}

export default App;
