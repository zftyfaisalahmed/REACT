import React, { useCallback, useState } from 'react'
import Age from './Ex7-sub/Age';
import AgeInfo from './Ex7-sub/AgeInfo';

// useCallback => will return memorised value od callback
// useMemo => will return memorised function of callback

const Ex7 = () => {

  const [age, setAge] = useState(10)

  const incrementAge = () => {
    setAge(age + 1);
  }

  const userAge = `David age is ${age} years`

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateAge = useCallback(() => {
    return userAge;
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3 className="display-3">
            useCallback Hook
          </h3>
          <p>useCallback will return</p>
        </div>
      </div>
      <Age age={age} ageHandler={incrementAge}/>
      <hr />
      <AgeInfo ageInfo={updateAge}/>

      {/* <p>{userAge}</p> */}
    </div>
  )
}

export default Ex7