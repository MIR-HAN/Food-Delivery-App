import React from 'react'

const Container = ({children,designs}) => {
  return (
    <div className={
      `  ${designs}
       max-w-[1440px] p-5 mx-auto`}>{children}</div>
  )
}

export default Container;