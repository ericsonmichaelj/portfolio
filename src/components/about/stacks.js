import React, { PropTypes } from 'react'
import stacks, { stackTypes } from '../../constants/stacks'
import _ from 'underscore'

const StackTypes = (props) => {
  const maxColumnsInBootstrap = 12
  const stacksOfStackType = stacks.filter(item => item.type === props.stackTypeValue)
  const numOfCol = maxColumnsInBootstrap / stacksOfStackType.length
  return (
    <div className='row' style={{ marginBottom: '3em' }}>
      <h2 style={{ marginBottom: '1em' }}>{ props.stackTypeValue }</h2>
      {
        stacksOfStackType.map((stack, index) =>
          <Stack numOfCol={numOfCol} {...stack} key={index} />
        )
      }
    </div>
  )
}
StackTypes.propTypes = {
  stackTypeValue: PropTypes.string
}

const Stack = ({ url, title, image, skill, numOfCol }) =>
  (
    <div className={`col-sm-${numOfCol}`}>
      <h3>{title}</h3>
      <a href={url} target='_blank' rel='noopener noreferrer'>
        <img className='img-stack' src={`img/stacks/${image}`} alt={title} />
      </a>
      <div><p><b>Skill Level:</b> {skill} </p></div>
    </div>
  )
Stack.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  skill: PropTypes.string,
  numOfCol: PropTypes.number,
  image: PropTypes.string
}

const Stacks = () => (
  <div className='container tech-stack-section'>
    <h1 style={{ marginBottom: '1.5em' }}>My Tech Stack</h1>
    { _(stackTypes).map(
      value => <StackTypes stackTypeValue={value} key={value} />
    )}
    <p style={{ textAlign: 'left' }}><b>Note:</b> This is by no means an exhaustive list of all the technologies,
    libraries, frameworks, or programming languages that I have used in the past.{' '}
    Please inquire if there&apos;s work
    that you or your company needs done on a technology not listed there.
     I am also open to learning new technologies as well. </p>
  </div>
)

export default Stacks
