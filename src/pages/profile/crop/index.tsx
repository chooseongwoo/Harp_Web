import React from 'react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

// 파일
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';
import NotFound from 'pages/notFound';
import { Upload_Image } from 'lib/apis/Upload';
import { useFlow } from 'stackflow';
import { ActivityComponentType } from '@stackflow/react';

interface CropParams {
  imageSrc: string;
}

const CropPage: ActivityComponentType<CropParams> = ({ params }) => {
  const { replace } = useFlow();
  const imageSrc = params.imageSrc;

  if (!imageSrc) {
    return <NotFound />;
  }

  const handleCropComplete = async (croppedImage: string) => {
    const response = await fetch(croppedImage);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append('img', blob);
    const uploadResponse = await Upload_Image(formData);

    replace('Edit', { imageUrl: uploadResponse.data.url });
  };

  return (
    <AppScreen>
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
    </AppScreen>
  );
};

export default CropPage;
