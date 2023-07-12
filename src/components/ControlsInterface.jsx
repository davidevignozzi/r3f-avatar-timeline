import { useKeyboardControls } from '@react-three/drei';
import React from 'react';

const ControlsInterface = () => {
  const forwardPressed = useKeyboardControls((state) => state.forward);
  const leftPressed = useKeyboardControls((state) => state.left);
  const backPressed = useKeyboardControls((state) => state.back);
  const rightPressed = useKeyboardControls((state) => state.right);

  return (
    <div id="interface">
      <div className="controls">
        <div className="raw">
          <div className={`key ${forwardPressed ? 'active' : ''}`}>&#8593;</div>
        </div>
        <div className="raw">
          <div className={`key ${leftPressed ? 'active' : ''}`}>&#8592;</div>
          <div className={`key ${backPressed ? 'active' : ''}`}>&#8595;</div>
          <div className={`key ${rightPressed ? 'active' : ''}`}>&#8594;</div>
        </div>
      </div>
    </div>
  );
};

export default ControlsInterface;
