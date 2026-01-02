import { MainItemProps } from "@/components/main/MainItem";

export const MAIN_ITEM_LIST: MainItemProps[] = [
  {
    id: 1,
    title: "ABOUT",
    subTitle: "지옥철 인생",
    href: "about",
    imageSrc: "about",
    imageAlt: "지옥철 인생 이미지",
  },
  {
    id: 2,
    title: "PROJECTS",
    subTitle: "끝도 없는 벤치마킹",
    href: "projects",
    imageSrc: "projects",
    imageAlt: "끝도 없는 벤치마킹 이미지",
    caption: "언제 끝나 지겨워 -",
  },
  {
    id: 3,
    title: "CAREER",
    subTitle: "경험을 녹아내다",
    href: "career",
    imageSrc: "career",
    imageAlt: "경험을 녹아내다 이미지",
  },
  {
    id: 4,
    title: "CONTACT",
    subTitle: "소통의 왕이 되고싶어요",
    href: "contact",
    imageSrc: "contact",
    imageAlt: "소통의 왕이 되고싶어요 이미지",
    caption: "아 - 진짜요?!",
  },
];
