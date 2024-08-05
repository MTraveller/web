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
  const cleanKeywords = formData.keywords
    .split('\n')
    .map((keyword) => keyword.split(' ').filter(Boolean).join('+'));

  const formStringified = JSON.stringify({
    ...formData,
    keywords: cleanKeywords,
  });

  const isFormDiff = formStringified !== form;

  setIsFormSame(!isFormDiff);

  return isFormDiff && useSubmitButton.onToggle();
};

export default isPrevious;
