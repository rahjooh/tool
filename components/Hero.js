import Image from 'next/image';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero__content">
                <div className="hero__text">
                    <h1>فروش و تعمیر تخصصی ابزارآلات برقی</h1>
                    <p>
                         ابزار محمد مرجع حرفه‌ای برای خرید ابزارهای برقی اصل و ارائه خدمات تعمیر دقیق برای انواع دریل، اره، فرز، پولیش و
                        ماشین‌آلات صنعتی است.
                    </p>
                    <div className="hero__cta">
                        <a href="#products" className="btn btn--primary">
                            مشاهده محصولات
                        </a>
                        <a href="#contact" className="btn btn--secondary">
                            درخواست مشاوره
                        </a>
                    </div>
                </div>
                <div className="hero__image">
                    <Image src="/images/hero-tools.png" alt="ابزارآلات برقی" width={460} height={340} />
                </div>
            </div>
        </section>
    );
};

export default Hero;