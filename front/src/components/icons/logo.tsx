import { ComponentType } from "react";

interface Props {
  theme?: "light" | "dark";
  size?: "sm" | "base" | "lg" | "xl";
}

const Logo: ComponentType<Props> = ({ theme, size }) => {
  const color = theme === "light" ? "#fafafa" : "#09090b";
  const sizes = {
    sm: "w-10",
    base: "w-16",
    lg: "w-24 lg:w-28",
    xl: "w-36 lg:w-40",
  };
  return (
    <svg
      id="Capa_2"
      data-name="Capa 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 372.28 92.01"
      className={sizes[size || "base"] + " h-10"}
    >
      <defs>
        <style>
          {`.cls-1{fill:${color};stroke:${color};stroke-miterlimit:10;stroke-width:2px;}`}
        </style>
      </defs>
      <g id="Capa_1-2" data-name="Capa 1">
        <g>
          <path
            className="cls-1"
            d="m57.21,36.69c0-3.37-1.69-4.96-4.07-4.96-.59,0-1.29.1-1.98.3l-.89-2.28,16.86-7.93h.99v46.86l-9.92,5.95h-.99v-37.93Z"
          />
          <rect
            className="cls-1"
            x="55.36"
            y="4.8"
            width="13.6"
            height="13.6"
            transform="translate(10 47.35) rotate(-45)"
          />
          <g>
            <polygon
              className="cls-1"
              points="46.3 11.6 36.68 21.21 9.61 21.21 0 11.6 9.61 1.98 36.68 1.98 46.3 11.6"
            />
            <path
              className="cls-1"
              d="m9.62,54.93l9.62,9.62-9.62,9.62L0,64.55l9.62-9.62Z"
            />
            <polygon
              className="cls-1"
              points="32.77 38.07 23.15 47.69 9.61 47.69 0 38.07 9.61 28.45 23.15 28.45 32.77 38.07"
            />
          </g>
          <path
            className="cls-1"
            d="m82.68,36.69c0-3.37-1.69-4.96-4.07-4.96-.59,0-1.29.1-1.98.3l-.89-2.28,16.86-7.93h.99v8.63c3.47-5.55,8.53-9.42,15.27-9.42,8.33,0,16.76,5.95,16.76,18.54,0,14.18-10.41,24.29-20.82,30.54l18.14-2.68-1.39,5.95h-21.62l-.99-2.48c8.43-5.95,15.67-17.95,15.67-31.43,0-9.62-3.37-14.87-8.43-14.87-6.44,0-11.3,8.23-12.59,17.85v26.23l-9.92,5.95h-.99v-37.93Z"
          />
          <path
            className="cls-1"
            d="m153.87,53.44c-3.77,0-7.54-.69-10.81-2.18,1.49,9.82,6.74,16.66,15.57,16.66,5.55,0,11.6-2.88,16.46-8.73l2.08.79c-4.76,9.62-12.39,14.18-21.12,14.18-12.2,0-24.49-9.42-24.49-26.37,0-15.96,10.61-26.77,23.99-26.77,11.2,0,19.04,7.44,19.04,16.66,0,10.51-10.11,15.76-20.72,15.76Zm-4.26-3.97c8.43,0,14.48-4.56,14.48-13.48,0-6.35-2.97-11.7-9.42-11.7-7.73,0-12.1,7.54-12.1,20.43,0,1.19,0,2.38.1,3.57,2.38.79,4.76,1.19,6.94,1.19Z"
          />
          <path
            className="cls-1"
            d="m217.42,63.06c-2.88,6.94-7.73,11.1-14.18,11.1-9.62,0-20.13-9.42-20.13-25.78s10.51-27.37,22.8-27.37c4.26,0,8.53,1.29,12.1,4.16l.89-3.37h9.42v45.86l-9.91,6.94h-.99v-11.56Zm0-27.17c-.59-8.92-6.74-11.7-11.2-11.7-7.54,0-12.1,7.63-12.1,20.52s4.76,23.6,11.6,23.6c6.35,0,11.7-8.92,11.7-22.81v-9.62Z"
          />
          <path
            className="cls-1"
            d="m236.26,70.89l23.9-45.31-20.13,2.18,1.39-5.95h31.33v2.48l-23.2,45.01,24.59-2.97-1.39,7.04h-36.49v-2.48Z"
          />
          <path
            className="cls-1"
            d="m285.04,36.69c0-3.37-1.69-4.96-4.06-4.96-.59,0-1.29.1-1.98.3l-.89-2.28,16.86-7.93h.99v46.9l-9.92,5.95h-.99v-37.97Z"
          />
          <rect
            className="cls-1"
            x="283.19"
            y="4.8"
            width="13.6"
            height="13.6"
            transform="translate(76.74 208.46) rotate(-45)"
          />
          <path
            className="cls-1"
            d="m310.52,14.87c0-3.37-1.69-4.96-4.07-4.96-.59,0-1.29.1-1.98.3l-.89-2.28,16.86-7.93h.99v68.71l-9.92,5.95h-.99V14.87Z"
          />
          <path
            className="cls-1"
            d="m339.57,76.54c3.57,8.92,7.63,12.29,12.29,12.29,5.25,0,9.52-4.16,9.52-14.28v-9.82c-3.47,5.55-8.53,9.42-15.27,9.42-8.33,0-16.76-5.95-16.76-18.54,0-14.18,10.51-24.29,20.23-30.54l-17.55,2.68,1.39-5.95h20.62l.99,2.48c-7.44,5.95-14.67,17.95-14.67,31.43,0,9.62,3.37,14.87,8.43,14.87,6.45,0,11.3-8.23,12.59-17.85v-16.06c0-3.37-1.69-4.96-4.07-4.96-.59,0-1.29.1-1.98.3l-.89-2.28,16.86-7.93h.99v46.3c0,16.06-10.41,23.9-22.11,23.9-6.54,0-14.08-2.28-18.74-10.61l8.13-4.86Z"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
