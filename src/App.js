import Layout from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'
import { Route, Switch } from 'react-router-dom';
import Auth from './components/ActiveQuiz/Auth/Auth'
import QuizCreator from './components/ActiveQuiz/QuizCreator/QuizCreator'
import QuizList from './components/ActiveQuiz/QuizList/QuizList'

function App() {
  return (
    <Layout >
      <Switch>
        <Route path='/auth' component={Auth}/>
        <Route path='/create-quiz' component={QuizCreator}/>
        <Route path='/quiz/:id' component={Quiz}/>
        <Route path='/' component={QuizList}/>
      </Switch>
    </Layout>
  );
}

export default App;
