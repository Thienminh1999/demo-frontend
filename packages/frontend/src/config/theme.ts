import { ThemeConfig } from "antd";
import { ColorDefaultEnum } from "./colors.constant";

export const theme: ThemeConfig | undefined = {
  components: {
    Tabs: {
      colorPrimary: ColorDefaultEnum.MAIN_COLOR,
      itemHoverColor: ColorDefaultEnum.MAIN_COLOR,
      itemSelectedColor: ColorDefaultEnum.MAIN_COLOR,
      itemActiveColor: ColorDefaultEnum.MAIN_COLOR,
    },
  },
};
