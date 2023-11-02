import { useRouter } from "next/router";

function useLocaleTagLink() {
  const router = useRouter();
  const localePrefix =
    router.defaultLocale === router.locale ? "" : `${router.locale || ""}`;

  return {
    tagLink: (tag: string) => {
      tag = tag.replace("#", "");
      return `/${localePrefix}#${tag}`;
    },
  };
}

export default useLocaleTagLink;
