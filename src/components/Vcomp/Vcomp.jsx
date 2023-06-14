import React ,{useRef} from 'react';
import ReactPlayer from 'react-player';
import video from "../../Video/video1.mp4"

const Vcomp = () => {
    const playerRef = useRef(null);
  return (
    <div className='vdudiv'>
      <ReactPlayer ref={playerRef} controls={true} url={video} width="100%" height="100%"/>
    </div>
  )
}

export default Vcomp
