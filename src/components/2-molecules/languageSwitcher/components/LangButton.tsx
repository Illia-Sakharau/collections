import { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { languageInfo } from '@/types/componens';

type Props = languageInfo & ButtonProps;

const LangButton: FC<Props> = ({ value, text, ...props }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  return (
    <Button
      key={value}
      size="sm"
      variant="ghost"
      px="2"
      fontWeight={currentLang === value ? 'bold' : 'medium'}
      isActive={currentLang === value}
      onClick={() => i18n.changeLanguage(value)}
      {...props}
    >
      {text}
    </Button>
  );
};

export default LangButton;
