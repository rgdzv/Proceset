import './Process.scss'
import arrow from "./../../images/processes/arrow.png"
import circle from "./../../images/processes/circle.png"
import timer from "./../../images/processes/timer.png"
import activetimer from "./../../images/processes/activetimer.png"
import members from "./../../images/processes/members.png"
import scenario from "./../../images/processes/scenario.png"
import moment from "moment"
import "moment/locale/ru"
import "moment-duration-format"
import PropTypes from "prop-types"
import { memo } from 'react'

const Process = ({ list }) => {
  return (
    <div className="process">
      <div className="process__form">
        <div className="process__form__name">
          <p>{list.name}</p>
          <div className="process__form__link">
            <a href="##" className="disabled">
              <p>На карту процесса</p>
              <img src={arrow} alt="arrow" />
            </a>
          </div>
        </div>
        <div className="process__form__content">
          <div className="process__form__content__item">
            <img src={circle} alt="circle" />
            <div className="process__form__item__number">
              <p>{list.numberOfExecutions}</p>
              <p>выполнено раз</p>
            </div>
          </div>
          <div className="process__form__content__item">
            <div className="process__form__content__itemblock">
              <img src={timer} alt="timer" />
              <div className="process__form__item__number">
                <p>
                  {moment
                    .duration(parseInt(list.averageLeadTime), "milliseconds")
                    .format("h [ч] m [мин]")
                  }
                </p>
                <p>среднее время выполнения</p>
              </div>
            </div>
            <div className="process__form__content__itemblock">
              <img src={activetimer} alt="activetimer" />
              <div className="process__form__item__number">
                <p>
                  {moment
                    .duration(parseInt(list.averageActiveTime), "milliseconds")
                    .format("h [ч] m [мин]")
                  }
                </p>
                <p>среднее активное время</p>
              </div>
            </div>
          </div>
          <div className="process__form__content__item">
            <div className="process__form__content__itemblock">
              <img src={members} alt="members" />
              <div className="process__form__item__number">
                <p>{list.employeesInvolvedProcess}</p>
                <p>участвуют в процессе</p>
              </div>
            </div>
            <div className="process__form__content__itemblock">
              <img src={scenario} alt="scenario" />
              <div className="process__form__item__number">
                <p>{list.numberOfScenarios}</p>
                <p>в процессе</p>
              </div>
            </div>
          </div>
          <div className="process__form__content__item">
            <div className="process__form__block">
              <p>Начало</p>
              <p>Окончание</p>
              <p>Загрузка</p>
            </div>
            <div className="process__form__block">
              <p>{moment(list.start, "x").locale("ru").format("D MMMM YYYY")}</p>
              <p>{moment(list.end, "x").locale("ru").format("D MMMM YYYY")}</p>
              <p>{moment(list.loading, "x").locale("ru").format("D MMMM YYYY")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Process.propTypes = {
  list: PropTypes.object
}

Process.defaultProps = {
  list: {}
}

export default memo(Process)
