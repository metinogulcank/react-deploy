import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className='work_card' key={item.id}>
       
        <img src={item.image} alt='' className='work_img'/>
        <h3 className='work_title'> {item.name} </h3>
        <a href='#' className='work_button'>
            Daha Fazlası <i className='bx bx-right-arrow-alt work_button-icon'></i>
        </a>
    </div>
  )
}

export default WorkItems