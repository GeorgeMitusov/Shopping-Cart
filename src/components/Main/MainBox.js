import React from 'react';

import '../../styles/Main/MainBox.scss';

const MainBox = () => {

  return (
    <div className='main-box'>

        <div className='main-box-left'>

          <div className='main-box-left-wrap'>

            <h4 className='main-box-left-wrap-title'> NEW COLLECTION </h4>

            <div className='main-box-left-wrap-descr'>

              <h1> BASIC TITLE </h1>

              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor aliquam sapien, id egestas justo facilisis a. Cras fringilla pulvinar semper. Sed lobortis euismod quam, eget vehicula nibh. Vivamus eget sollicitudin sem. Praesent vehicula imperdiet elit. Duis viverra imperdiet urna, quis pulvinar urna lobortis et. Maecenas a turpis diam. Maecenas consectetur eleifend convallis. Mauris sit amet orci suscipit, viverra nisl aliquam, porttitor lorem. </p>
              
              <button> Explore collection </button>

            </div>

          </div>

        </div>

        <div className='main-box-right'></div>

    </div>
  )
}

export default MainBox