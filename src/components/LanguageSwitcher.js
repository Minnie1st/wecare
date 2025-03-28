import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  background: transparent;
  border: none;
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px 10px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const LanguageIcon = styled.span`
  margin-right: 5px;
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  z-index: 100;
  min-width: 120px;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const LanguageOption = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 8px 15px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  &.active {
    color: var(--primary-color);
    font-weight: 500;
  }
`;

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ru', name: 'Русский' },
    { code: 'et', name: 'Eesti' },
    { code: 'lv', name: 'Latviešu' },
    { code: 'lt', name: 'Lietuvių' }
  ];
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };
  
  // 获取当前语言的名称
  const getCurrentLanguageName = () => {
    const currentLang = languages.find(lang => lang.code === i18n.language);
    return currentLang ? currentLang.name : 'English';
  };
  
  // 点击外部关闭下拉菜单
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.language-switcher')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);
  
  return (
    <LanguageContainer className="language-switcher">
      <LanguageButton onClick={toggleDropdown}>
        <LanguageIcon>🌐</LanguageIcon>
        {getCurrentLanguageName()}
      </LanguageButton>
      
      <LanguageDropdown isOpen={isOpen}>
        {languages.map((lang) => (
          <LanguageOption
            key={lang.code}
            className={i18n.language === lang.code ? 'active' : ''}
            onClick={() => changeLanguage(lang.code)}
          >
            {lang.name}
          </LanguageOption>
        ))}
      </LanguageDropdown>
    </LanguageContainer>
  );
}

export default LanguageSwitcher;