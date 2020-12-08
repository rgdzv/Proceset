import './SignIn.scss'
import { Field, reduxForm } from "redux-form"
import Input from './../input/Input'
import { required } from './../../helper/validator'
import Button from './../button/Button'
import Ref from './../ref/Ref'

const SignIn = ({ pristine, submitting, handleSubmit, removeError }) => {
  return (
    <>
      <form className="auth__sign__in" onSubmit={handleSubmit}>  
        <Field
          name="email"
          type="email"
          component={Input}
          placeholder="Электронная почта"
          validate={[required]}
        />
        <Field
          name="password"
          type="password"
          component={Input}
          placeholder="Введите пароль"
          validate={[required]}
        />
        <Button 
          className="btn" 
          type="submit" 
          disabled={pristine || submitting}
        >
          Войти в систему
        </Button>
        <Ref 
          className="link" 
          to="/auth/signup" 
          onClick={removeError} 
          sign="Зарегистрироваться"
        >
        </Ref> 
      </form>
    </>
  )
}

export default reduxForm({
  form: "sign in",
})(SignIn)
