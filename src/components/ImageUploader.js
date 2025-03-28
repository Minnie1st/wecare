import React, { useState } from 'react';
import styled from 'styled-components';

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

function ImageUploader({ onChange, maxImages = 5, label = "上传图片" }) {
  const [images, setImages] = useState([]);
  
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    
    if (images.length + files.length > maxImages) {
      alert(`最多只能上传${maxImages}张图片`);
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
  
  return (
    <UploaderContainer>
      <UploadLabel>{label}</UploadLabel>
      <UploadArea>
        <UploadInput 
          type="file" 
          id="image-upload" 
          accept="image/*" 
          multiple 
          onChange={handleImageChange} 
        />
        <UploadText>点击或拖拽图片到此处上传 (最多{maxImages}张)</UploadText>
      </UploadArea>
      
      {images.length > 0 && (
        <ImagePreviewContainer>
          {images.map((image, index) => (
            <ImagePreview key={index}>
              <PreviewImage src={image.preview} alt={`预览图 ${index + 1}`} />
              <RemoveButton onClick={() => removeImage(index)}>×</RemoveButton>
            </ImagePreview>
          ))}
        </ImagePreviewContainer>
      )}
    </UploaderContainer>
  );
}

export default ImageUploader;