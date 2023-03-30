import * as React from 'react';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import clsxm from '@/constant/clsxm';

enum ButtonVariant {
  'black',
  'blue'
}

enum ButtonSize {
  'sm',
  'base',
  'lg'
}

type ButtonProps = {
  isLoading?: boolean;
  size?: keyof typeof ButtonSize;
  variant?: keyof typeof ButtonVariant;
  isLink?: boolean;
  href?: string;
} & React.ComponentPropsWithRef<'button'>;

export default function Button({
  children,
  className,
  disabled,
  isLoading = false,
  size = 'base',
  variant = 'black',
  isLink = false,
  href = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      type='button'
      disabled={disabled || isLoading}
      className={clsxm(
        'button inline-flex items-center justify-center rounded-md md:rounded-lg',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
        'transition-colors duration-75',
        // * SIZE BUTTON
        [
          size === 'sm' && [
            'min-h-[26px] py-0.5 px-[10px] font-medium md:min-h-[30px] md:py-1.5 md:px-4',
            'text-xs md:text-sm',
          ],
          size === 'base' && [
            'min-h-[30px] py-1.5 px-[14px] font-semibold md:min-h-[34px] md:py-2 md:px-5',
            'text-sm md:text-base',
          ],
          size === 'lg' && [
            'min-h-[34px] py-2 px-[18px] font-semibold md:min-h-[38px] md:py-2.5 md:px-6',
            'text-base md:text-lg',
          ],
          // * VARIANT BUTTON
          [
            variant === 'blue' && [
              'bg-blue-600 text-white',
              'hover:bg-blue-700',
              'active:bg-blue-800',
              'disabled:bg-blue-700 disabled:brightness-90 disabled:hover:bg-blue-700',
            ],
          ],
          [
            variant === 'black' && [
              'bg-black text-white',
              'hover:bg-gray-500',
              'active:bg-gray-600',
              'disabled:bg-gray-500 disabled:brightness-90 disabled:hover:bg-gray-500',
            ]
          ],
          'disabled:cursor-not-allowed',
          isLoading && 'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        ]
      )}
      {...rest}
    >
      {
        isLoading && (
          <div className={clsxm(
            'relative mx-auto text-white'
          )}>
            <FaSpinner className='animate-spin'/>
          </div>
        )
      }
      {
        isLink ? (
          <Link href={{pathname:`${href}`}}>{children}</Link>
        ) : (children)
      }

    </button>
  )
}