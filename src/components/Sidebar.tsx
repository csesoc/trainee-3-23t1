import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const path = useRouter().route;
  return (
    <nav className="max-w-24 flex h-screen flex-col items-center justify-between shadow-default">
      <div>
        {/* App Icon to Landing page */}
        <Link
          href="/landing"
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
          href="/home"
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
        <Link
          href="/inbox"
          className={` flex h-16 w-16 items-center justify-center duration-150 ${
            path === "/inbox"
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
            <path d="M140 896q-24 0-42-18t-18-42V316q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480 534 140 316v55l340 223Z" />
          </svg>
        </Link>
        <Link
          href="/settings"
          className={` flex h-16 w-16 items-center justify-center duration-150 ${
            path === "/settings"
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
            <path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Z" />
          </svg>
        </Link>
      </div>
      <Link
        href="/profile"
        className={`flex h-16 w-16 items-center justify-center duration-150 ${
          path === "/profile"
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
          <path d="M222 801q63-40 124.5-60.5T480 720q72 0 134 20.5T739 801q44-54 62.5-109T820 576q0-145-97.5-242.5T480 236q-145 0-242.5 97.5T140 576q0 61 19 116t63 109Zm257.814-195Q422 606 382.5 566.314q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314 566.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142 804 111 731.159 80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.5q-54 54.5-127.129 86T479.595 976Z" />
        </svg>
      </Link>
    </nav>
  );
};
export default Sidebar;
