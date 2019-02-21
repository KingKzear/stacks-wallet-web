import React from 'react'
import { Box } from '../primitives'
import { computeSize } from './helper'
import PropTypes from 'prop-types'

const DefaultPaths = () => (
  <>
    <path
      d="M32.5625 16.998C34.9609 16.998 36.4062 15.7949 36.4062 13.8105C36.4062 12.3105 35.375 11.2246 33.8438 11.0527V10.9902C34.9688 10.8027 35.8516 9.73242 35.8516 8.53711C35.8516 6.83398 34.5391 5.72461 32.5391 5.72461H28.0391V16.998H32.5625ZM29.7891 7.1543H32.1172C33.3828 7.1543 34.1016 7.73242 34.1016 8.7793C34.1016 9.89648 33.2656 10.5215 31.75 10.5215H29.7891V7.1543ZM29.7891 15.5684V11.8574H32.1016C33.7578 11.8574 34.6172 12.4824 34.6172 13.7012C34.6172 14.9199 33.7812 15.5684 32.2031 15.5684H29.7891Z"
      fill="currentColor"
    />
    <path
      d="M37.9334 16.998H39.6209V5.72461H37.9334V16.998Z"
      fill="currentColor"
    />
    <path
      d="M45.0466 17.1543C47.3981 17.1543 48.945 15.5371 48.945 12.8887C48.945 10.248 47.3903 8.63086 45.0466 8.63086C42.7028 8.63086 41.1481 10.248 41.1481 12.8887C41.1481 15.5371 42.695 17.1543 45.0466 17.1543ZM45.0466 15.7637C43.7262 15.7637 42.8669 14.7168 42.8669 12.8887C42.8669 11.0684 43.7262 10.0215 45.0466 10.0215C46.3669 10.0215 47.2262 11.0684 47.2262 12.8887C47.2262 14.7168 46.3747 15.7637 45.0466 15.7637Z"
      fill="currentColor"
    />
    <path
      d="M57.4644 11.6074C57.3159 9.99023 56.0269 8.63086 53.9097 8.63086C51.5737 8.63086 50.0425 10.2793 50.0425 12.8887C50.0425 15.5449 51.5737 17.1543 53.9253 17.1543C55.9019 17.1543 57.3003 15.9668 57.48 14.2168H55.855C55.6597 15.1699 54.98 15.7402 53.9409 15.7402C52.6284 15.7402 51.7612 14.6934 51.7612 12.8887C51.7612 11.123 52.6206 10.0371 53.9253 10.0371C55.0269 10.0371 55.6831 10.7324 55.855 11.6074H57.4644Z"
      fill="currentColor"
    />
    <path
      d="M60.6009 12.3027H60.5853V5.72461H58.8978V16.998H60.5853V14.0449L61.2884 13.3496L64.0775 16.998H66.0384L62.4994 12.3184L65.9056 8.7793H63.9212L60.6009 12.3027Z"
      fill="currentColor"
    />
    <path
      d="M66.6594 11.1074C66.6594 12.3027 67.4328 13.0527 68.9953 13.4121L70.3312 13.7246C71.2297 13.9277 71.5344 14.2402 71.5344 14.7715C71.5344 15.4434 70.9094 15.8652 69.8937 15.8652C68.8625 15.8652 68.2766 15.4434 68.1203 14.584H66.4484C66.6047 16.1465 67.8391 17.1543 69.8937 17.1543C71.8312 17.1543 73.2297 16.123 73.2297 14.623C73.2297 13.4355 72.5891 12.7793 70.9094 12.3887L69.5734 12.084C68.6828 11.8809 68.3078 11.5293 68.3078 11.0137C68.3078 10.3574 68.9172 9.91211 69.8312 9.91211C70.7766 9.91211 71.3625 10.4121 71.4562 11.209H73.0422C72.9875 9.69336 71.7453 8.63086 69.8312 8.63086C67.9406 8.63086 66.6594 9.63867 66.6594 11.1074Z"
      fill="currentColor"
    />
    <path
      d="M75.1944 6.83398V8.7793H73.9991V10.1152H75.1944V14.834C75.1944 16.4199 75.8428 17.0527 77.5069 17.0527C77.8819 17.0527 78.2569 17.0215 78.4444 16.9746V15.6387C78.335 15.6621 78.0616 15.6777 77.8897 15.6777C77.2022 15.6777 76.8897 15.3574 76.8897 14.6465V10.1152H78.4522V8.7793H76.8897V6.83398H75.1944Z"
      fill="currentColor"
    />
    <path
      d="M82.7528 15.8027C81.8466 15.8027 81.2528 15.334 81.2528 14.6152C81.2528 13.9121 81.8231 13.4668 82.8309 13.3965L84.8544 13.2715V13.9199C84.8544 14.9902 83.9325 15.8027 82.7528 15.8027ZM82.2841 17.1387C83.3622 17.1387 84.4012 16.5605 84.8778 15.6465H84.9169V16.998H86.5341V11.334C86.5341 9.68555 85.2606 8.63086 83.2684 8.63086C81.2372 8.63086 79.9716 9.72461 79.8778 11.209H81.4716C81.62 10.4746 82.2294 10.0059 83.2059 10.0059C84.2372 10.0059 84.8544 10.5527 84.8544 11.4668V12.0996L82.6044 12.2324C80.6512 12.3418 79.5497 13.2246 79.5497 14.6621C79.5497 16.1387 80.6747 17.1387 82.2841 17.1387Z"
      fill="currentColor"
    />
    <path
      d="M95.3894 11.6074C95.2409 9.99023 93.9519 8.63086 91.8347 8.63086C89.4987 8.63086 87.9675 10.2793 87.9675 12.8887C87.9675 15.5449 89.4987 17.1543 91.8503 17.1543C93.8269 17.1543 95.2253 15.9668 95.405 14.2168H93.78C93.5847 15.1699 92.905 15.7402 91.8659 15.7402C90.5534 15.7402 89.6862 14.6934 89.6862 12.8887C89.6862 11.123 90.5456 10.0371 91.8503 10.0371C92.9519 10.0371 93.6081 10.7324 93.78 11.6074H95.3894Z"
      fill="currentColor"
    />
    <path
      d="M98.5259 12.3027H98.5103V5.72461H96.8228V16.998H98.5103V14.0449L99.2134 13.3496L102.003 16.998H103.963L100.424 12.3184L103.831 8.7793H101.846L98.5259 12.3027Z"
      fill="currentColor"
    />
    <path
      d="M115.768 15.4824H110.362V11.9824H115.479V10.5293H110.362V7.23242H115.768V5.72461H108.612V16.998H115.768V15.4824Z"
      fill="currentColor"
    />
    <path
      d="M120.6 13.9746L122.412 16.998H124.272L121.607 12.8418L124.303 8.7793H122.443L120.67 11.7559H120.639L118.842 8.7793H116.951L119.623 12.8965L116.912 16.998H118.74L120.561 13.9746H120.6Z"
      fill="currentColor"
    />
    <path
      d="M129.807 8.64648C128.619 8.64648 127.674 9.24805 127.189 10.1934H127.158V8.7793H125.525V19.7168H127.213V15.6465H127.252C127.721 16.5605 128.658 17.1387 129.838 17.1387C131.9 17.1387 133.268 15.4902 133.268 12.8887C133.268 10.2871 131.893 8.64648 129.807 8.64648ZM129.361 15.709C128.064 15.709 127.205 14.5996 127.205 12.8887C127.205 11.1934 128.072 10.0684 129.361 10.0684C130.697 10.0684 131.533 11.1699 131.533 12.8887C131.533 14.6152 130.697 15.709 129.361 15.709Z"
      fill="currentColor"
    />
    <path
      d="M134.795 16.998H136.482V5.72461H134.795V16.998Z"
      fill="currentColor"
    />
    <path
      d="M141.908 17.1543C144.259 17.1543 145.806 15.5371 145.806 12.8887C145.806 10.248 144.252 8.63086 141.908 8.63086C139.564 8.63086 138.009 10.248 138.009 12.8887C138.009 15.5371 139.556 17.1543 141.908 17.1543ZM141.908 15.7637C140.588 15.7637 139.728 14.7168 139.728 12.8887C139.728 11.0684 140.588 10.0215 141.908 10.0215C143.228 10.0215 144.088 11.0684 144.088 12.8887C144.088 14.7168 143.236 15.7637 141.908 15.7637Z"
      fill="currentColor"
    />
    <path
      d="M147.271 16.998H148.958V12.0762C148.958 10.9121 149.63 10.1855 150.716 10.1855C151.044 10.1855 151.341 10.2246 151.474 10.2793V8.70898C151.349 8.68555 151.138 8.64648 150.896 8.64648C149.927 8.64648 149.193 9.2168 148.919 10.1777H148.88V8.7793H147.271V16.998Z"
      fill="currentColor"
    />
    <path
      d="M155.759 9.99023C156.939 9.99023 157.736 10.873 157.775 12.1309H153.665C153.751 10.8887 154.579 9.99023 155.759 9.99023ZM157.767 14.584C157.54 15.3027 156.829 15.7871 155.868 15.7871C154.517 15.7871 153.658 14.8418 153.658 13.4121V13.3105H159.462V12.7324C159.462 10.2402 158.04 8.63086 155.759 8.63086C153.439 8.63086 151.954 10.3496 151.954 12.9277C151.954 15.5215 153.415 17.1543 155.829 17.1543C157.712 17.1543 159.134 16.084 159.368 14.584H157.767Z"
      fill="currentColor"
    />
    <path
      d="M160.935 16.998H162.622V12.0762C162.622 10.9121 163.294 10.1855 164.38 10.1855C164.708 10.1855 165.005 10.2246 165.138 10.2793V8.70898C165.013 8.68555 164.802 8.64648 164.56 8.64648C163.591 8.64648 162.857 9.2168 162.583 10.1777H162.544V8.7793H160.935V16.998Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.02834 3.92158C1.00058 4.31281 0.999999 4.81672 0.999999 5.55805L1 16.438C1 17.1794 1.00059 17.6833 1.02834 18.0745C1.05541 18.4563 1.10467 18.6541 1.16449 18.7923C1.36652 19.2592 1.73885 19.6315 2.2057 19.8336C2.34393 19.8934 2.54178 19.9426 2.92353 19.9697C3.31476 19.9975 3.81867 19.998 4.56 19.998L15.44 19.998C16.1813 19.998 16.6852 19.9975 17.0765 19.9697C17.4582 19.9426 17.6561 19.8934 17.7943 19.8336C18.2612 19.6315 18.6335 19.2592 18.8355 18.7923C18.8953 18.6541 18.9446 18.4563 18.9717 18.0745C18.9994 17.6833 19 17.1794 19 16.438L19 5.55805C19 4.81671 18.9994 4.31281 18.9717 3.92157C18.9446 3.53983 18.8953 3.34198 18.8355 3.20375C18.6335 2.73689 18.2611 2.36456 17.7943 2.16254C17.6561 2.10272 17.4582 2.05346 17.0765 2.02638C16.6852 1.99863 16.1813 1.99805 15.44 1.99805L4.56 1.99805C3.81867 1.99805 3.31476 1.99863 2.92353 2.02638C2.54178 2.05346 2.34393 2.10272 2.2057 2.16254C1.73885 2.36456 1.36652 2.7369 1.16449 3.20375C1.10467 3.34198 1.05541 3.53983 1.02834 3.92158ZM18.1914 20.7513C17.6213 20.998 16.8942 20.998 15.44 20.998L4.56 20.998C3.10582 20.998 2.37873 20.998 1.80856 20.7513C1.10827 20.4483 0.549776 19.8898 0.246736 19.1895C-1.03978e-07 18.6193 -1.3576e-07 17.8922 -1.99324e-07 16.438L-6.74904e-07 5.55805C-7.38468e-07 4.10387 -7.7025e-07 3.37678 0.246736 2.8066C0.549776 2.10632 1.10827 1.54782 1.80856 1.24478C2.37873 0.998047 3.10582 0.998047 4.56 0.998047L15.44 0.998046C16.8942 0.998046 17.6213 0.998046 18.1914 1.24478C18.8917 1.54782 19.4502 2.10632 19.7533 2.8066C20 3.37678 20 4.10387 20 5.55805L20 16.438C20 17.8922 20 18.6193 19.7533 19.1895C19.4502 19.8898 18.8917 20.4483 18.1914 20.7513Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8854 7.80657C10.8854 6.53257 11.9186 5.49951 13.1928 5.49951C14.4669 5.49951 15.5001 6.53257 15.5001 7.80657C15.5001 9.08097 14.467 10.1141 13.1928 10.1141C11.9185 10.1141 10.8854 9.08097 10.8854 7.80657ZM13.1928 6.49951C12.4708 6.49951 11.8854 7.08498 11.8854 7.80657C11.8854 8.52875 12.4709 9.11412 13.1928 9.11412C13.9147 9.11412 14.5001 8.52875 14.5001 7.80657C14.5001 7.08498 13.9148 6.49951 13.1928 6.49951ZM4.50012 7.80639C4.50012 6.53268 5.53282 5.49984 6.80637 5.49984C8.08033 5.49984 9.11312 6.53259 9.11312 7.80639C9.11312 9.08018 8.08033 10.1129 6.80637 10.1129C5.53282 10.1129 4.50012 9.08009 4.50012 7.80639ZM6.80637 6.49984C6.08522 6.49984 5.50012 7.08485 5.50012 7.80639C5.50012 8.52793 6.08522 9.11293 6.80637 9.11293C7.52811 9.11293 8.11312 8.52784 8.11312 7.80639C8.11312 7.08494 7.52811 6.49984 6.80637 6.49984ZM13.1929 12.889C12.4708 12.889 11.8854 13.4745 11.8854 14.1964C11.8854 14.9183 12.4708 15.5037 13.1929 15.5037C13.9145 15.5037 14.5 14.9184 14.5 14.1964C14.5 13.4744 13.9145 12.889 13.1929 12.889ZM10.8854 14.1964C10.8854 12.9221 11.9185 11.889 13.1929 11.889C14.4669 11.889 15.5 12.9222 15.5 14.1964C15.5 15.4705 14.4669 16.5037 13.1929 16.5037C11.9185 16.5037 10.8854 15.4706 10.8854 14.1964ZM4.5 14.1975C4.5 12.9236 5.53274 11.8908 6.80653 11.8908C8.08031 11.8908 9.11305 12.9236 9.11305 14.1975C9.11305 15.4711 8.08022 16.5037 6.80653 16.5037C5.53283 16.5037 4.5 15.4711 4.5 14.1975ZM6.80653 12.8908C6.08509 12.8908 5.5 13.4758 5.5 14.1975C5.5 14.9187 6.085 15.5037 6.80653 15.5037C7.52805 15.5037 8.11305 14.9187 8.11305 14.1975C8.11305 13.4758 7.52796 12.8908 6.80653 12.8908Z"
      fill="currentColor"
    />
  </>
)

