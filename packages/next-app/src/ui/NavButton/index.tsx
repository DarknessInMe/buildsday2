import { FC } from 'react';
import Link from 'next/link'

interface INavLinkProps {
   href: string;
   title: string;
}

export const NavLink: FC<INavLinkProps> = ({ href, title }) => {
   return <Link href={href}>{title}</Link>
}