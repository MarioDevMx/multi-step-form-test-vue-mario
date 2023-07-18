import iconArcade from "../assets/images/icon-arcade.svg";
import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconPro from "../assets/images/icon-pro.svg";

export const plans = {
  items: [
    {
      id: 1,
      planIconType: iconArcade,
      title: "Arcade",
      month: 9,
      promotionYear: "2 months free",
    },
    {
      id: 2,
      planIconType: iconAdvanced,
      title: "Advanced",
      month: 12,
      promotionYear: "2 months free",
    },
    {
      id: 3,
      planIconType: iconPro,
      title: "Pro",
      month: 15,
      promotionYear: "2 months free",
    },
  ],
}