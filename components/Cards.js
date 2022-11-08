/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const cardsStyles = css`
  display: flex;
  gap: 30px;
  position: absolute;
  left: 165px;
  top: 840px;

  .card {
    width: 255px;
    height: 128px;
    border: 1px solid #38384f;

    h4 {
      text-transform: uppercase;
      margin-left: 23px;
      margin-top: 20px;
      margin-bottom: 0;
    }

    h2 {
      text-transform: uppercase;
      font-size: 40px;
      margin: 0;
      /* margin-left: 23px;
      margin-top: 16px; */
      position: relative;
      left: 23px;
      top: 8px;
    }
  }
`;

export default function Cards() {
  return (
    <div css={cardsStyles}>
      <div className="card">
        <h4>rotation time</h4>
        <h2>58.6 days</h2>
      </div>
      <div className="card">
        <h4>revolution time</h4>
        <h2>87.97 days</h2>
      </div>
      <div className="card">
        <h4>radius</h4>
        <h2>2,439.7 km</h2>
      </div>
      <div className="card">
        <h4>average temp.</h4>
        <h2>430°c</h2>
      </div>
    </div>
  );
}
