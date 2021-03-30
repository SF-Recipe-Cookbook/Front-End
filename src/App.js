import { Switch, Route } from 'react-router-dom'

import HomePage from './components/home-page/HomePage'
import LoginPage from './components/log-in-page/LoginPage'
import SignupPage from './components/sign-up-page/SignupPage'
import ProfilePage from './components/profile-page/ProfilePage'
import NewRecipe from './components/new-recipe-page/NewRecipe'

function App() {
  return (
    <div>
      <Switch>

        <Route exact path='/'>
          <HomePage />
        </Route>

        <Route path='/login'>
          <LoginPage />
        </Route>

        <Route path='/signup'>
          <SignupPage />
        </Route>

        <Route path='/profilepage'>
          <ProfilePage />
        </Route>

        <Route path='/new-recipe'>
          <NewRecipe />
        </Route>

      </Switch>
    </div>
  )
}

export default App