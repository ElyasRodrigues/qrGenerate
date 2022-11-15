import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from "qrcode"

import './App.css';

function App() {
  const [link, setLink] = useState("")
  const [qrcodeLink, setQrCodeLink] = useState("")

  function handleGenerate(linkUrl){
    QRCodeLink.toDataURL(linkUrl, {
      width: 600,
      margin: 3,
    }, (err, url) => {
      setQrCodeLink(url)
    })

  }

  function handleQrCode(e){
    setLink(e.target.value)
    handleGenerate(e.target.value)
  }

  return (
    
    <div className="container">
      <h1>QRCode Generate</h1>
      
      <QRCode
        value={link}
      />
      
      <input
        className='input'
        placeholder='Digite seu link'
        value={link}
        onChange={(e) => handleQrCode(e)}
      />
      
      {/* <button type='button' href={qrcodeLink}> */}
        <a href={qrcodeLink} download={`qrcode.png`}>Baixar QrCode</a>
      {/* </button> */}

    </div>

    
  );
}

export default App;
