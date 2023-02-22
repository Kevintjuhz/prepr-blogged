import {Navbar} from 'flowbite-react';
import { useRouter } from 'next/router'

function Nav() {
    const router = useRouter();

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Blogged
    </span>
            </Navbar.Brand>
            <div className="flex md:order-2"></div>
            <Navbar.Collapse>
                <Navbar.Link
                    active={router.pathname === "/" && true}
                    href="/"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    active={router.pathname === "/news" && true}
                    href="/news"
                >
                    News
                </Navbar.Link>
                <Navbar.Link
                    active={router.pathname === "/news/articles/bookmarked" && true}
                    href="/news/articles/bookmarked"
                >
                    Bookmarked
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav;