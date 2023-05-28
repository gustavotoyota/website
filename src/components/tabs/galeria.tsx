/* eslint-disable react/no-children-prop */
import { prepareMarkdown } from "@/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Gallery } from "../gallery";

export default function GaleriaTab() {
  return (
    <div
      className="px-5 py-1"
      style={{ fontSize: "1rem", lineHeight: "1.5rem" }}
    >
      <ReactMarkdown
        children={prepareMarkdown(`
          # Galeria

          ---
        `)}
      />

      <Gallery
        images={[
          {
            src: "/images/outros/IMG-20200105-WA0035.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG-20200102-WA0030.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG-20160104-WA0002.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG_20191223_100346727.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG_20200627_204224434_HDR.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG-20180624-WA0008.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG-20200123-WA0014.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG_20160424_121945748.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG-20180624-WA0017.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG-20151101-WA0009.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG-20151101-WA0015.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG_20190622_164255057.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG_20160103_202427330.jpg",
            alt: "",
          },
          {
            src: "/images/outros/IMG_0425-2013.JPG",
            alt: "2013",
          },
          {
            src: "/images/infancia/0ff03cf1f06ca12d73d82bf1e4b00edb1.webp",
            alt: "",
          },
          {
            src: "/images/infancia/SDC10189.JPG",
            alt: "",
          },
          {
            src: "/images/infancia/SDC10188.JPG",
            alt: "",
          },
          {
            src: "/images/infancia/16_886x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/24_406x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/64ed02a3f31f61bd8def9b1211c7a9ba1.webp",
            alt: "",
          },
        ]}
      />

      <ReactMarkdown
        children={prepareMarkdown(`
          &nbsp;
        `)}
      />
    </div>
  );
}
