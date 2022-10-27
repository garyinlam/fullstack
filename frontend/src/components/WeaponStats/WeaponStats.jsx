import React from 'react'
import "./WeaponStats.scss"

const WeaponStats = (props) => {
  const {data} = props
  const {
    damage,
    attackTime,
    attackCount,
    attackDelay,
    hitLimit,
    hitCooldown,
    area,
    duration,
    projectileSpeed,
    knockbackDuration,
    knockbackSpeed,
    hitRange,
  } = data;
  return (
    <div className='weapon-stats'>
      {damage && <p className='weapon-stats__text'>Damage: {damage}</p>}
      {attackTime && <p className='weapon-stats__text'>Attack time: {attackTime}</p>}
      {attackCount && <p className='weapon-stats__text'>Attack count: {attackCount}</p>}
      {attackDelay && <p className='weapon-stats__text'>Attack delay: {attackDelay}</p>}
      {hitLimit && <p className='weapon-stats__text'>Hit limit: {hitLimit}</p>}
      {hitCooldown && <p className='weapon-stats__text'>Hit cooldown: {hitCooldown}</p>}
      {area && <p className='weapon-stats__text'>Area: {area}</p>}
      {duration && <p className='weapon-stats__text'>Duration: {duration}</p>}
      {projectileSpeed && <p className='weapon-stats__text'>Projectile speed: {projectileSpeed}</p>}
      {knockbackDuration && <p className='weapon-stats__text'>Knockback duration: {knockbackDuration}</p>}
      {knockbackSpeed && <p className='weapon-stats__text'>knockbackSpeed: {knockbackSpeed}</p>}
      {hitRange !== 0 && <p className='weapon-stats__text'>Hit range: {hitRange}</p>}

    </div>
  )
}

export default WeaponStats