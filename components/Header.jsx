import { useTranslation } from 'next-i18next';
import {useRouter} from 'next/router';


const Header = () => {
    const { t } = useTranslation('common'); 
    const {locale, locales, push} = useRouter();
    const handleClick = l => () => {
        push('/', undefined, {locale: l})
    };
    return (
            <header className="header">
                <div className="container">
                    <div className="header__row">
                        <a href="#" className="header__logo logo">
                            <img src="/img/logo.svg" alt="MEV Blocker"/>
                        </a>
                        <nav className="header-nav">
                            <a href="#protect-block" className="header-nav__link cta-link">{t('header.getProtected')}</a>
                            <a href="#faq-block" className="header-nav__link faq-link">FAQ</a>
                        </nav>
                        <div className="switch">
                            {locales.map(l => (
                                <button className="langSwitch" key={l} onClick={handleClick(l)}>
                                    {l}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>
    );
};



export default Header;