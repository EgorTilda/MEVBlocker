import { useTranslation } from 'next-i18next';

const Footer = () => {
    const { t } = useTranslation('footer'); 
    return (
            <footer className="footer">
                <div className="container">
                    <div className="footer__content">
                    <nav className="footer__nav grid-row">
                        <div className="grid-col-2">
                        <div className="footer__nav-item">
                            <a href="#" className="footer__nav-link footer__nav-link--title">
                            {t('supportTitle')}
                            </a>
                            <a href="https://anti-mev.net/docs" target="_blank" className="footer__nav-link">{t('docs')}</a>
                            <a href="https://anti-mev.net/#questions" target="_blank" className="footer__nav-link">{t('support')}</a>
                        </div>
                        </div>
                        <div className="grid-col-2">
                        <div className="footer__nav-item">
                            <a href="#" className="footer__nav-link footer__nav-link--title">
                                {t('about')}
                            </a>
                            <a href="https://anti-mev.net/privacy-policy" target="_blank" className="footer__nav-link">{t('privacy')}</a>
                            <a href="https://anti-mev.net/cookie-policy" target="_blank" className="footer__nav-link">{t('cookie')}</a>
                        </div>
                        </div>
                    </nav>
                    <div className="mev-blocker">
                        <div className="mev-blocker__logo">
                        <img src="/img/logo.svg" alt="Mev Blocker" />
                        </div>
                        <div className="mev-blocker__copyright">©MEV Blocker 2023</div>
                    </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;