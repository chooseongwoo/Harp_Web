export const handleImageEdit = (setImage: (image: File) => void) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    const target = e.target as HTMLInputElement;
    if (target && target.files && target.files[0]) {
      const file = target.files[0];
      setImage(file);
    }
  };
  input.click();
};
