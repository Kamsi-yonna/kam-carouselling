const defaults = {
  meta: {
    title: "Caroselling Studio",
    ogTitle: "Caroselling Studio",
    description:
      "We give you a name and an image, we build beautiful and user-friendly custom websites, and we write creative and effective content.",
    ogDescription:
      "We give you a name and an image, we build beautiful and user-friendly custom websites, and we write creative and effective content.",
    ogImage:
      "https://res.cloudinary.com/dco8lmxfy/image/upload/v1731878999/ico_l3xyxl.png",
    twitterCard: "summary_large_image",
  } as Parameters<typeof useSeoMeta>[0],
};

type DefaultKeys = keyof typeof defaults;

type DefaultValues = typeof defaults;

export const useDefault = <K extends DefaultKeys>(
  defaultName: K
): DefaultValues[K] => defaults[defaultName];
