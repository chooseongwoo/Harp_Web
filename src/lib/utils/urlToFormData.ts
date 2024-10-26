export const urlToFormData = async (imageUrl: string) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    const formData = new FormData();
    formData.append('file', blob, 'cropped-image.jpg');

    return formData;
  } catch (error) {
    console.error('이미지 URL을 FormData로 변환하는데 실패했습니다:', error);
    return null;
  }
};
