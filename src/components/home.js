/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Home = () => {
  // test out incoming context
  const data = useGlobalContext()
  console.log(data)

  return (
    <div
      css={css`
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .show-modal {
          font-family: var(--fontFamily);
          display: inline-block;
          padding: 0.5rem 1rem;
          background: transparent;
          transition: var(--transition);
          border: 2px solid var(--secondaryColor);
          border-radius: var(--borderRadius);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          cursor: pointer;

          &:hover {
            background: var(--secondaryColor);
            color: var(--lightColor);
          }
        }

        .toggle {
          position: fixed;
          top: 2rem;
          left: 3rem;
          font-size: 2rem;
          background: transparent;
          border-color: transparent;
          cursor: pointer;
          transition: var(--transition);
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
          100% {
            transform: scale(1);
          }
        }
      `}
    >
      <button className="toggle">
        <FaBars />
      </button>
      <button className="show-modal">show modal</button>
    </div>
  )
}

export default Home
