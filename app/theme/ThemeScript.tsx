import Script from 'next/script';

export default function ThemeScript() {
    return (
        <Script id="theme-init" strategy="beforeInteractive">
            {`
        (function() {
          try {
            var theme = localStorage.getItem('theme');
            if (!theme) {
              var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              theme = systemDark ? 'dark' : 'light';
            }
            document.documentElement.setAttribute('data-theme', theme);
            document.documentElement.classList.add('theme-loaded');
          } catch(e) {
            console.error('Theme initialization error:', e);
          }
        })();
      `}
        </Script>
    );
}