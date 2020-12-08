import './SignUp.scss'
import { Field, reduxForm } from "redux-form"
import Input from './../input/Input'
import Button from './../button/Button'
import Ref from './../ref/Ref'
import { required, email, password, repeatPassword } from './../../helper/validator'

const SignUp = ({ pristine, submitting, handleSubmit, removeError }) => { 

  return (
    <form className="auth__sign__up" onSubmit={handleSubmit}>  
      <p>Регистрация</p>
      <Field
        name="firstName"
        type="text"
        component={Input}
        placeholder="Имя"
        validate={required}
      />
      <Field
        name="secondName"
        type="text"
        component={Input}
        placeholder="Фамилия"
        validate={required}
      />
      <Field
        name="email"
        type="email"
        component={Input}
        placeholder="Электронная почта"
        validate={[required, email]}
      />
      <Field
        name="password"
        type="password"
        component={Input}
        placeholder="Введите пароль"
        validate={[required, password]}
      />
      <Field
        name="repeatPassword"
        type="password"
        component={Input}
        placeholder="Повторите пароль"
        validate={[required, repeatPassword]}
      />
      <Button 
        className="btn" 
        type="submit" 
        disabled={pristine || submitting}
      >
        Применить и войти
      </Button>
      <Ref 
        className="link" 
        to="/auth/signin" 
        onClick={removeError} 
        sign="Вход"
      >
        Уже зарегистрированы?
      </Ref> 
    </form>
  )
}

export default reduxForm({
  form: "sign up",
})(SignUp)
