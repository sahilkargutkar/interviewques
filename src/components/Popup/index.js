import React from 'react'

const PopupWindow = ({videoUrl}) => {

  return (
    <div className='popupoverlay'>
<video controls="true">
    <source src={videoUrl} type="video/mp4" />
</video>
    </div>
  )

}

export default PopupWindow