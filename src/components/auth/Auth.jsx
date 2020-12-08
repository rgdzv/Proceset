import './Auth.scss'
import logo from './../../images/logo.png'
import SignUp from './../sign-up/SignUp'
import SignIn from './../sign-in/SignIn'
import ErrorMessage from './../error-message/ErrorMessage'
import { Route, Switch, useHistory } from 'react-router-dom'
import { SIGN_UP, SIGN_IN } from '../../helper/mutations'
import { useDispatch, useSelector } from 'react-redux'
import { getError, cleanError, setAuthorized } from './../../redux/actions/action'
import preloader from './../../images/preloader.gif'
import { useCallback } from 'react'
import { useMutation } from 'react-apollo'

const Auth = () => {
  const { error } = useSelector(({ error }) => error)
  const history = useHistory()
  const dispatch = useDispatch()

  const [signup, { loading: signUpLoading }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      const token = data.signup
      localStorage.setItem("token", token)
      dispatch(setAuthorized())
      history.push("/pages/edituser")
    },
    onError: error => dispatch(getError(error)),
  })

  const [login, { loading: signInLoading }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      const token = data.login.token
      localStorage.setItem("token", token)
      dispatch(setAuthorized())
      history.push("/pages/process")
    },
    onError: error => dispatch(getError(error)),
  })

  const signUp = (values) => {
    signup({
      variables: {
        firstName: values.firstName,
        secondName: values.secondName,
        email: values.email,
        password: values.password
      }
    })
  }

  const signIn = (values) =>{
    login({
      variables: {
        email: values.email,
        password: values.password
      }
    })
  }

  const removeError = useCallback(() => {
    dispatch(cleanError())
  },[])

  return (
    <>
      <div className="auth">
        <img 
          className="auth__logo"
          src={logo} 
          alt="logo"
        />
        <div className="auth__content">
          <Switch>
            <Route path="/auth/signin">
              <SignIn onSubmit={signIn} removeError={removeError}/>
            </Route> 
            <Route path="/auth/signup">
              <SignUp onSubmit={signUp} removeError={removeError}/>
            </Route>   
          </Switch>
          {error &&
            <ErrorMessage className="mistake">
              {error.message}
            </ErrorMessage>
          }
          {(signUpLoading || signInLoading) &&
            <div className="auth__loading">
              <img src={preloader} alt="preloader"/>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Auth
