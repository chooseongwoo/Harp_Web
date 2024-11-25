// 라이브러리
import React from 'react';
import { useParams } from 'react-router-dom';
import { ActivityComponentType } from '@stackflow/react';

// 파일
import CropImage from 'components/CropImage';
import Header from 'components/Header';
import * as _ from './style';
import { useFlow } from 'stackflow';
import NotFound from 'pages/notFound';
import { Upload_Image } from 'lib/apis/Upload';
import { AppScreen } from '@stackflow/plugin-basic-ui';

interface CropParams {
  id: string;
  imageSrc: string;
}

const CropPage: ActivityComponentType<CropParams> = ({ params }) => {
  const id = params.id;
  const { push, pop } = useFlow();
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
    pop();
    pop();
    push('Info', { id: id, imageUrl: uploadResponse.data.url });
  };

  return (
    <AppScreen>
      <_.Crop_Layout>
        <Header title="자르기" />
        <_.Crop_Container>
          <CropImage
            imageSrc={imageSrc}
            cropShape="rect"
            aspectRatio={12 / 5}
            nextPagePath="/plan/info/:id"
            onCropComplete={handleCropComplete}
          />
        </_.Crop_Container>
      </_.Crop_Layout>
    </AppScreen>
  );
};

export default CropPage;
