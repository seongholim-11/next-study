import Link from "next/link";

export default function Header() {
    return (
        <header>
            My Awesome Website
            <nav>
                <Link className="nav-link" href={'/'}>HOME</Link>
                <Link className="nav-link" href={'/about'}>ABOUT</Link>
            </nav>
        </header>
    );
}
