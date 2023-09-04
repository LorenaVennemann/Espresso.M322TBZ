import * as React from 'react';
import CatImageService from './service/CatImageService';


const CatImage = () => {
  const [catImageUrl, setCatImageUrl] = React.useState('');

  React.useEffect(() => {
    CatImageService().getRandomeCatImage()
      .then((catImageUrl) => setCatImageUrl(catImageUrl));
  }, []);

  return (
    <img src={catImageUrl}/>
  );
};

export default CatImage;