const InvertedPaths = () => (
  <>
    <path
      d="M32.5625 16.998C34.9609 16.998 36.4062 15.7949 36.4062 13.8105C36.4062 12.3105 35.375 11.2246 33.8438 11.0527V10.9902C34.9688 10.8027 35.8516 9.73242 35.8516 8.53711C35.8516 6.83398 34.5391 5.72461 32.5391 5.72461H28.0391V16.998H32.5625ZM29.7891 7.1543H32.1172C33.3828 7.1543 34.1016 7.73242 34.1016 8.7793C34.1016 9.89648 33.2656 10.5215 31.75 10.5215H29.7891V7.1543ZM29.7891 15.5684V11.8574H32.1016C33.7578 11.8574 34.6172 12.4824 34.6172 13.7012C34.6172 14.9199 33.7812 15.5684 32.2031 15.5684H29.7891Z"
      fill="white"
    />
    <path d="M37.9334 16.998H39.6209V5.72461H37.9334V16.998Z" fill="white" />
    <path
      d="M45.0466 17.1543C47.3981 17.1543 48.945 15.5371 48.945 12.8887C48.945 10.248 47.3903 8.63086 45.0466 8.63086C42.7028 8.63086 41.1481 10.248 41.1481 12.8887C41.1481 15.5371 42.695 17.1543 45.0466 17.1543ZM45.0466 15.7637C43.7262 15.7637 42.8669 14.7168 42.8669 12.8887C42.8669 11.0684 43.7262 10.0215 45.0466 10.0215C46.3669 10.0215 47.2262 11.0684 47.2262 12.8887C47.2262 14.7168 46.3747 15.7637 45.0466 15.7637Z"
      fill="white"
    />
    <path
      d="M57.4644 11.6074C57.3159 9.99023 56.0269 8.63086 53.9097 8.63086C51.5737 8.63086 50.0425 10.2793 50.0425 12.8887C50.0425 15.5449 51.5737 17.1543 53.9253 17.1543C55.9019 17.1543 57.3003 15.9668 57.48 14.2168H55.855C55.6597 15.1699 54.98 15.7402 53.9409 15.7402C52.6284 15.7402 51.7612 14.6934 51.7612 12.8887C51.7612 11.123 52.6206 10.0371 53.9253 10.0371C55.0269 10.0371 55.6831 10.7324 55.855 11.6074H57.4644Z"
      fill="white"
    />
    <path
      d="M60.6009 12.3027H60.5853V5.72461H58.8978V16.998H60.5853V14.0449L61.2884 13.3496L64.0775 16.998H66.0384L62.4994 12.3184L65.9056 8.7793H63.9212L60.6009 12.3027Z"
      fill="white"
    />
    <path
      d="M66.6594 11.1074C66.6594 12.3027 67.4328 13.0527 68.9953 13.4121L70.3312 13.7246C71.2297 13.9277 71.5344 14.2402 71.5344 14.7715C71.5344 15.4434 70.9094 15.8652 69.8937 15.8652C68.8625 15.8652 68.2766 15.4434 68.1203 14.584H66.4484C66.6047 16.1465 67.8391 17.1543 69.8937 17.1543C71.8312 17.1543 73.2297 16.123 73.2297 14.623C73.2297 13.4355 72.5891 12.7793 70.9094 12.3887L69.5734 12.084C68.6828 11.8809 68.3078 11.5293 68.3078 11.0137C68.3078 10.3574 68.9172 9.91211 69.8312 9.91211C70.7766 9.91211 71.3625 10.4121 71.4562 11.209H73.0422C72.9875 9.69336 71.7453 8.63086 69.8312 8.63086C67.9406 8.63086 66.6594 9.63867 66.6594 11.1074Z"
      fill="white"
    />
    <path
      d="M75.1944 6.83398V8.7793H73.9991V10.1152H75.1944V14.834C75.1944 16.4199 75.8428 17.0527 77.5069 17.0527C77.8819 17.0527 78.2569 17.0215 78.4444 16.9746V15.6387C78.335 15.6621 78.0616 15.6777 77.8897 15.6777C77.2022 15.6777 76.8897 15.3574 76.8897 14.6465V10.1152H78.4522V8.7793H76.8897V6.83398H75.1944Z"
      fill="white"
    />
    <path
      d="M82.7528 15.8027C81.8466 15.8027 81.2528 15.334 81.2528 14.6152C81.2528 13.9121 81.8231 13.4668 82.8309 13.3965L84.8544 13.2715V13.9199C84.8544 14.9902 83.9325 15.8027 82.7528 15.8027ZM82.2841 17.1387C83.3622 17.1387 84.4012 16.5605 84.8778 15.6465H84.9169V16.998H86.5341V11.334C86.5341 9.68555 85.2606 8.63086 83.2684 8.63086C81.2372 8.63086 79.9716 9.72461 79.8778 11.209H81.4716C81.62 10.4746 82.2294 10.0059 83.2059 10.0059C84.2372 10.0059 84.8544 10.5527 84.8544 11.4668V12.0996L82.6044 12.2324C80.6512 12.3418 79.5497 13.2246 79.5497 14.6621C79.5497 16.1387 80.6747 17.1387 82.2841 17.1387Z"
      fill="white"
    />
    <path
      d="M95.3894 11.6074C95.2409 9.99023 93.9519 8.63086 91.8347 8.63086C89.4987 8.63086 87.9675 10.2793 87.9675 12.8887C87.9675 15.5449 89.4987 17.1543 91.8503 17.1543C93.8269 17.1543 95.2253 15.9668 95.405 14.2168H93.78C93.5847 15.1699 92.905 15.7402 91.8659 15.7402C90.5534 15.7402 89.6862 14.6934 89.6862 12.8887C89.6862 11.123 90.5456 10.0371 91.8503 10.0371C92.9519 10.0371 93.6081 10.7324 93.78 11.6074H95.3894Z"
      fill="white"
    />
    <path
      d="M98.5259 12.3027H98.5103V5.72461H96.8228V16.998H98.5103V14.0449L99.2134 13.3496L102.003 16.998H103.963L100.424 12.3184L103.831 8.7793H101.846L98.5259 12.3027Z"
      fill="white"
    />
    <path
      d="M115.768 15.4824H110.362V11.9824H115.479V10.5293H110.362V7.23242H115.768V5.72461H108.612V16.998H115.768V15.4824Z"
      fill="white"
    />
    <path
      d="M120.6 13.9746L122.412 16.998H124.272L121.607 12.8418L124.303 8.7793H122.443L120.67 11.7559H120.639L118.842 8.7793H116.951L119.623 12.8965L116.912 16.998H118.74L120.561 13.9746H120.6Z"
      fill="white"
    />
    <path
      d="M129.807 8.64648C128.619 8.64648 127.674 9.24805 127.189 10.1934H127.158V8.7793H125.525V19.7168H127.213V15.6465H127.252C127.721 16.5605 128.658 17.1387 129.838 17.1387C131.9 17.1387 133.268 15.4902 133.268 12.8887C133.268 10.2871 131.893 8.64648 129.807 8.64648ZM129.361 15.709C128.064 15.709 127.205 14.5996 127.205 12.8887C127.205 11.1934 128.072 10.0684 129.361 10.0684C130.697 10.0684 131.533 11.1699 131.533 12.8887C131.533 14.6152 130.697 15.709 129.361 15.709Z"
      fill="white"
    />
    <path d="M134.795 16.998H136.482V5.72461H134.795V16.998Z" fill="white" />
    <path
      d="M141.908 17.1543C144.259 17.1543 145.806 15.5371 145.806 12.8887C145.806 10.248 144.252 8.63086 141.908 8.63086C139.564 8.63086 138.009 10.248 138.009 12.8887C138.009 15.5371 139.556 17.1543 141.908 17.1543ZM141.908 15.7637C140.588 15.7637 139.728 14.7168 139.728 12.8887C139.728 11.0684 140.588 10.0215 141.908 10.0215C143.228 10.0215 144.088 11.0684 144.088 12.8887C144.088 14.7168 143.236 15.7637 141.908 15.7637Z"
      fill="white"
    />
    <path
      d="M147.271 16.998H148.958V12.0762C148.958 10.9121 149.63 10.1855 150.716 10.1855C151.044 10.1855 151.341 10.2246 151.474 10.2793V8.70898C151.349 8.68555 151.138 8.64648 150.896 8.64648C149.927 8.64648 149.193 9.2168 148.919 10.1777H148.88V8.7793H147.271V16.998Z"
      fill="white"
    />
    <path
      d="M155.759 9.99023C156.939 9.99023 157.736 10.873 157.775 12.1309H153.665C153.751 10.8887 154.579 9.99023 155.759 9.99023ZM157.767 14.584C157.54 15.3027 156.829 15.7871 155.868 15.7871C154.517 15.7871 153.658 14.8418 153.658 13.4121V13.3105H159.462V12.7324C159.462 10.2402 158.04 8.63086 155.759 8.63086C153.439 8.63086 151.954 10.3496 151.954 12.9277C151.954 15.5215 153.415 17.1543 155.829 17.1543C157.712 17.1543 159.134 16.084 159.368 14.584H157.767Z"
      fill="white"
    />
    <path
      d="M160.935 16.998H162.622V12.0762C162.622 10.9121 163.294 10.1855 164.38 10.1855C164.708 10.1855 165.005 10.2246 165.138 10.2793V8.70898C165.013 8.68555 164.802 8.64648 164.56 8.64648C163.591 8.64648 162.857 9.2168 162.583 10.1777H162.544V8.7793H160.935V16.998Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.02834 3.92158C1.00058 4.31281 0.999999 4.81672 0.999999 5.55805L1 16.438C1 17.1794 1.00059 17.6833 1.02834 18.0745C1.05541 18.4563 1.10467 18.6541 1.16449 18.7923C1.36652 19.2592 1.73885 19.6315 2.2057 19.8336C2.34393 19.8934 2.54178 19.9426 2.92353 19.9697C3.31476 19.9975 3.81867 19.998 4.56 19.998L15.44 19.998C16.1813 19.998 16.6852 19.9975 17.0765 19.9697C17.4582 19.9426 17.6561 19.8934 17.7943 19.8336C18.2612 19.6315 18.6335 19.2592 18.8355 18.7923C18.8953 18.6541 18.9446 18.4563 18.9717 18.0745C18.9994 17.6833 19 17.1794 19 16.438L19 5.55805C19 4.81671 18.9994 4.31281 18.9717 3.92157C18.9446 3.53983 18.8953 3.34198 18.8355 3.20375C18.6335 2.73689 18.2611 2.36456 17.7943 2.16254C17.6561 2.10272 17.4582 2.05346 17.0765 2.02638C16.6852 1.99863 16.1813 1.99805 15.44 1.99805L4.56 1.99805C3.81867 1.99805 3.31476 1.99863 2.92353 2.02638C2.54178 2.05346 2.34393 2.10272 2.2057 2.16254C1.73885 2.36456 1.36652 2.7369 1.16449 3.20375C1.10467 3.34198 1.05541 3.53983 1.02834 3.92158ZM18.1914 20.7513C17.6213 20.998 16.8942 20.998 15.44 20.998L4.56 20.998C3.10582 20.998 2.37873 20.998 1.80856 20.7513C1.10827 20.4483 0.549776 19.8898 0.246736 19.1895C-1.03978e-07 18.6193 -1.3576e-07 17.8922 -1.99324e-07 16.438L-6.74904e-07 5.55805C-7.38468e-07 4.10387 -7.7025e-07 3.37678 0.246736 2.8066C0.549776 2.10632 1.10827 1.54782 1.80856 1.24478C2.37873 0.998047 3.10582 0.998047 4.56 0.998047L15.44 0.998046C16.8942 0.998046 17.6213 0.998046 18.1914 1.24478C18.8917 1.54782 19.4502 2.10632 19.7533 2.8066C20 3.37678 20 4.10387 20 5.55805L20 16.438C20 17.8922 20 18.6193 19.7533 19.1895C19.4502 19.8898 18.8917 20.4483 18.1914 20.7513Z"
      fill="#00D4FF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8854 7.80657C10.8854 6.53257 11.9186 5.49951 13.1928 5.49951C14.4669 5.49951 15.5001 6.53257 15.5001 7.80657C15.5001 9.08097 14.467 10.1141 13.1928 10.1141C11.9185 10.1141 10.8854 9.08097 10.8854 7.80657ZM13.1928 6.49951C12.4708 6.49951 11.8854 7.08498 11.8854 7.80657C11.8854 8.52875 12.4709 9.11412 13.1928 9.11412C13.9147 9.11412 14.5001 8.52875 14.5001 7.80657C14.5001 7.08498 13.9148 6.49951 13.1928 6.49951ZM4.50012 7.80639C4.50012 6.53268 5.53282 5.49984 6.80637 5.49984C8.08033 5.49984 9.11312 6.53259 9.11312 7.80639C9.11312 9.08018 8.08033 10.1129 6.80637 10.1129C5.53282 10.1129 4.50012 9.08009 4.50012 7.80639ZM6.80637 6.49984C6.08522 6.49984 5.50012 7.08485 5.50012 7.80639C5.50012 8.52793 6.08522 9.11293 6.80637 9.11293C7.52811 9.11293 8.11312 8.52784 8.11312 7.80639C8.11312 7.08494 7.52811 6.49984 6.80637 6.49984ZM13.1929 12.889C12.4708 12.889 11.8854 13.4745 11.8854 14.1964C11.8854 14.9183 12.4708 15.5037 13.1929 15.5037C13.9145 15.5037 14.5 14.9184 14.5 14.1964C14.5 13.4744 13.9145 12.889 13.1929 12.889ZM10.8854 14.1964C10.8854 12.9221 11.9185 11.889 13.1929 11.889C14.4669 11.889 15.5 12.9222 15.5 14.1964C15.5 15.4705 14.4669 16.5037 13.1929 16.5037C11.9185 16.5037 10.8854 15.4706 10.8854 14.1964ZM4.5 14.1975C4.5 12.9236 5.53274 11.8908 6.80653 11.8908C8.08031 11.8908 9.11305 12.9236 9.11305 14.1975C9.11305 15.4711 8.08022 16.5037 6.80653 16.5037C5.53283 16.5037 4.5 15.4711 4.5 14.1975ZM6.80653 12.8908C6.08509 12.8908 5.5 13.4758 5.5 14.1975C5.5 14.9187 6.085 15.5037 6.80653 15.5037C7.52805 15.5037 8.11305 14.9187 8.11305 14.1975C8.11305 13.4758 7.52796 12.8908 6.80653 12.8908Z"
      fill="#00D4FF"
    />
  </>
)

const BlockstackExplorerLogo = ({
  width,
  typeSize = 16,
  invert,
  color = invert ? 'unset' : 'blue.dark',
  ...rest
}) => {
  const baseWidth = 166
  const computedWidth = computeSize(width, baseWidth, typeSize)
  const Component = invert ? InvertedPaths : DefaultPaths
  return (
    <Box width={computedWidth} color={color} {...rest}>
      <Box
        is="svg"
        display="inline-block"
        viewBox={`0 0 ${baseWidth} 21`}
        fill="none"
        style={{
          width: '100%'
        }}
      >
        <Component />
      </Box>
    </Box>
  )
}

BlockstackExplorerLogo.propTypes = {
  width: PropTypes.oneOf([PropTypes.number, PropTypes.string, PropTypes.array]),
  typeSize: PropTypes.number,
  invert: PropTypes.bool,
  color: PropTypes.string
}

export default BlockstackExplorerLogo