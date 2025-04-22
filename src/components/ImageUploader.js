import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const UploaderContainer = styled.div`
  margin-bottom: 20px;
`;

const UploadLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const UploadArea = styled.div`
  border: 2px dashed #ddd;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
  
  &:hover {
    border-color: var(--primary-color);
    background-color: #f0f0f0;
  }
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadText = styled.p`
  margin: 0;
  color: var(--text-secondary);
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const ImagePreview = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  overflow: hidden;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 12px;
  padding: 0;
  line-height: 1;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

function ImageUploader({ onChange, maxImages = 5, label, required = false }) {
  const { t } = useTranslation();
  const [images, setImages] = useState([]);
  
  // 如果没有提供label，则使用默认的翻译
  const imageLabel = label || t('imageUploader.uploadImage') + (required ? ' *' : '');
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (images.length + files.length > maxImages) {
      alert(t('imageUploader.maxImagesError', { maxImages }));
      return;
    }
    
    const newImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    
    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    
    if (onChange) {
      onChange(updatedImages.map(img => img.file));
    }
  };
  
  const removeImage = (index) => {
    const updatedImages = [...images];
    URL.revokeObjectURL(updatedImages[index].preview);
    updatedImages.splice(index, 1);
    setImages(updatedImages);
    
    if (onChange) {
      onChange(updatedImages.map(img => img.file));
    }
  };
  
  const handleAreaClick = () => {
    document.getElementById('image-upload').click();
  };
  
  return (
    <UploaderContainer>
      <UploadLabel>{imageLabel}</UploadLabel>
      <UploadArea onClick={handleAreaClick}>
        <UploadInput 
          type="file" 
          id="image-upload" 
          accept="image/*" 
          multiple 
          onChange={handleImageChange} 
        />
        <UploadText>{t('imageUploader.uploadText', { maxImages })}</UploadText>
      </UploadArea>
      
      {images.length > 0 && (
        <ImagePreviewContainer>
          {images.map((image, index) => (
            <ImagePreview key={index}>
              <PreviewImage src={image.preview} alt={t('imageUploader.previewAlt', { index: index + 1 })} />
              <RemoveButton onClick={() => removeImage(index)}>×</RemoveButton>
            </ImagePreview>
          ))}
        </ImagePreviewContainer>
      )}
    </UploaderContainer>
  );
}

export default ImageUploader;