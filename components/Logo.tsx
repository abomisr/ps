"use client"
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={"#"}>
        <Image
            width={56}
            height={56}
            alt='Palestine ps.abomisr.com'
            src={"/logo.png"}
        />
    </Link>
  )
}

export default Logo