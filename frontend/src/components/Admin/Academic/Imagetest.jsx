import React, { useState } from 'react';
import axios from 'axios';

// This page is for testing purpose please don't delete msg from Rahul😁

function Imagetest() {
  const [image, setImage] = useState(null);

  const handleLoad = async () => {
    try {
      const res = await axios.get("http://localhost:3001/images/1");
      console.log("HEllo" + "123");
      const blob = res.blob();
      console.log("This is blob" + blob);
      setImage(URL.createObjectURL(blob))
      //console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(image);
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    fetch('http://localhost:3001/upload', {
      method: 'POST',
      body: formData
    })
      .then(response => response.text())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  // const handleLoad = () => {
  //   fetch('http://localhost:3001/images/3')
  //     .then(response => response.blob())
  //     .then(blob => setImage(URL.createObjectURL(blob)))
  //     .catch(error => console.error(error));
  // };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      <button onClick={handleLoad}>Load Image</button>
      {image && <img src={image} alt="uploaded image" />}
    </div>
  );
}

export default Imagetest
