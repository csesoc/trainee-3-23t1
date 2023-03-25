import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

interface SidebarLinkProps {
  segment: string
}

const Sidebar = () => {
  // const segment = useSelectedLayoutSegment();
  
  return (
    <nav className="max-w-24 flex h-screen flex-col items-center shadow-default">
      <div className="flex h-16 w-16 items-center justify-center">
        <div className="h-8 w-8 bg-accent-1"></div>
      </div>
      <Link
        href="/"
        className={
          segment === null
            ? "flex h-16 w-16 items-center justify-center bg-secondary fill-accent-1 duration-150"
            : ""
        }
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
        className={
          segment === "search"
            ? "flex h-16 w-16 items-center justify-center bg-secondary fill-accent-1 duration-150"
            : ""
        }
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
        className={
          segment === "inbox"
            ? "flex h-16 w-16 items-center justify-center bg-secondary fill-accent-1 duration-150"
            : ""
        }
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
        className={
          segment === "settings"
            ? "flex h-16 w-16 items-center justify-center bg-secondary fill-accent-1 duration-150"
            : ""
        }
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
    </nav>
  );
};
export default Sidebar;
