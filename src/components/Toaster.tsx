import * as React from 'react';
import { toast, ToastBar, Toaster, ToastOptions } from 'react-hot-toast';
import { HiX } from 'react-icons/hi';
import { RiErrorWarningLine } from 'react-icons/ri';

export const Toast = () => {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: '#fff',
          color: '#000',
          zIndex: 9999,
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== 'loading' && (
                  <button
                    className='rounded-full p-1 ring-primary-400 transition hover:bg-[#444] focus:outline-none focus-visible:ring'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    <HiX />
                  </button>
                )}
              </>
            )}
        </ToastBar>
      )}
    </Toaster>
  )
}