'use client';

import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  ListItem,
  UnorderedList,
  VStack,
  useTheme,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { RefCallBack, UseFormSetValue } from 'react-hook-form';
import { HiChevronDown } from 'react-icons/hi';
import { FormData, Markets } from '@/entities/gsap';
import getCodeCurrency from '@/utils/getCodeCurrency';

interface AutoComplete {
  inputRef: RefCallBack;
  change: string;
  setValue: UseFormSetValue<FormData>;
  rest: {
    name: string;
  };
}

const AutoComplete = ({ inputRef, change, setValue, rest }: AutoComplete) => {
  const theme = useTheme();

  const [isCountryListVisible, setCountryListVisible] = useState(false);

  const countryInputRef = useRef<HTMLInputElement | null>(null);
  const countryListRef = useRef<HTMLUListElement>(null);
  const firstCountryRef = useRef<HTMLLIElement>(null);
  const lastCountryRef = useRef<HTMLLIElement>(null);

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('country', e.target.value);
    if (countryInputRef.current?.value === '') {
      setValue('countryCode', 'US');
      setValue('currency', '$');
    }

    setCountryListVisible(true);
  };

  const handleCountryClick = (country: string) => {
    const { countryCode, currency } = getCodeCurrency(country);

    setValue('country', country);
    setValue('countryCode', countryCode ? countryCode : 'US');
    setValue('currency', currency ? currency : '$');
    setCountryListVisible(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.code === 'Tab' && !e.shiftKey) {
      setCountryListVisible(true);
    } else if (e.code === 'ArrowDown') {
      e.preventDefault();
      const currentCountry = document.activeElement as HTMLElement;
      if (currentCountry === lastCountryRef.current) {
        firstCountryRef.current?.focus();
      } else {
        const nextCountry = currentCountry?.nextElementSibling as HTMLElement;
        nextCountry?.focus();
      }
    } else if (e.code === 'ArrowUp') {
      e.preventDefault();
      const currentCountry = document.activeElement as HTMLElement;
      if (currentCountry === firstCountryRef.current) {
        lastCountryRef.current?.focus();
      } else {
        const prevCountry =
          currentCountry?.previousElementSibling as HTMLElement;
        prevCountry?.focus();
      }
    } else if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      const country = (e.target as HTMLElement).textContent;
      setValue('country', country ? country : 'United States');

      if (country) {
        const { countryCode, currency } = getCodeCurrency(country);

        setValue('countryCode', countryCode ? countryCode : 'US');
        setValue('currency', currency ? currency : '$');
      }

      setCountryListVisible(false);
    }
  };

  const handleCountryListBlur = (e: React.FocusEvent) => {
    if (!e.relatedTarget || e.relatedTarget.tagName.toLowerCase() !== 'li')
      setCountryListVisible(false);
  };

  const handleSelectOptions = () => {
    const result = Object.keys(Markets).map(
      (country, index) =>
        (country.startsWith(change) ||
          country.toLowerCase().startsWith(change)) && (
          <ListItem
            key={country}
            cursor='pointer'
            ref={index === 0 ? firstCountryRef : undefined}
            className={change === country ? 'selected' : ''}
            onClick={() => handleCountryClick(country)}
            tabIndex={0}
            px={4}
            py={2}
          >
            {country}
          </ListItem>
        )
    );

    return result.filter(Boolean).length ? (
      result
    ) : (
      <ListItem>No items match the entered value!</ListItem>
    );
  };

  return (
    <VStack>
      <InputGroup display='flex' flexDir='column'>
        <Input
          id='input-country'
          placeholder='Choose market'
          autoComplete='country'
          {...rest}
          name='country'
          ref={(e) => {
            inputRef(e);
            countryInputRef.current = e;
          }}
          value={change}
          onChange={handleCountryChange}
          onFocus={() => setCountryListVisible(true)}
          onBlur={handleCountryListBlur}
          bgColor={theme.__cssMap['colors.chakra-body-bg'].value}
        />
        <InputRightElement>
          <Icon as={HiChevronDown} />
        </InputRightElement>
        <UnorderedList
          w='full'
          maxH='300px'
          ref={countryListRef}
          hidden={!isCountryListVisible}
          onBlur={handleCountryListBlur}
          onKeyDown={handleKeyDown}
          borderTopWidth={0}
          borderRightWidth={1}
          borderBottomWidth={1}
          borderLeftWidth={1}
          listStyleType='none'
          borderRadius='md'
          overflowX='auto'
          fontSize='lg'
          mx={0}
          mt={-2}
          px={4}
          pt={4}
          pb={2}
        >
          {change.length
            ? handleSelectOptions()
            : Object.keys(Markets).map((country, index) => (
                <ListItem
                  key={country}
                  cursor='pointer'
                  ref={index === 0 ? firstCountryRef : undefined}
                  className={change === country ? 'selected' : ''}
                  onClick={() => handleCountryClick(country)}
                  tabIndex={0}
                  px={4}
                  py={2}
                >
                  {country}
                </ListItem>
              ))}
          <ListItem ref={lastCountryRef} tabIndex={-1} />
        </UnorderedList>
      </InputGroup>
    </VStack>
  );
};

export default AutoComplete;
