import React from 'react'
import styled from 'styled-components'
import mystyle from './mystyle.module.css'
const Styledcomponent = () => {
    // h3 { color:red}
    const H3 = styled.h3 `
        color:red;
        background: papayawhip;
    `
  return (
    <div>
      <H3>Hii</H3>
      <h3>Hello</h3>
      <h3>How are you??</h3>
      <div className={mystyle.abc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, ex omnis eveniet mollitia </div>
    </div>
  )
}

export default Styledcomponent
