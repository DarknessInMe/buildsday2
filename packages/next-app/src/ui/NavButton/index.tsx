import { FC } from 'react';
import Link from 'next/link'

interface INavLink {
   href: string;
   title: string;
}

export const NavLink: FC<INavLink> = ({ href, title }) => {
   return <Link href={href}>{title}</Link>
}