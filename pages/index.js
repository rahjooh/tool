import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';
import ArticleCard from '../components/ArticleCard';
import products from '../data/products';
import services from '../data/services';
import articles from '../data/articles';

const repairSteps = [
    {
        title: 'دریافت ابزار و ثبت درخواست',
        description: 'تحویل حضوری در فروشگاه یا ارسال از طریق پیک امن به همراه ثبت سریال دستگاه و علائم خرابی.'
    },
    {
        title: 'عیب‌یابی تخصصی و برآورد هزینه',
        description: 'کارشناسان ما پس از تست کامل دستگاه، گزارش کتبی شامل قطعات مورد نیاز و زمان تحویل ارائه می‌کنند.'
    },
    {
        title: 'تعمیر، تست عملکرد و تحویل',
        description: 'پس از تعویض قطعات معیوب با نمونه اورجینال، دستگاه تست نهایی شده و همراه با گارانتی تعمیر تحویل می‌گردد.'
    }
];

const brands = ['بوش', 'ماکیتا', 'دیوالت', 'متابو', 'بلک اند دکر', 'آینهل'];

const IndexPage = () => {
    return (
        <>
            <Hero />

            <section id="products" className="section">
                <div className="container">
                    <h2>محصولات پرفروش ابزارآلات برقی</h2>
                    <p className="section__intro">
                        مجموعه‌ای از ابزارهای حرفه‌ای مناسب کارگاه‌ها و پروژه‌های صنعتی با ضمانت اصالت کالا و امکان ارسال سریع در سراسر کشور.
                    </p>
                    <div className="grid grid--products">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="services" className="section section--alt">
                <div className="container">
                    <h2>خدمات تخصصی تعمیر ابزارآلات</h2>
                    <p className="section__intro">
                        تیم تعمیرکاران مجرب ما با بهره‌گیری از تجهیزات روز دنیا آماده ارائه خدمات تعمیر، سرویس و کالیبراسیون انواع ابزارآلات برقی است.
                    </p>
                    <div className="grid grid--services">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2>مراحل تعمیر در بازار ابزار</h2>
                    <div className="grid grid--process">
                        {repairSteps.map((step) => (
                            <article className="card process-card" key={step.title}>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--alt">
                <div className="container">
                    <h2>برندهایی که با آنها کار می‌کنیم</h2>
                    <p className="section__intro">
                        تامین قطعات یدکی و خدمات پس از فروش برندهای معتبر جهانی با ضمانت اصالت و رعایت استانداردهای بین‌المللی.
                    </p>
                    <ul className="brand-list">
                        {brands.map((brand) => (
                            <li key={brand}>{brand}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <section id="articles" className="section">
                <div className="container">
                    <h2>مقالات تخصصی ابزارآلات</h2>
                    <p className="section__intro">
                        نکات فنی، راهنمای خرید و آموزش نگهداری از ابزارهای برقی برای افزایش بهره‌وری و ایمنی در محیط کار.
                    </p>
                    <div className="grid grid--articles">
                        {articles.map((article) => (
                            <ArticleCard key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="section section--contact">
                <div className="container">
                    <h2>درخواست مشاوره و ثبت سفارش</h2>
                    <div className="contact">
                        <div>
                            <p>
                                برای دریافت مشاوره تخصصی خرید ابزار و یا ثبت درخواست تعمیر، فرم زیر را تکمیل کنید تا کارشناسان ما در کمتر از یک ساعت با
                                شما تماس بگیرند.
                            </p>
                            <ul className="contact__details">
                                <li>تلفن: ۰۲۱-۷۵۴۲۵۰۰۰</li>
                                <li>آدرس: تهران، خیابان آزادی، نبش خیابان حبیب‌الهی، پلاک ۴۲</li>
                                <li>ایمیل: support@bazareabzar.ir</li>
                            </ul>
                        </div>
                        <form className="contact__form">
                            <label htmlFor="name">نام و نام خانوادگی</label>
                            <input id="name" name="name" type="text" placeholder="مثال: علی رضایی" />

                            <label htmlFor="phone">شماره تماس</label>
                            <input id="phone" name="phone" type="tel" placeholder="مثال: ۰۹۱۲۱۲۳۴۵۶۷" />

                            <label htmlFor="service">نوع خدمت مورد نظر</label>
                            <select id="service" name="service">
                                <option value="buy">خرید ابزار</option>
                                <option value="repair">تعمیر ابزار</option>
                                <option value="maintenance">سرویس دوره‌ای</option>
                            </select>

                            <label htmlFor="message">توضیحات تکمیلی</label>
                            <textarea id="message" name="message" rows={4} placeholder="مدل دستگاه یا نوع پروژه را شرح دهید." />

                            <button type="submit" className="btn btn--primary">
                                ارسال درخواست
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IndexPage;