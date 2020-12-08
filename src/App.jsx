import './App.scss'
import { Col, Container, Row } from 'react-grid-system'
import { Switch, Route, Redirect } from 'react-router-dom'
import Auth from './components/auth/Auth'
import Pages from './components/pages/Pages'
import { useSelector } from 'react-redux'

const App = () => {
  const { authorized } = useSelector(({ auth }) => auth)

  return (
    <Container 
      fluid 
      align="center" 
      style={{
        background: !authorized 
          ? 'linear-gradient(229.77deg, #6879BB 2.47%, #9300BB 95.42%) no-repeat center center fixed' 
          : '#EBF2FB'
        }}
    >
      <Row>
        <Switch>
          {!authorized
            ?
              <Route path="/auth">
                <Col>
                  <Auth/>
                </Col>
              </Route>
            :
              <Route path="/pages">
                <Pages/>
              </Route>
          }
          <Redirect from="/" to="/auth/signin"/>
        </Switch>
      </Row>
    </Container>
  )
}

export default App

