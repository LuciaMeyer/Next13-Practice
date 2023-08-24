'use client'

import Link from 'next/link'
import s from './ActiveLink.module.css'
import { usePathname } from 'next/navigation'


interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({ path, text }: Props) => {

  const pathName = usePathname();

  return (
    <>
        <Link
            className={`${s.link} ${ (pathName === path) && s.activeLink}` }
            href={path}
        >
            {text}
        </Link>
    </>
  )
};

