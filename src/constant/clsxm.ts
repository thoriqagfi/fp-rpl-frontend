import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function clsxm(...className: ClassValue[]): string {
  return twMerge(clsx(...className));
}