import { useEffect, useState } from 'react';

type LightStopState = 'stop' | 'slow' | 'go';
const GO_DELAY = 5000;
const STOP_DELAY = 7000;
const SLOW_DELAY = 2000;

function LightStop({initialState} : {initialState?: LightStopState} ) {
  const [state, setState] = useState<LightStopState>(initialState ?? 'stop');
  function getLightStopClass(light: LightStopState) {
    return `light ${light}` + (state === light ? ' on' : '');
  }

  useEffect(() => {
    if (state === 'stop') {
      setTimeout(() => {
        setState('go');
      }, STOP_DELAY);
    } else if (state === 'slow') {
      setTimeout(() => {
        setState('stop');
      }, SLOW_DELAY);
    } else {
      setTimeout(() => {
        setState('slow');
      }, GO_DELAY);
    }
  }, [state]);

  return (
    <>
      <div className='light-stop'>
        <div className={getLightStopClass('stop')}></div>
        <div className={getLightStopClass('slow')}></div>
        <div className={getLightStopClass('go')}></div>
      </div>
    </>
  );
}

export default LightStop;
