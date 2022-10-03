import React from 'react'
import {Switch, Route, Redirect} from 'react'
import NotFound from './NotFound'

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={"/"} />
      </Route>
      <Route exact path="/">
        <Redirect to={"/"} />
      </Route>
      <Route path="/">

      </Route>
      <Route exact path="/">

      </Route>
      <Route path="/">

      </Route>
      <Route exact path="/">

      </Route>
      <Route path="/">

      </Route>
      <Route path="/">

      </Route>
      <Route path="/">

    </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  )
}

export default Routes