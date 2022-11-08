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

  nav {
    position: relative;
    width: 100%;

    top: 0;

    float: right;
    width: fit-content;
  }

  ul {
    list-style: none;
    display: block;
  }

  ul li {
    float: left;
    margin-right: 33px;
    margin-top: 16px;
    mix-blend-mode: normal;
    opacity: 0.75;
  }

  a {
    cursor: pointer;
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
    height: 85px;
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
              <a href="/earth" className={spartanBold.className}>
                heart
              </a>
            </li>
            <li>
              <a className={spartanBold.className}>mars</a>
            </li>
            <li>
              <a className={spartanBold.className}>jupiter</a>
            </li>
            <li>
              <a className={spartanBold.className}>saturn</a>
            </li>
            <li>
              <a className={spartanBold.className}>uranus</a>
            </li>
            <li>
              <a className={spartanBold.className}>neptune</a>
            </li>
          </ul>
        </nav>
        <div className="line" />
      </div>
    </header>
  );
}
