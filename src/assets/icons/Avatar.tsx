import { FC, SVGProps } from 'react'
export const Avatar: FC<SVGProps<SVGSVGElement>> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="264"
    height="280"
    className={className}
  >
    <defs>
      <path
        id="c"
        d="M12 160c0 66.274 53.726 120 120 120s120-53.726 120-120h12V0H0v160h12Z"
      />
      <path
        id="e"
        d="M124 144.611V163h4c39.765 0 72 32.235 72 72v9H0v-9c0-39.765 32.235-72 72-72h4v-18.389c-17.237-8.189-29.628-24.924-31.695-44.73C38.48 99.058 34 94.052 34 88V74c0-5.946 4.325-10.882 10-11.834V56c0-30.928 25.072-56 56-56s56 25.072 56 56v6.166c5.675.952 10 5.888 10 11.834v14c0 6.052-4.48 11.058-10.305 11.881-2.067 19.806-14.458 36.541-31.695 44.73Z"
      />
      <circle id="a" cx="120" cy="120" r="120" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(12 40)">
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use xlinkHref="#a" fill="#E6E6E6" />
        <g fill="#65C9FF" mask="url(#b)">
          <path d="M0 0h240v240H0z" />
        </g>
      </g>
      <mask id="d" fill="#fff">
        <use xlinkHref="#c" />
      </mask>
      <g mask="url(#d)">
        <g transform="translate(32 36)">
          <mask id="f" fill="#fff">
            <use xlinkHref="#e" />
          </mask>
          <use xlinkHref="#e" fill="#D0C6AC" />
          <g fill="#EDB98A" mask="url(#f)">
            <path d="M0 0h264v280H0z" />
          </g>
          <path
            fill="#000"
            fillOpacity=".1"
            d="M156 79v23c0 30.928-25.072 56-56 56s-56-25.072-56-56V79v15c0 30.928 25.072 56 56 56s56-25.072 56-56V79Z"
            mask="url(#f)"
          />
        </g>
        <g transform="translate(0 170)">
          <defs>
            <path
              id="g"
              d="M165.96 29.295c36.976 3.03 66.04 34 66.04 71.757V110H32v-8.948c0-38.1 29.592-69.287 67.045-71.832-.03.373-.045.75-.045 1.128 0 11.863 14.998 21.48 33.5 21.48 18.502 0 33.5-9.617 33.5-21.48 0-.353-.013-.704-.04-1.053Z"
            />
          </defs>
          <mask id="h" fill="#fff">
            <use xlinkHref="#g" />
          </mask>
          <use xlinkHref="#g" fill="#E6E6E6" />
          <g fill="#25557C" mask="url(#h)">
            <path d="M0 0h264v110H0z" />
          </g>
          <g fill="#000" fillOpacity=".16" mask="url(#h)" opacity=".6">
            <ellipse
              cx="40.5"
              cy="27.848"
              rx="39.635"
              ry="26.914"
              transform="translate(92 4)"
            />
          </g>
        </g>
        <g fill="#000">
          <g transform="translate(78 134)">
            <defs>
              <path
                id="i"
                d="M35.118 15.128C36.176 24.62 44.226 32 54 32c9.804 0 17.874-7.426 18.892-16.96.082-.767-.775-2.04-1.85-2.04H37.088c-1.08 0-2.075 1.178-1.97 2.128Z"
              />
            </defs>
            <mask id="j" fill="#fff">
              <use xlinkHref="#i" />
            </mask>
            <use xlinkHref="#i" fillOpacity=".7" />
            <rect
              width="31"
              height="16"
              x="39"
              y="2"
              fill="#FFF"
              mask="url(#j)"
              rx="5"
            />
            <g fill="#FF4F6D" mask="url(#j)">
              <g transform="translate(38 24)">
                <circle cx="11" cy="11" r="11" />
                <circle cx="21" cy="11" r="11" />
              </g>
            </g>
          </g>
          <path
            fillOpacity=".16"
            d="M120 130c0 4.418 5.373 8 12 8s12-3.582 12-8"
          />
          <g fillOpacity=".6" transform="translate(76 90)">
            <circle cx="30" cy="22" r="6" />
            <circle cx="82" cy="22" r="6" />
          </g>
          <g fillOpacity=".6" fillRule="nonzero">
            <path d="M91.63 99.159c3.915-5.51 14.648-8.598 23.893-6.328a2 2 0 0 0 .954-3.884c-10.737-2.637-23.165.94-28.107 7.894a2 2 0 0 0 3.26 2.318ZM172.37 99.159c-3.915-5.51-14.648-8.598-23.893-6.328a2 2 0 0 1-.954-3.884c10.737-2.637 23.165.94 28.108 7.894a2 2 0 0 1-3.26 2.318Z" />
          </g>
        </g>
        <defs>
          <path id="k" d="M0 0h264v280H0z" />
          <path
            id="m"
            d="M175.126 166.898c.715 2.24 1.749 4.333 3.43 5.788 1.62 1.404 4.512 1.06 6.543 1.117 1.672.048 3.346.053 5.016-.02.839-.036 1.213 1.015.534 1.499-.13.092-.26.18-.39.262a39.362 39.362 0 0 1-3.25 1.812c-2.524 1.258-5.188 2.244-7.982 2.734-1.916.337-3.816.4-5.654.177a9.828 9.828 0 0 0 1.699 1.94c1.73 1.501 4.816 1.133 6.983 1.194 1.784.052 3.57.057 5.353-.02.895-.039 1.295 1.084.57 1.601a8.08 8.08 0 0 1-.416.28 41.99 41.99 0 0 1-3.469 1.937c-2.693 1.345-5.536 2.398-8.518 2.922-5.5.966-10.87-.177-15.194-3.708a24.905 24.905 0 0 1-3.381-3.36v-2.442a56.187 56.187 0 0 0 18.126-13.713Zm-93.81-15.304a140.419 140.419 0 0 1-2.31 4.597c-4.795 9.11-10.764 20.602-22.507 21.405-1.088.075-1.519 1.347-.67 1.992 11.12 8.453 36.432 13.6 45.445 11.982a54.359 54.359 0 0 0 7.726-1.96v-8.999a56.208 56.208 0 0 1-27.685-29.017Zm114.59-82.914c.175 5.507-.617 11.227-1.721 16.616-.995 4.852-4.315 8.675-5.348 13.433-4.027-13.68-19.404-18.245-28.595-27.574 1.997 3.793 5.049 6.948 7.052 10.678-9.247-5.665-18.206-13.88-22.032-24.295-.707 5.398-2.716 10.39-6.108 14.666-3.011 3.796-7.582 7.87-12.295 9.34 2.428-5.507 4.502-11.217 6.407-16.925-2.016 2.617-8.697 13.734-10.375 16.49-1.656 2.72-3.513 5.317-5.507 7.803-.933 1.163-1.929 2.287-2.93 3.391a67.183 67.183 0 0 1-1.788 1.895c-.215.219-1.842 2.01-.912.806-2.216 2.802-5.478 4.979-8.31 7.109-2.853 2.144-5.96 3.968-9.192 5.476-7.159 3.343-14.512 4.56-22.32 3.163 1.196.299 3.721-.846 4.957-1.182 1.809-.492 3.474-1.117 5.113-2.024a53.85 53.85 0 0 0 9.176-6.418c-2.707 1.152-4.905 3.334-7.664 4.543-2.287 1.003-4.547 1.526-7.032 1.766-5.462.529-11.995-.72-16.721-3.587-5.492-3.333-8.542-9.051-9.99-15.137-1.68-7.067-.635-15.04 3.328-21.074.135 2.143 4.436 3.064 7.916 2.527 9.658-1.49 15.403-38.048 40.427-44.566 19.961-5.2 34.21 3.874 35.42 4.657 1.437.928 1.988.54 3.621.148 6.346-1.52 13.258-2.209 19.705-.927 6.34 1.262 12.418 4.546 17.559 8.378 9.527 7.101 17.762 18.582 18.159 30.824Z"
          />
        </defs>
        <mask id="l" fill="#fff">
          <use xlinkHref="#k" />
        </mask>
        <g mask="url(#l)">
          <g transform="translate(-1)">
            <mask id="n" fill="#fff">
              <use xlinkHref="#m" />
            </mask>
            <use xlinkHref="#m" fill="#1D2633" />
            <g fill="#2C1B18" mask="url(#n)">
              <path d="M0 0h264v280H0z" />
            </g>
            <path
              fill="#000"
              fillOpacity=".16"
              d="M175.126 166.898c.715 2.24 1.749 4.333 3.43 5.788 1.62 1.404 4.512 1.06 6.543 1.117 1.672.048 3.346.053 5.016-.02.839-.036 1.213 1.015.534 1.499-.13.092-.26.18-.39.262a39.362 39.362 0 0 1-3.25 1.812c-2.524 1.258-5.188 2.244-7.982 2.734-1.916.337-3.816.4-5.654.177a9.828 9.828 0 0 0 1.699 1.94c1.73 1.501 4.816 1.133 6.983 1.194 1.784.052 3.57.057 5.353-.02.895-.039 1.295 1.084.57 1.601a8.08 8.08 0 0 1-.416.28 41.99 41.99 0 0 1-3.469 1.937c-2.693 1.345-5.536 2.398-8.518 2.922-5.5.966-10.87-.177-15.194-3.708a24.905 24.905 0 0 1-3.381-3.36v-2.442a56.187 56.187 0 0 0 18.126-13.713Zm-93.81-15.304a140.419 140.419 0 0 1-2.31 4.597c-4.795 9.11-10.764 20.602-22.507 21.405-1.088.075-1.519 1.347-.67 1.992 11.12 8.453 36.432 13.6 45.445 11.982a54.359 54.359 0 0 0 7.726-1.96v-8.999a56.208 56.208 0 0 1-27.685-29.017Z"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)
