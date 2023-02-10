export const Logo = ({ width, height }: { width: number; height: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 204 42"
    >
      <path d="M89.544 57V51.912H93.96V28.584H89.544V23.496H104.76V28.584H100.296V51.912H104.76V57H89.544ZM120.503 57.576C118.647 57.576 116.999 57.272 115.559 56.664C114.118 56.056 112.903 55.176 111.911 54.024C110.951 52.872 110.215 51.496 109.703 49.896C109.191 48.264 108.935 46.44 108.935 44.424C108.935 42.408 109.191 40.6 109.703 39C110.215 37.4 110.951 36.04 111.911 34.92C112.903 33.768 114.118 32.888 115.559 32.28C116.999 31.672 118.647 31.368 120.503 31.368C123.031 31.368 125.111 31.928 126.743 33.048C128.407 34.168 129.607 35.72 130.343 37.704L125.303 39.96C125.015 38.904 124.471 38.04 123.671 37.368C122.903 36.664 121.847 36.312 120.503 36.312C118.775 36.312 117.479 36.856 116.615 37.944C115.783 39.032 115.367 40.456 115.367 42.216V46.776C115.367 48.536 115.783 49.96 116.615 51.048C117.479 52.104 118.775 52.632 120.503 52.632C121.975 52.632 123.111 52.264 123.911 51.528C124.711 50.76 125.335 49.816 125.783 48.696L130.487 50.952C129.655 53.16 128.391 54.824 126.695 55.944C124.999 57.032 122.935 57.576 120.503 57.576ZM145.118 57.576C143.262 57.576 141.598 57.272 140.126 56.664C138.686 56.024 137.454 55.144 136.43 54.024C135.438 52.872 134.67 51.496 134.126 49.896C133.582 48.264 133.31 46.44 133.31 44.424C133.31 42.44 133.566 40.648 134.078 39.048C134.622 37.448 135.39 36.088 136.382 34.968C137.374 33.816 138.59 32.936 140.03 32.328C141.47 31.688 143.102 31.368 144.926 31.368C146.878 31.368 148.574 31.704 150.014 32.376C151.454 33.048 152.638 33.96 153.566 35.112C154.494 36.264 155.182 37.608 155.63 39.144C156.11 40.648 156.35 42.264 156.35 43.992V46.008H139.694V46.632C139.694 48.456 140.206 49.928 141.23 51.048C142.254 52.136 143.774 52.68 145.79 52.68C147.326 52.68 148.574 52.36 149.534 51.72C150.526 51.08 151.406 50.264 152.174 49.272L155.486 52.968C154.462 54.408 153.054 55.544 151.262 56.376C149.502 57.176 147.454 57.576 145.118 57.576ZM145.022 35.976C143.39 35.976 142.094 36.52 141.134 37.608C140.174 38.696 139.694 40.104 139.694 41.832V42.216H149.966V41.784C149.966 40.056 149.534 38.664 148.67 37.608C147.838 36.52 146.622 35.976 145.022 35.976ZM162.139 23.496H177.643C179.019 23.496 180.251 23.704 181.339 24.12C182.459 24.536 183.403 25.112 184.171 25.848C184.939 26.584 185.515 27.496 185.899 28.584C186.315 29.64 186.523 30.808 186.523 32.088C186.523 33.368 186.347 34.456 185.995 35.352C185.675 36.216 185.227 36.936 184.651 37.512C184.107 38.088 183.467 38.52 182.731 38.808C182.027 39.096 181.291 39.256 180.523 39.288V39.576C181.259 39.576 182.043 39.72 182.875 40.008C183.739 40.296 184.523 40.76 185.227 41.4C185.963 42.008 186.571 42.808 187.051 43.8C187.531 44.76 187.771 45.96 187.771 47.4C187.771 48.744 187.547 50.008 187.099 51.192C186.683 52.344 186.091 53.352 185.323 54.216C184.555 55.08 183.643 55.768 182.587 56.28C181.531 56.76 180.379 57 179.131 57H162.139V23.496ZM168.475 51.624H177.307C178.523 51.624 179.467 51.32 180.139 50.712C180.811 50.072 181.147 49.16 181.147 47.976V46.344C181.147 45.16 180.811 44.248 180.139 43.608C179.467 42.968 178.523 42.648 177.307 42.648H168.475V51.624ZM168.475 37.464H176.299C177.451 37.464 178.347 37.16 178.987 36.552C179.627 35.912 179.947 35.032 179.947 33.912V32.424C179.947 31.304 179.627 30.44 178.987 29.832C178.347 29.192 177.451 28.872 176.299 28.872H168.475V37.464ZM193.583 57V31.944H199.727V37.128H199.967C200.127 36.456 200.367 35.816 200.687 35.208C201.039 34.568 201.487 34.008 202.031 33.528C202.575 33.048 203.215 32.664 203.951 32.376C204.719 32.088 205.599 31.944 206.591 31.944H207.935V37.752H206.015C203.935 37.752 202.367 38.056 201.311 38.664C200.255 39.272 199.727 40.264 199.727 41.64V57H193.583ZM222.321 57.576C220.465 57.576 218.801 57.272 217.329 56.664C215.889 56.024 214.657 55.144 213.633 54.024C212.641 52.872 211.873 51.496 211.329 49.896C210.785 48.264 210.513 46.44 210.513 44.424C210.513 42.44 210.769 40.648 211.281 39.048C211.825 37.448 212.593 36.088 213.585 34.968C214.577 33.816 215.793 32.936 217.233 32.328C218.673 31.688 220.305 31.368 222.129 31.368C224.081 31.368 225.777 31.704 227.217 32.376C228.657 33.048 229.841 33.96 230.769 35.112C231.697 36.264 232.385 37.608 232.833 39.144C233.313 40.648 233.553 42.264 233.553 43.992V46.008H216.897V46.632C216.897 48.456 217.409 49.928 218.433 51.048C219.457 52.136 220.977 52.68 222.993 52.68C224.529 52.68 225.777 52.36 226.737 51.72C227.729 51.08 228.609 50.264 229.377 49.272L232.689 52.968C231.665 54.408 230.257 55.544 228.465 56.376C226.705 57.176 224.657 57.576 222.321 57.576ZM222.225 35.976C220.593 35.976 219.297 36.52 218.337 37.608C217.377 38.696 216.897 40.104 216.897 41.832V42.216H227.169V41.784C227.169 40.056 226.737 38.664 225.873 37.608C225.041 36.52 223.825 35.976 222.225 35.976ZM257.39 57C256.046 57 254.974 56.616 254.174 55.848C253.406 55.048 252.926 53.992 252.734 52.68H252.446C252.03 54.312 251.182 55.544 249.902 56.376C248.622 57.176 247.038 57.576 245.15 57.576C242.59 57.576 240.622 56.904 239.246 55.56C237.87 54.216 237.182 52.424 237.182 50.184C237.182 47.592 238.11 45.672 239.966 44.424C241.822 43.144 244.462 42.504 247.886 42.504H252.158V40.68C252.158 39.272 251.79 38.184 251.054 37.416C250.318 36.648 249.134 36.264 247.502 36.264C246.062 36.264 244.894 36.584 243.998 37.224C243.134 37.832 242.398 38.568 241.79 39.432L238.142 36.168C239.07 34.728 240.302 33.576 241.838 32.712C243.374 31.816 245.406 31.368 247.934 31.368C251.326 31.368 253.902 32.136 255.662 33.672C257.422 35.208 258.302 37.416 258.302 40.296V52.104H260.798V57H257.39ZM247.214 53.112C248.59 53.112 249.758 52.808 250.718 52.2C251.678 51.592 252.158 50.696 252.158 49.512V46.2H248.222C245.022 46.2 243.422 47.224 243.422 49.272V50.088C243.422 51.112 243.742 51.88 244.382 52.392C245.054 52.872 245.998 53.112 247.214 53.112ZM265.771 21.48H271.915V42.888H272.155L275.467 38.376L281.083 31.944H288.043L279.403 41.64L288.955 57H281.659L275.227 45.768L271.915 49.368V57H265.771V21.48ZM301.68 57.576C299.824 57.576 298.16 57.272 296.688 56.664C295.248 56.024 294.016 55.144 292.992 54.024C292 52.872 291.232 51.496 290.688 49.896C290.144 48.264 289.872 46.44 289.872 44.424C289.872 42.44 290.128 40.648 290.64 39.048C291.184 37.448 291.952 36.088 292.944 34.968C293.936 33.816 295.152 32.936 296.592 32.328C298.032 31.688 299.664 31.368 301.488 31.368C303.44 31.368 305.136 31.704 306.576 32.376C308.016 33.048 309.2 33.96 310.128 35.112C311.056 36.264 311.744 37.608 312.192 39.144C312.672 40.648 312.912 42.264 312.912 43.992V46.008H296.256V46.632C296.256 48.456 296.768 49.928 297.792 51.048C298.816 52.136 300.336 52.68 302.352 52.68C303.888 52.68 305.136 52.36 306.096 51.72C307.088 51.08 307.968 50.264 308.736 49.272L312.048 52.968C311.024 54.408 309.616 55.544 307.824 56.376C306.064 57.176 304.016 57.576 301.68 57.576ZM301.584 35.976C299.952 35.976 298.656 36.52 297.696 37.608C296.736 38.696 296.256 40.104 296.256 41.832V42.216H306.528V41.784C306.528 40.056 306.096 38.664 305.232 37.608C304.4 36.52 303.184 35.976 301.584 35.976ZM318.318 57V31.944H324.462V37.128H324.702C324.862 36.456 325.102 35.816 325.422 35.208C325.774 34.568 326.222 34.008 326.766 33.528C327.31 33.048 327.95 32.664 328.686 32.376C329.454 32.088 330.334 31.944 331.326 31.944H332.67V37.752H330.75C328.67 37.752 327.102 38.056 326.046 38.664C324.99 39.272 324.462 40.264 324.462 41.64V57H318.318ZM345.369 57.576C342.969 57.576 340.953 57.176 339.321 56.376C337.689 55.544 336.249 54.408 335.001 52.968L338.745 49.32C339.673 50.376 340.681 51.208 341.769 51.816C342.889 52.424 344.169 52.728 345.609 52.728C347.081 52.728 348.137 52.472 348.777 51.96C349.449 51.448 349.785 50.744 349.785 49.848C349.785 49.112 349.545 48.536 349.065 48.12C348.617 47.672 347.833 47.368 346.713 47.208L344.217 46.872C341.497 46.52 339.417 45.752 337.977 44.568C336.569 43.352 335.865 41.592 335.865 39.288C335.865 38.072 336.089 36.984 336.537 36.024C336.985 35.032 337.625 34.2 338.457 33.528C339.289 32.824 340.281 32.296 341.433 31.944C342.617 31.56 343.929 31.368 345.369 31.368C346.585 31.368 347.657 31.464 348.585 31.656C349.545 31.816 350.409 32.072 351.177 32.424C351.945 32.744 352.649 33.16 353.289 33.672C353.929 34.152 354.553 34.696 355.161 35.304L351.561 38.904C350.825 38.136 349.945 37.496 348.921 36.984C347.897 36.472 346.777 36.216 345.561 36.216C344.217 36.216 343.241 36.456 342.633 36.936C342.057 37.416 341.769 38.04 341.769 38.808C341.769 39.64 342.009 40.28 342.489 40.728C343.001 41.144 343.849 41.448 345.033 41.64L347.577 41.976C352.985 42.744 355.689 45.208 355.689 49.368C355.689 50.584 355.433 51.704 354.921 52.728C354.441 53.72 353.753 54.584 352.857 55.32C351.961 56.024 350.873 56.584 349.593 57C348.345 57.384 346.937 57.576 345.369 57.576Z" fill="white" />
      <path d="M39.5 0C1.37153 0 0 1.37153 0 39.5C0 77.6285 1.37153 79 39.5 79C77.6285 79 79 77.6285 79 39.5C79 1.37153 77.6285 0 39.5 0Z" fill="#87DDFD" />
      <path d="M56.9098 51.1081C57.711 51.1081 58.3606 50.4585 58.3606 49.6572C58.3606 48.856 57.711 48.2064 56.9098 48.2064C56.1085 48.2064 55.4589 48.856 55.4589 49.6572C55.4589 50.4585 56.1085 51.1081 56.9098 51.1081Z" fill="white" />
      <path d="M59.8114 39.6757C57.8818 39.6757 56.5615 39.5451 55.4444 39.342V39.2839L52.5428 20.4234C52.495 20.11 52.3456 19.821 52.1176 19.6008C51.8895 19.3806 51.5954 19.2415 51.2806 19.2047L39.6741 17.7539C39.3428 17.7113 39.0071 17.7849 38.724 17.9622C38.4409 18.1394 38.2281 18.4094 38.1217 18.7259L35.4958 26.6039L27.6614 27.9096C27.3878 27.9532 27.1326 28.075 26.9267 28.2604C26.7208 28.4457 26.5728 28.6867 26.5007 28.9542L23.8022 38.3844C22.6125 38.1958 21.1762 38.0508 19.1886 38.0508C18.3907 38.0508 17.7378 38.7036 17.7378 39.5016C17.7378 40.2995 18.3907 40.9524 19.1886 40.9524C21.5825 40.9524 23.0478 41.1555 24.339 41.4311L33.8563 60.4658C34.074 60.901 34.4947 61.1912 34.9735 61.2492C35.0315 61.2637 35.0895 61.2637 35.1476 61.2637C35.5683 61.2637 35.989 61.0751 36.2647 60.7414L42.5032 53.2553L45.724 56.4906C46.0577 56.8243 46.5509 56.9693 47.0152 56.8823C47.4795 56.8097 47.8712 56.4906 48.0743 56.0553L54.4143 42.113C55.7636 42.3742 57.374 42.5773 59.8114 42.5773C60.6093 42.5773 61.2622 41.9244 61.2622 41.1265C61.2622 40.3285 60.6093 39.6757 59.8114 39.6757ZM46.2608 38.0508C42.7063 38.0508 40.9073 38.486 39.1518 38.9067C37.4979 39.2985 35.931 39.6757 32.7247 39.6757C29.736 39.6757 28.1837 39.3565 26.6458 38.9938L29.0396 30.6226L34.4657 29.7231L33.7693 31.7832C33.5227 32.5522 33.9289 33.3646 34.6833 33.6258C34.8429 33.6693 35.0025 33.6983 35.1476 33.6983C35.7569 33.6983 36.3227 33.3211 36.5258 32.7118L37.9766 28.3593L40.5011 20.7716L49.8443 21.9467L52.4122 38.6746C50.9179 38.3409 49.1769 38.0508 46.2608 38.0508Z" fill="white" />
      <path d="M24.2665 58.3621C25.4684 58.3621 26.4427 57.3878 26.4427 56.1859C26.4427 54.984 25.4684 54.0097 24.2665 54.0097C23.0646 54.0097 22.0903 54.984 22.0903 56.1859C22.0903 57.3878 23.0646 58.3621 24.2665 58.3621Z" fill="white" />
      <path d="M22.0903 51.1081C22.8915 51.1081 23.5411 50.4585 23.5411 49.6572C23.5411 48.856 22.8915 48.2064 22.0903 48.2064C21.289 48.2064 20.6395 48.856 20.6395 49.6572C20.6395 50.4585 21.289 51.1081 22.0903 51.1081Z" fill="white" />
    </svg>
  );
};