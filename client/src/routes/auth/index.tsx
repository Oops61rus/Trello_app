import React from 'react'
import { Route, Switch } from 'react-router-dom';

import User from 'routes/auth/components/User'

const Boards: React.FC = () => {
  return (
    <>
      <main>
        <h1>Hello!</h1>
      </main>
      <Switch>
        <Route path='/user' component={User} exact/>
      </Switch>
    </>
  )
}

export default Boards;