import { useEffect, useRef } from 'react'

function App() {

  const videoRef = useRef();

  useEffect(() => {
    const getWebCam = async () => {
      await navigator.mediaDevices
          .getUserMedia({ video: true, audio: true })
          .then(stream => {
              videoRef.current.srcObject = stream
          })
          .catch(error => {
              console.error('Erro ao iniciar permissoes', error)
          })
    }

    getWebCam();
  })
  return (
    <div style={{display: 'flex', width: '100%', height:'100vh', justifyContent: 'center', alignItems: 'center'}}>
      <h1>App carregou</h1>
      <video ref={videoRef} width="320" playsInline autoPlay />
    </div>
  );
}

export default App;
