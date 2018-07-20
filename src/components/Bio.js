import React from 'react'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={'https://pbs.twimg.com/profile_images/968556347787743232/UUclZtey_400x400.jpg'}
          alt={`Vincent Humeau`}
        />
        Written by <strong>Vincent Humeau</strong>
      </p>
    )
  }
}

export default Bio
