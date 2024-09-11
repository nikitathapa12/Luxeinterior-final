import React, {useState} from 'react'
import CounterUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Scroll = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <>

<ScrollTrigger className="" onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="mt-36 flex gap-10 justify-evenly ">
          <div className="flex">
            <div className="flex text-[70px] font-bold text-blue-950">
              {counterOn && <CounterUp start={0} end={1000} duration={2} delay={0} />}
              <p>+</p>
            </div>
            <div className="absolute pt-[6rem] text-gray-500">
              <h1>Happy Clients</h1>
            </div>
          </div>

          <div className="flex">
            <div className="flex text-[70px] font-bold text-blue-950">
              {counterOn && <CounterUp start={0} end={600} duration={2} delay={0} />}
              <p>+</p>
            </div>
            <div className="absolute pt-[6rem] text-gray-500">
              <h1>Successful users</h1>
            </div>
          </div>

          <div className="flex">
            <div className="flex text-[70px] font-bold text-blue-950">
              {counterOn && <CounterUp start={0} end={150} duration={2} delay={0} />}
              <p>+</p>
            </div>
            <div className="absolute pt-[6rem] text-gray-500">
              <h1>Dealer Branches</h1>
            </div>
          </div>
          <div className="flex">
            <div className="flex text-[70px] font-bold text-blue-950">
              {counterOn && <CounterUp start={0} end={30} duration={2} delay={0} />}
              <p>+</p>
            </div>
            <div className="absolute pt-[6rem] text-gray-500">
              <h1>Certification Hold</h1>
            </div>
          </div>
        </div>
      </ScrollTrigger>

    </>
  )
}

export default Scroll