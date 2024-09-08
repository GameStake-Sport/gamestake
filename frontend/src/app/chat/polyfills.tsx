"use client"
if (typeof window !== 'undefined') {
    import('buffer').then(({ Buffer }) => {
      window.Buffer = window.Buffer ?? Buffer;
    });
  }  