import React from "react";
import { SelectedPage } from "@/shared/types";
import AnchorLink  from 'react-anchor-link-smooth-scroll';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="bg-secondary-500 rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.ContactsUs)}
      href={`#${SelectedPage.ContactsUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
