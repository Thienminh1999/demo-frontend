import React from "react";
import { MenuItem, MenuList, SitebarContainer } from "./Sitebar.styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import ChangeLocale from "../ChangeLocale/ChangeLocale";

function Sitebar() {
  const { t } = useTranslation();
  const pathName = usePathname();

  const DUMMY_MENU = [
    {
      href: "/",
      icon: faHouse,
      name: `${t('dashboard')}`,
    },
    {
      href: "/table",
      icon: faTable,
      name: `${t('table')}`,
    },
  ];

  return (
    <SitebarContainer className="bg-gray-50">
      <MenuList>
      <ChangeLocale/>
        {DUMMY_MENU.map((menu, index) => {
          const isActive = pathName === menu.href;
          return (
            <MenuItem $isActive={isActive} key={index}>
              <Link href={menu.href}>
                <FontAwesomeIcon
                  color='#bd0f72'
                  className='me-[1rem]'
                  icon={menu.icon}
                />
                {menu.name}
              </Link>
            </MenuItem>
          );
        })}
      </MenuList>
    </SitebarContainer>
  );
}

export default Sitebar;
