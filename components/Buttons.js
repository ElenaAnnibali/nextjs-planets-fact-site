/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { League_Spartan } from '@next/font/google';

const spartanBold = League_Spartan({
  weight: '700',
  subset: ['latin'],
});

const buttonsStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  width: 350px;
  height: 176px;
  left: 925px;
  top: 577px;
  text-transform: uppercase;

  button {
    width: 350px;
    height: 48px;
    mix-blend-mode: normal;
    // opacity: 0.2;
    border: 1px solid #38384f;
    color: #38384f;
    background-color: transparent;
    text-align: left;
    cursor: pointer;

    :hover {
      background-color: #38384f;
    }

    :active {
      background-color: #419ebb;
    }

    span {
      font-size: 12px;
      line-height: 25px;
      /* identical to box height, or 208% */

      letter-spacing: 2.57143px;
      text-transform: uppercase;

      margin-left: 25px;

      color: #ffffff;
    }

    .number {
      margin-left: 28px;
      margin-top: 12px;
    }
  }
`;

export default function Buttons() {
  return (
    <div css={buttonsStyles}>
      <button>
        <span className="number">01</span>
        <span className={spartanBold.className}>overview</span>
      </button>
      <button>
        <span className="number">02</span>
        <span className={spartanBold.className}>internal structure</span>
      </button>
      <button>
        <span className="number">03</span>
        <span className={spartanBold.className}>surface geology</span>
      </button>
    </div>
  );
}
