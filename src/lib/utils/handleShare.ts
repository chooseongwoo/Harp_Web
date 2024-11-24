export const handleShare = async (title: string, id: string) => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `${title} 일정`,
        text: '이 링크를 공유하세요!',
        url: `/plan/info/${id}`
      });
      console.log('공유 성공!');
    } catch (error) {
      console.error('공유 중 에러 발생:', error);
    }
  } else {
    console.log('Web Share API가 지원되지 않습니다.');
  }
};
