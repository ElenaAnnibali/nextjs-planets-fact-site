/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { League_Spartan } from '@next/font/google';
import Link from 'next/link';

const spartanBold = League_Spartan({
  weight: '700',
  subset: ['latin'],
});

const headerStyles = css`
  text-transform: uppercase;

  a {
    color: #ffffff;
    text-decoration: none;

    mix-blend-mode: normal;
    opacity: 0.75;
  }

  nav {
    width: fit-content;
  }

  ul {
    display: flex;
    gap: 33px;
    list-style-type: none;
    margin-left: 735px;
    margin-right: 0;
  }

  ul > li {
    /* float: left; */
    display: inline-block;
    margin-top: 16px;
    mix-blend-mode: normal;
    opacity: 0.75;
  }

  .title {
    position: absolute;
    width: 109px;
    height: 36px;
    left: 32px;
    top: 22px;

    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -1.05px;
    text-transform: uppercase;

    color: #ffffff;
  }
  .line {
    position: absolute;
    min-width: 1440px;
    width: 100%;
    height: 27px;
    border-bottom: 1px solid #ffffff;
    mix-blend-mode: normal;
    opacity: 0.2;
  }
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      <div>
        <span className="title">The planets</span>
        <nav>
          <ul>
            <li>
              <Link href="/" className={spartanBold.className}>
                mercury
              </Link>
            </li>
            <li>
              <Link href="/venus" className={spartanBold.className}>
                venus
              </Link>
            </li>
            <li>
              <Link href="/earth" className={spartanBold.className}>
                earth
              </Link>
            </li>
            <li>
              <Link href="/mars" className={spartanBold.className}>
                mars
              </Link>
            </li>
            <li>
              <Link href="/jupiter" className={spartanBold.className}>
                jupiter
              </Link>
            </li>
            <li>
              <Link href="/saturn" className={spartanBold.className}>
                saturn
              </Link>
            </li>
            <li>
              <Link href="/uranus" className={spartanBold.className}>
                uranus
              </Link>
            </li>
            <li>
              <Link href="/neptune" className={spartanBold.className}>
                neptune
              </Link>
            </li>
          </ul>
        </nav>
        <div className="line" />
      </div>
    </header>
  );
}
