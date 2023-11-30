import React from "react";
interface IImage {
  src: string;
  styles: string;
}
export const Image = ({ src, styles }: IImage) => {
  return <img src={src} className={styles} />;
};
