import { css, Global } from '@emotion/react';
import { Antonio, League_Spartan } from '@next/font/google';

const antonio = Antonio({
  weight: '500',
  subset: ['Latin'],
});

const leagueSpartan = League_Spartan({
  weight: '400',
  subset: ['latin'],
});

const leagueSpartanLight = League_Spartan({
  weight: '200',
  subset: ['latin'],
});

const spartanBold = League_Spartan({
  weight: '700',
  subset: ['latin'],
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          html,
          body {
            font-family: ${leagueSpartan.style.fontFamily}, sans-serif;
            font-size: 14px;

            margin: 0;
            padding: 0;
            background-color: #fefbed;
            box-sizing: border-box;
            background-color: #070724;
            color: #fff;
          }
          * {
            box-sizing: border-box;
          }
          h1,
          h2,
          span {
            font-family: ${antonio.style.fontFamily}, sans-serif;
          }
          p {
            font-family: ${leagueSpartanLight.style.fontFamily}, sans-serif;

            font-size: 14px;
            line-height: 25px;
          }
          .source {
            font-family: ${leagueSpartanLight.style.fontFamily}, sans-serif;

            font-size: 14px;
            mix-blend-mode: normal;
            opacity: 0.5;

            a {
              font-family: ${spartanBold.style.fontFamily}, sans-serif;
              text-decoration: underline;
              line-height: 25px;
              margin-left: 4px;
              color: #fff;
              cursor: pointer;
            }

            i {
              background: url('/images/icon-source.svg');
              position: absolute;
              width: 12px;
              height: 12px;
              left: 122px;
              top: 6px;
            }
          }

          .number,
          h4 {
            font-family: ${spartanBold.style.fontFamily}, sans-serif;
            color: #ffffff;

            mix-blend-mode: normal;
            opacity: 0.5;
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
