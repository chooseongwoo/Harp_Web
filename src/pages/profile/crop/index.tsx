// 라이브러리
import { useLocation, useNavigate } from 'react-router-dom';

// 파일
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';
import NotFound from 'pages/notFound';
import { Upload_Image } from 'lib/apis/Upload';

const CropPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imageSrc } = location.state || {};

  if (!imageSrc) {
    return <NotFound />;
  }

  const handleCropComplete = async (croppedImage: string) => {
    const response = await fetch(croppedImage);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append('file', blob, 'croppedImage.jpg');
    const uploadResponse = await Upload_Image(formData);

    navigate('/profile/edit', {
      state: { imageUrl: uploadResponse.url }
    });
  };

  return (
    <_.Crop_Layout>
      <Header title="자르기" />
      <_.Crop_Container>
        <CropImage
          imageSrc={imageSrc}
          cropShape="round"
          aspectRatio={1 / 1}
          nextPagePath="/profile/edit"
          onCropComplete={handleCropComplete}
        />
      </_.Crop_Container>
    </_.Crop_Layout>
  );
};

export default CropPage;
