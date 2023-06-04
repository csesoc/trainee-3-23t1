import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const path = useRouter().route;
  return (
    <nav className="max-w-24 flex h-screen flex-col items-center justify-between bg-white shadow-default drop-shadow-md">
      <div>
        {/* App Icon to Landing page */}
        <Link
          href="/"
          className="mx-auto my-8 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-1 fill-background"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 96 960 960"
            width="32"
          >
            <path d="M240 976V806q-36-16-65.5-43T124 700.5Q103 665 91.5 623T80 536q0-158 112-259t288-101q176 0 288 101t112 259q0 45-11.5 87T836 700.5Q815 736 785.5 763T720 806v170H240Zm60-60h60v60h60v-60h120v60h60v-60h60V769q37-11 66.5-33t50.5-52.5q21-30.5 32-68.019 11-37.52 11-79.327 0-133.997-94-217.076Q632 236 480.043 236t-246 83.088Q140 402.176 140 536.188 140 578 151 615.5t32 68q21 30.5 50.5 52.5t66.5 33v147Zm120-200h120l-60-120-60 120Zm-79.911-120Q369 596 389.5 575.411q20.5-20.588 20.5-49.5Q410 497 389.411 476.5q-20.588-20.5-49.5-20.5Q311 456 290.5 476.589q-20.5 20.588-20.5 49.5Q270 555 290.589 575.5q20.588 20.5 49.5 20.5Zm280 0Q649 596 669.5 575.411q20.5-20.588 20.5-49.5Q690 497 669.411 476.5q-20.588-20.5-49.5-20.5Q591 456 570.5 476.589q-20.5 20.588-20.5 49.5Q550 555 570.589 575.5q20.588 20.5 49.5 20.5ZM300 916V769q-37-11-66.5-33T183 683.5q-21-30.5-32-68.019-11-37.52-11-79.327 0-133.997 94-217.076Q328 236 479.957 236t246 83.088Q820 402.176 820 536.188 820 578 809 615.5t-32 68Q756 714 726.5 736T660 769v147h-60v-60h-60v60H420v-60h-60v60h-60Z" />
          </svg>
        </Link>
        {/* Home Page Icon */}
        <Link
          href="/"
          className={`flex h-16 w-16 flex-row items-center justify-center duration-150 ${
            path === "/home"
              ? "bg-secondary fill-accent-1"
              : "bg-background fill-text"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 96 960 960"
            width="32"
          >
            <path d="M160 936V456l320-240 320 240v480H560V656H400v280H160Z" />
          </svg>
        </Link>
        {/* Search */}
        <Link
          href="/search"
          className={` flex h-16 w-16 items-center justify-center duration-150 ${
            path === "/search"
              ? "bg-secondary fill-accent-1"
              : "bg-background fill-text"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 96 960 960"
            width="32"
          >
            <path d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z" />
          </svg>
        </Link>
        {/* Create post */}
        <Link
          href="/create"
          className={`flex h-16 w-16 items-center justify-center duration-150 ${
            path === "/create"
              ? "bg-secondary fill-accent-1"
              : "bg-background fill-text"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M450-200v-250H200v-60h250v-250h60v250h250v60H510v250h-60Z" />
          </svg>
        </Link>
      </div>
      <button
        className={`flex h-16 w-16 items-center justify-center duration-150 ${
          path === "/profile"
            ? "bg-secondary fill-accent-1"
            : "bg-background fill-text"
        }`}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32"
          viewBox="0 -960 960 960"
          width="32"
        >
          <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180Zm486-185-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174Z" />
        </svg>
      </button>
    </nav>
  );
};
export default Sidebar;
