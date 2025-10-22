const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <div>
                    <h3>بازار ابزار</h3>
                    <p>بازار ابزار با بیش از ۲۰ سال سابقه در فروش و تعمیر ابزارهای برقی صنعتی، همواره در کنار صنعتگران است.</p>
                </div>
                <div>
                    <h4>ساعات کاری</h4>
                    <p>شنبه تا چهارشنبه: ۸ صبح تا ۷ عصر</p>
                    <p>پنجشنبه: ۸ صبح تا ۳ عصر</p>
                    <p>جمعه و تعطیلات رسمی: تعطیل</p>
                </div>
                <div>
                    <h4>شبکه‌های اجتماعی</h4>
                    <ul>
                        <li><a href="https://instagram.com" target="_blank" rel="noreferrer">اینستاگرام</a></li>
                        <li><a href="https://telegram.org" target="_blank" rel="noreferrer">تلگرام</a></li>
                        <li><a href="mailto:info@bazareabzar.ir">info@bazareabzar.ir</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copy">تمامی حقوق برای بازار ابزار محفوظ است © {new Date().getFullYear()}</div>
        </footer>
    );
};

export default Footer;