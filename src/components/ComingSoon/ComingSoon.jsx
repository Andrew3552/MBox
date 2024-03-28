import BigBuck from '../../assets/ComingSoon/BigBuck.webp'
import year from '../../assets/ComingSoon/year.png'

import './ComingSoon.scss'

export default function ComingSoon() {
  return (
    <div className="coming-soon">
        <img className="coming-soon__img" src={BigBuck} alt=""/>
        <div className="coming-soon__text">
            <img className="coming-soon__text-img" src={year} alt=""/>
            <h2 className='coming-soon__text-title'>Coming Soon...</h2>
        </div>
    </div>
  )
}
