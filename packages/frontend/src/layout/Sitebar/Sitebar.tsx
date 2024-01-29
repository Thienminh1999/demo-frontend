import React from "react";
import { MenuItem, MenuList, SitebarContainer } from "./Sitebar.styles";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faHouse,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

function Sitebar() {
  const pathName = usePathname();

  const DUMMY_MENU = [
    {
      href: "/homepage",
      icon: faHouse,
      name: "Dashboard",
    },
    {
      href: "/table",
      icon: faTable,
      name: "Table",
    },
    {
      href: "/calendar",
      icon: faCalendarDays,
      name: "Calendar",
    },
  ];

  return (
    <SitebarContainer>
      <MenuList>
        {DUMMY_MENU.map((menu, index) => {
          const isActive = pathName === menu.href;
          return (
            <MenuItem $isActive={isActive} key={index}>
              <Link href={menu.href}>
                <FontAwesomeIcon
                  color='#64C5B1'
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
