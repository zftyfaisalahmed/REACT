import React, { useMemo, useState } from 'react'
import Age from './Ex8-sub/Age';
import AgeInfo from './Ex8-sub/Ageinfo';

const Ex8 = () => {

  const [age, setAge] = useState(30)

  const incrementAge = () => {
    setAge(age + 1)
  }

  const updateAge =()=>{
    return `my age is ${age} years`
  }

  useMemo(() => {
    return updateAge()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [age])

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h5 className="display-3">
            useMemo Hook
          </h5>
          <p className='text-secondary'>
            useCallback returns the memorized callback response.
          </p>
          <p className='text-secondary'>
            useMemo will only recomputs the memorized value one of the depps has changed
          </p>
        </div>
      </div>
      <hr />
      <Age age={age} ageHandler={incrementAge}/>
      <hr />
      <AgeInfo updateAge = {updateAge}/>
    </div>
  )
}

export default Ex8