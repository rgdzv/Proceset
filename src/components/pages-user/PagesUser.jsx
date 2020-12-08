import './PagesUser.scss'
import { Field, reduxForm } from "redux-form"
import Input from './../input/Input'
import { email, required, password, repeatPassword } from "./../../helper/validator"
import Button from './../button/Button'

const PagesUser = ({ text, user: { currentUser }, pristine, submitting, handleSubmit }) => {
  return (
    <div className="pages__user">
      <p>{currentUser.firstName} {currentUser.secondName}. Редактирование</p>
      <form className="pages__user__form" onSubmit={handleSubmit}>
        <div className="pages__user__form__item">
          <label htmlFor="firstName">Имя</label>
          <div className="pages__user__form__input">
            <Field
              name="firstName"
              type="text"
              component={Input}
              placeholder="Не задано"
              validate={required}
            />
          </div>
        </div>
        <div className="pages__user__form__item">
          <label htmlFor="secondName">Фамилия</label>
          <div className="pages__user__form__input">
            <Field
              name="secondName"
              type="text"
              component={Input}
              placeholder="Не задано"
              validate={required}
            />
          </div>
        </div>
        <div className="pages__user__form__item">
          <label htmlFor="email">Электронная почта</label>
          <div className="pages__user__form__input">
            <Field
              name="email"
              type="email"
              component={Input}
              placeholder="Не задано"
              validate={[required, email]}
            />
          </div>
        </div>
        <div className="pages__user__form__item">
          <label htmlFor="password">Новый пароль</label>
          <div className="pages__user__form__input">
            <Field
              name="password"
              type="password"
              component={Input}
              placeholder="Не задано"
              validate={[required, password]}
            />
          </div>
        </div>
        <div className="pages__user__form__item">
          <label htmlFor="repeatPassword">Повторите пароль</label>
          <div className="pages__user__form__input">
            <Field
              name="repeatPassword"
              type="password"
              component={Input}
              placeholder="Не задано"
              validate={[required, repeatPassword]}
            />
          </div>
        </div>
        <Button className="btn btn--outside" type="submit" disabled={pristine || submitting}>
          {text}
        </Button>
      </form>
    </div>
  )
}

export default reduxForm({
  form: "edit-user",
  enableReinitialize : true
})(PagesUser)
