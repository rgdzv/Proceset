import "./Input.scss"
import { useState } from "react"
import opened from "./../../images/opened.png"
import closed from "./../../images/closed.png"

const Input = ({input, type, placeholder, meta: {touched, error }}) => {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      {type === "text" || type === "email" 
        ? 
          <>
            <input
              {...input}
              placeholder={placeholder}
              type={type}
              className={touched && error ? "field__mistake" : ""}
            />
            {touched && error && (
              <span className={touched && error ? "field__mistake__text" : ""}>
                {error}
              </span>
            )}
          </>
        : 
          type === "password" 
            ? 
              <div className="field__img">
                <input
                  {...input}
                  placeholder={placeholder}
                  type={clicked ? "text" : "password"}
                  className={touched && error ? "field__mistake" : ""}
                />
                <img
                  src={clicked ? opened : closed}
                  alt="showpass"
                  onClick={handleClick}
                />
                {touched && error && (
                  <span className={touched && error ? "field__mistake__text" : ""}>
                    {error}
                  </span>
                )}
              </div> 
            : 
              null}
    </>
  )
}

export default Input