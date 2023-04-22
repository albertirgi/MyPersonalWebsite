import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bx bx-code-alt about__icon' ></i>

            <h3 className="about__title">Code</h3>
            <span className="about__subtitle">3 Years of Coding</span>
        </div>

        <div className="about__box">
            <i class='bx bx-paint about__icon' ></i>
        
            <h3 className="about__title">Design</h3>
            <span className="about__subtitle">Creative Thinker</span>
        </div>

        <div className="about__box">
            <i class='bx bx-brain about__icon' ></i>

            <h3 className="about__title">Learn</h3>
            <span className="about__subtitle">Fast Learner</span>
        </div>
    </div>
  )
}

export default Info