import './Pages.scss'
import { useState, useEffect } from 'react'
import { Col } from 'react-grid-system'
import PagesMenu from '../pages-menu/PagesMenu'
import PagesUser from '../pages-user/PagesUser'
import Process from '../process/Process'
import PagesToggleMenu from '../pages-toggle-menu/PagesToggleMenu'
import { Route, Switch } from 'react-router-dom'
import { CURRENT_USER, EDIT_CURRENT_USER, PROCESS_LIST } from './../../helper/mutations'
import ErrorMessage from '../error-message/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { getError, cleanError, setAuthorized } from './../../redux/actions/action'
import preloader from './../../images/preloader.gif'
import { useMutation, useQuery } from 'react-apollo'


const Pages = () => {
  const dispatch = useDispatch()

  const { data: user, loading: userLoading } = useQuery(CURRENT_USER, {
    onError: error => dispatch(getError(error))
  })

  const { data: list, loading: listLoading } = useQuery(PROCESS_LIST, {
    onError: error => dispatch(getError(error))
  })

  const [text, setText] = useState('Сохранить')
  const [clicked, setClicked] = useState(false)
  const { error } = useSelector(({ error }) => error)

  const [editUser, { loading: editUserLoading }] = useMutation(EDIT_CURRENT_USER, {
    onCompleted: data => {
      if(data !== undefined) {
        setText('Сохранено...')
        setTimeout(() => {
          setText('Сохранить')
        }, 3000)
      }
    },
    onError: error => dispatch(getError(error))
  })

  const edit = (values) => {
    editUser({
      variables: {
        id: user.currentUser.id,
        firstName: values.firstName,
        secondName: values.secondName,
        email: values.email,
        password: values.password
      }
    })
  }

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  })

  const handleToggleMenu = () => {
    setClicked(!clicked)
    dispatch(cleanError())
  }

  const signOut = () => {
    window.location.reload()
    localStorage.removeItem("token")
    dispatch(setAuthorized())
  }

  if(userLoading || listLoading) {
    return (
      <div className="pages__loading">
        <img src={preloader} alt="preloader"/>
      </div>
    )
  }

  return (
    <div className="pages">
      <PagesToggleMenu 
        clicked={clicked} 
        toggleMenu={handleToggleMenu}
        user={user}
        signOut={signOut}
      />
      <PagesMenu toggleMenu={handleToggleMenu}/>
      <Col style={{padding: "0 22px"}}>
        <div className="pages__content">
          <Switch>
            <Route path="/pages/edituser">
              <PagesUser
                text={text}
                onSubmit={edit} 
                user={user}
                initialValues={{
                  firstName: user.currentUser.firstName,
                  secondName: user.currentUser.secondName,
                  email: user.currentUser.email,
                }}
              />
            </Route>  
            <Route path="/pages/process">
              {list
                ? 
                  list.processList.map((list) => 
                    <Process key={list.id} list={list}/>
                  )
                :
                  null
              }
            </Route>  
          </Switch>
          {error &&
            <ErrorMessage className="mistake mistake--edit">
              {error.message}
            </ErrorMessage>
          }  
          {editUserLoading &&
            <div className="pages__loading pages__loading--loading">
              <img src={preloader} alt="preloader"/>
            </div>
          }
        </div>
      </Col>
    </div>
  )
}

export default Pages
