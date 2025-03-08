import heroImg from "./pexels-rquiros-2219024.jpg";
import builderTeamImg from "./builders.jpg";
import constructionQualityImg from "./pexels-olly-3760529.jpg";
import expertTeamImg from "./What-does-a-builder-do.webp";
import modernVillaImg from "./pexels-tkirkgoz-19408681.jpg";
import officeComplexImg from "./pexels-shkrabaanthony-5853939.jpg";
import shoppingMallImg from "./pexels-life-of-pix-8092.jpg";

export const images = {
  home: {
    hero: {
      src: heroImg,
      alt: "Modern Luxury Building",
    },
    features: {
      quality: {
        src: constructionQualityImg,
        alt: "Quality Construction Work",
      },
      team: {
        src: expertTeamImg,
        alt: "Expert Construction Team",
      },
      delivery: {
        src: builderTeamImg,
        alt: "Construction Site Progress",
      },
    },
  },
  projects: {
    modernVilla: {
      src: modernVillaImg,
      alt: "Modern Luxury Villa Project",
    },
    officeComplex: {
      src: officeComplexImg,
      alt: "Modern Office Complex",
    },
    shoppingMall: {
      src: shoppingMallImg,
      alt: "Contemporary Shopping Mall",
    },
  },
};
