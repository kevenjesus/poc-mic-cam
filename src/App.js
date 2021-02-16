import { useRef, useCallback } from 'react'

function App() {

  const videoRef = useRef();

  const succesVideo = useCallback((stream) => {
    console.log('success');
    videoRef.current.srcObject = stream
  }, [])

  const errorVideo = useCallback((error) => {
    console.log('falha', error);
  }, [])

  const getWebCam = useCallback(async () => {
    await navigator.getUserMedia({ video: true, audio: true }, succesVideo, errorVideo)
  }, [succesVideo, errorVideo])

  return (
    <div style={{display: 'flex', flexDirection: 'column', width: '100%', height:'100vh', justifyContent: 'center', alignItems: 'center'}}>
      <h1>App carregou</h1>
      <video ref={videoRef} width="320" playsInline autoPlay />
      <button onClick={getWebCam} style={{fontSize: 20}}>Get permissions</button>
    </div>
  );
}

export default App;
