+22-0
import Link from 'next/link';

const Header = () => {
    return (
        <header className="header">
            <div className="container header__content">
                <div className="header__branding">
                    <span className="header__logo">بازار ابزار</span>
                    <p className="header__tagline">فروش و تعمیر تخصصی ابزارآلات برقی</p>
                </div>
                <nav className="header__nav">
                    <Link href="#products">محصولات</Link>
                    <Link href="#services">خدمات</Link>
                    <Link href="#articles">مقالات</Link>
                    <Link href="#contact">ارتباط با ما</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;