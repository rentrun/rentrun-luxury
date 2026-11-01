import Script from "next/script";

export default function LuxuryChauffeurServiceLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GT-NFJ5XPRV"
        strategy="afterInteractive"
        id="luxury-chauffeur-google-tag-loader"
      />
      <Script
        id="luxury-chauffeur-google-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-NFJ5XPRV');
            gtag('config', 'AW-16638465942');
          `,
        }}
      />
      {children}
    </>
  );
}
