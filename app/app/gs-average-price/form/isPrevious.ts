import { FormData } from '@/entities/gsap';

const isPrevious = (
  formData: FormData,
  setIsFormSame: React.Dispatch<React.SetStateAction<boolean>>,
  useSubmitButton: {
    isOpen: boolean;
    onToggle: () => void;
  },
  form: string | null
) => {
  const cleanKeywords = JSON.stringify(
    formData.keywords
      .toLowerCase()
      .split('\n')
      .map((keyword) => keyword.split(' ').filter(Boolean).join('+'))
      .join('\n')
  );

  const cleanPreviousKeywords =
    form &&
    JSON.stringify(JSON.parse(form).keywords.join('\n')).replaceAll(' ', '+');
  const cleanPreviousCountryCode = form && JSON.parse(form).countryCode;

  const isFormDiff =
    formData.countryCode === cleanPreviousCountryCode &&
    cleanKeywords === cleanPreviousKeywords;

  setIsFormSame(isFormDiff);
  return !isFormDiff && useSubmitButton.onToggle();
};

export default isPrevious;
