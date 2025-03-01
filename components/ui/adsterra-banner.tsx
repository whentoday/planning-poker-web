import Script from "next/script";

const AdsterraBanner = () => {
  return (
    <>
      <Script
        id="adsterra-options"
        dangerouslySetInnerHTML={{
          __html: `
                atOptions = {
                    'key' : '00918d65ec046cdcd2377002a5bda1cf',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                };
            `,
        }}
      />
      <Script
        src={`//www.highperformanceformat.com/00918d65ec046cdcd2377002a5bda1cf/invoke.js`}
      />
    </>
  );
};

export default AdsterraBanner;
