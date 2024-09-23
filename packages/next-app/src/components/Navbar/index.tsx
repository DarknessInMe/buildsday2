import { Logo } from '@/ui/Logo';
import { ROUTER } from '@/shared/constants';
import { NavLink } from '@/ui/NavButton';

const NAVIGATION = [
   {
      href: ROUTER.HOME,
      title: 'Home',
   },
   {
      href: ROUTER.MY_BUILDS,
      title: 'My Builds',
   },
   {
      href: ROUTER.CREATE,
      title: 'Create Own Build'
   }
];

export const Navbar = () => {
   return (
      <nav
         style={{ background: 'blue' }}
         className='flex px-8 py-2 fixed top-0 left-0 w-full'
      >
         <Logo />
         <ul className='flex'>
            {NAVIGATION.map(({ title, href }, index) => (
               <li 
                  key={`nav-item-${index}`}
                  className='mx-2'
               >
                  <NavLink 
                     title={title}
                     href={href}
                  />
               </li>
            ))}
         </ul>
      </nav>
   )
};