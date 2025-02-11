import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div >
     {/* Corrected Link */}
     <ul>
      <li> <Link href="/components/Header"> Go to header </Link></li>
      <li><Link href="/User/HomePage"> Go to Homepage </Link>  </li>
      <li><Link href="/components/Popup"> Go to Popup </Link>  </li>
      <li><Link href="/components/Popup/signupOptions"> Go to Sign up options  </Link>  </li>
      <li><Link href="/User/Services"> Go to Services </Link></li>
     </ul>
   </div>
  );
}
