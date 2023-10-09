import Head from 'next/head';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ReviewItem from '../components/ReviewItem';
import FAQCard from '../components/FAQCard';
import FAQData from '../public/locales/en/FAQ.json';
import revData from '../public/locales/en/review.json';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Index = () => {
    const {t} = useTranslation('common', 'FAQ');
    return (
        <>
            <Head>
                <title>MEV Blocker</title>
                <meta name="description" content="99,9% Protection from MEV" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="main">
                <section className="intro">
                    <div className="intro__container container">
                        <div className="intro__content">
                            <h1 className="intro__heading heading">{t('intro.heading')}</h1> 
                            <div className="intro__text-content text-content">
                                <p>
                                    {t('intro.text')}
                                </p>
                            </div>
                            <a href="#protect-block" className="intro__cta-btn btn">{t('intro.btn')}</a>
                            <a href="#service-block" className="intro__link link">{t('intro.link')}</a>
                        </div>
                    </div>
                </section>
                <section className="service" id="service-block">
                        <div className="container">
                        <div className="service__content">
                            <p>
                                {t('service.text')}
                            </p>
                        </div>
                        <div className="service__cards grid-row">
                            <div className="grid-col-2">
                                <div className="service-card card-style">
                                    <div className="service-card__inner">
                                        <div className="service-card__title">{t('service.title1')}</div>
                                        <div className="service-card__text">
                                            <p>
                                                {t('service.content1')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-col-2">
                                <div className="service-card card-style">

                                    <div className="service-card__inner">
                                        <div className="service-card__title">{t('service.title2')}</div>
                                        <div className="service-card__text">
                                            <p>
                                                {t('service.content2')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="defense">
                            <div className="container">
                            <div className="defense__inner">
                                <div className="defense__content">
                                    <h2 className="defense__heading heading">{t('defense.heading')}</h2>
                                    <div className="defense__text text">
                                        <p>
                                            {t('defense.text')}
                                        </p>
                                    </div>
                                </div>
                                <div className="defense__card">
                                    <p className="defense__card-item">
                                       {t('defense.content1')}
                                    </p>
                                    <p className="defense__card-item">
                                        {t('defense.content2')}
                                    </p>
                                    <p className="defense__card-item">
                                        {t('defense.content3')}
                                    </p>
                                </div>
                            </div>
                        </div>
                </section>
                <section className="sub">
                    <div className="container">
                        <h2 className="sub__heading heading">{t('sub.heading')}</h2>
                        <div className="sub__row grid-row">
                            <div className="sub-card sub-card--text card-style grid-col-3">
                                <div className="sub-card__inner">
                                    <h3 className="sub-card__title">{t('sub.freeTitle')}</h3>
                                    <div className="sub-card__content">
                                        <p>{t('sub.freeText')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-card card-style grid-col-3">
                                <div className="sub-card__inner">
                                    <h3 className="sub-card__title">{t('sub.activeTitle')}</h3>
                                    <div className="sub-card__content">
                                        <ul className="sub-card__list">
                                            <li className="sub-card__elem">{t('sub.activeLi1')}</li>
                                            <li className="sub-card__elem">{t('sub.activeLi2')}</li>
                                        </ul>
                                        <div className="sub-card__cost">
                                            <span className="sub-card__cost-value">$40</span>
                                            {t('sub.activePeriod')}
                                        </div>
                                        <a href="https://anti-mev.net/" target="_blank" className="sub-card__btn">{t('sub.btn')}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-card card-style grid-col-3">
                                <div className="sub-card__inner">
                                    <h3 className="sub-card__title">{t('sub.popularTitle')}</h3>
                                    <div className="sub-card__content">
                                        <ul className="sub-card__list">
                                            <li className="sub-card__elem">{t('sub.popularLi1')}</li>
                                            <li className="sub-card__elem">{t('sub.popularLi2')}</li>
                                        </ul>
                                        <div className="sub-card__cost">
                                            <span className="sub-card__cost-value">$400</span>
                                            {t('sub.popularPeriod')}
                                        </div>
                                        <a href="https://anti-mev.net/" target="_blank" className="sub-card__btn">{t('sub.btn')}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="protect" id="protect-block">
                    <div className="container">
                        <div className="protect__content">
                            <h2 className="protect__heading heading">{t("protect.heading")}</h2>
                            <div className="protect__text text">
                                <p>
                                    {t("protect.text")}
                                </p>
                            </div>
                        </div>
                        <div className="protect__row grid-row">
                            <div className="protect-card protect-card--btn card-style grid-col-2">
                                <div className="protect-card__inner">
                                    <h3 className="protect-card__title">{t("protect.title1")}</h3>
                                    <div className="protect-card__text">
                                        <p>
                                            {t("protect.text1")}
                                        </p>
                                    </div>
                                    <a href="https://anti-mev.net/" target="_blank" className="protect-card__btn btn btn--accent">{t("protect.btn")}</a>
                                </div>
                            </div>
                            <div className="protect-card card-style grid-col-2">
                                <div className="protect-card__inner">
                                    <h3 className="protect-card__title">{t("protect.title2")}</h3>
                                    <div className="protect-card__data">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Network Name</th>
                                                    <td>Ethereum Mainnet (Anti MEV)</td>
                                                </tr>
                                                <tr>
                                                    <th>New RPC URL</th>
                                                    <td><a>https://rpc.anti-mev.net/</a></td>
                                                </tr>
                                                <tr>
                                                    <th>Chain ID</th>
                                                    <td>1</td>
                                                </tr>
                                                <tr>
                                                    <th>Currency Symbol</th>
                                                    <td>ETH</td>
                                                </tr>
                                                <tr>
                                                    <th>Block Explorer URL</th>
                                                    <td><a>https://etherscan.io</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="protect__link">
                            {t("protect.link")}
                        </a>
                    </div>
                </section>
                <section className="about">
                    <div className="container">
                        <div className="about__content">
                            <h2 className="about__heading heading">{t('about.heading')}</h2>
                            <div className="about__text">
                                <p>
                                    {t('about.text')}
                                </p>
                                <p>
                                   {t('about.author')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners">
                    <div className="container">
                        <h2 className="partners__heading heading">{t('partners.heading')}</h2>
                        <div className="partners__content">
                            <div className="partner-item">
                                <div className="partner-item__inner">
                                    <a href="https://rsync-builder.xyz/" target="_blank" className="partner-item__name">Rsync</a>
                                </div>
                            </div>
                            <div className="partner-item">
                                <div className="partner-item__inner">
                                    <a href="https://beaverbuild.org/" target="_blank" className="partner-item__name">Beaver Build</a>
                                </div>
                            </div>
                            <div className="partner-item">
                                <div className="partner-item__inner">
                                    <a href="https://twitter.com/builder0x69?lang=en" target="_blank" className="partner-item__name">Builder 0x69</a>
                                </div>
                            </div>
                            <div className="partner-item">
                                <div className="partner-item__inner">
                                    <a href="https://www.flashbots.net/" target="_blank" className="partner-item__name">Flashbots</a>
                                </div>
                            </div>
                            <div className="partner-item">
                                <div className="partner-item__inner">
                                    <a href="https://lido.fi/" target="_blank" className="partner-item__name">Lido</a>
                                </div>
                            </div>
                            <div className="partner-item">
                                <div className="partner-item__inner">
                                    <a href="https://www.titanbuilder.xyz/" target="_blank" className="partner-item__name">Titan Builder</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq" id="faq-block">
                    <div className="container">
                        <div className="faq__inner">
                            <h2 className="faq__heading heading">FAQ</h2>
                            <div className="faq__content grid-row">
                                <div className="faq-col">
                                    {Object.keys(FAQData).map((elem, index) => (
                                            <FAQCard questionText={t(`q${index}.question`)} answerText={t(`q0.answer`)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="reviews">
                    <div className="container">
                        <h2 className="reviews__heading heading">{t('reviews.heading')}</h2>
                        <div className="reviews__content">
                            <div className="grid-row">
                            {Object.keys(revData).map((elem, index) => (
                                <ReviewItem text={t(`reviews.r${index}`)} />
                            ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="share">
                    <div className="container">
                            <div className="share__content">
                                <h2 className="share__heading heading">{t('share.heading')}</h2>
                                <a href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share" target="_blank" className="share__btn btn">{t('share.btn')}</a>
                            </div>
                    </div>
                </section> 
            </main>
            <Footer/>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'footer', 'FAQ']))
        }
    }
}

export default Index;