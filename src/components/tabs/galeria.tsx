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
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          # Galeria

          ---

          ## 2015 - 2023
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
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          ---

          ## 2008 - 2014
        `)}
      />

      <Gallery
        images={[
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
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          ---

          ## 1996 - 2007
        `)}
      />

      <Gallery
        images={[
          {
            src: "/images/infancia/IMG_20160105_135518133.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/IMG_20160105_135149003.jpg",
            alt: "02/04/2007",
          },
          {
            src: "/images/infancia/IMG_20160105_134549445.jpg",
            alt: "02/04/2006",
          },
          {
            src: "/images/infancia/80_453x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/IMG_20160105_135047268.jpg",
            alt: "10/05/2004",
          },
          {
            src: "/images/infancia/IMG_20160105_134930310.jpg",
            alt: "10/05/2004",
          },
          {
            src: "/images/infancia/IMG_20160105_134907794.jpg",
            alt: "10/05/2004",
          },
          {
            src: "/images/infancia/IMG_20160105_134811312.jpg",
            alt: "10/04/2004",
          },
          {
            src: "/images/infancia/16_886x600.jpg",
            alt: "09/11/2003",
          },
          {
            src: "/images/infancia/IMG_20150809_195856498.jpg",
            alt: "13/01/2002",
          },
          {
            src: "/images/infancia/44_406x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/42_406x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/41_886x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/29_886x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/IMG_20150809_202456179.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/IMG_20150809_193529299.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/17-11-1999.jpg",
            alt: "17/11/1999",
          },
          {
            src: "/images/infancia/53_886x600.jpg",
            alt: "23/04/1999",
          },
          {
            src: "/images/infancia/51_406x600.jpg",
            alt: "04/04/1999",
          },
          {
            src: "/images/infancia/54_406x600.jpg",
            alt: "19/03/1999",
          },
          {
            src: "/images/infancia/71_886x600.jpg",
            alt: "13/01/1999",
          },
          {
            src: "/images/infancia/3_406x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/IMG_20150809_194216191.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/72_886x600.jpg",
            alt: "03/01/1999",
          },
          {
            src: "/images/infancia/24_406x600.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/67_406x600.jpg",
            alt: "Praia",
          },
          {
            src: "/images/infancia/62_406x600.jpg",
            alt: "Praia",
          },
          {
            src: "/images/infancia/46_886x600.jpg",
            alt: "19/07/1998",
          },
          {
            src: "/images/infancia/IMG_20150824_110254733.jpg",
            alt: "27/04/1998",
          },
          {
            src: "/images/infancia/5_886x600.jpg",
            alt: "02/04/1998",
          },
          {
            src: "/images/infancia/70_886x600.jpg",
            alt: "21/12/1997",
          },
          {
            src: "/images/infancia/50_886x600.jpg",
            alt: "26/04/1997",
          },
          {
            src: "/images/infancia/IMG_20150809_202901978.jpg",
            alt: "10/03/1997",
          },
          {
            src: "/images/infancia/64ed02a3f31f61bd8def9b1211c7a9ba1.webp",
            alt: "15/12/1996",
          },
          {
            src: "/images/infancia/IMG_20150809_202825589.jpg",
            alt: "",
          },
          {
            src: "/images/infancia/IMG_20150809_202804951.jpg",
            alt: "15/04/1996",
          },
        ]}
      />

      <ReactMarkdown
        linkTarget={"_blank"}
        children={prepareMarkdown(`
          &nbsp;
        `)}
      />
    </div>
  );
}
