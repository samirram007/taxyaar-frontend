import { Link } from '@tanstack/react-router'

const TestFooter = () => {
  return (
    <footer className="c-footer-w">
      <div className="container grid-footer">
        <div className="grid grid-cols-1 md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[repeat(4,1fr)]">
          <div>
            <div className="c-footer-left">
              <div className="c-footer-logo">
                <a href="#">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <ul>
                <li>
                  <Link to={'/'}>
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </Link>
                </li>
                <li>
                  <a href="#">
                    {' '}
                    <i className="fa fa-twitter" aria-hidden="true"></i>{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {' '}
                    <i className="fa fa-instagram" aria-hidden="true"></i>{' '}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" my-2">
            <div className="c-footer-nav  ">
              <h3>TAXYAAR</h3>
              <ul>
                <li>
                  <a href="#">TAXYAAR Home</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Track Refund</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
                <li>
                  <a href="#">Refer &amp; earn</a>
                </li>
                <li>
                  <a href="#">Share with friends</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" my-2">
            <div className="c-footer-nav">
              <h3>Important Tools</h3>
              <ul>
                <li>
                  <a href="#">Capital Gain Calculator</a>
                </li>
                <li>
                  <a href="#">Shares &amp; Securities Calculator</a>
                </li>
                <li>
                  <a href="#">Land &amp; Building Calculator</a>
                </li>
                <li>
                  <a href="#">Crypto Tax Calculator</a>
                </li>
                <li>
                  <a href="#">Advance Tax Estimator</a>
                </li>
                <li>
                  <a href="#">Tax Calculator 2025-26</a>
                </li>
                <li>
                  <a href="#">Tax Calculator 2025-26</a>
                </li>
                <li>
                  <a href="#">Generate Form 12BB</a>
                </li>
                <li>
                  <a href="#">Generate Rent Receipt</a>
                </li>
                <li>
                  <a href="#">Check Refund Status</a>
                </li>
                <li>
                  <a href="#">Find IFSC Code</a>
                </li>
                <li>
                  <a href="#">HRA Calculator</a>
                </li>
                <li>
                  <a href="#">EMI Calculator</a>
                </li>
                <li>
                  <a href="#">BMI Calculator</a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" my-2">
            <div className="c-footer-nav">
              <h3>Other Links</h3>
              <ul>
                <li>
                  <a href="#">Assisted Service</a>
                </li>
                <li>
                  <a href="#">Notice Assistance</a>
                </li>
                <li>
                  <a href="#">Notice Section 139(9)</a>
                </li>
                <li>
                  <a href="#">Notice Section 143(1)</a>
                </li>
                <li>
                  <a href="#">Notice Section 133(6)</a>
                </li>
                <li>
                  <a href="#">Notice Section 245</a>
                </li>
                <li>
                  <a href="#">Last date to file Income tax return</a>
                </li>
                <li>
                  <a href="#">Tax Planning</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="c-footer-bottom space-x-0  ">
          <p className=" ">
            {' '}
            2025-26 © Taxyaar Pvt. Ltd. | <span>All Rights Reserved</span>{' '}
          </p>
        </div>
        <div className=" disclaimer">
          {' '}
          Disclaimer: File your Income Tax Return online with Taxyaar. E-filing
          through Taxyaar is quick, safe, and hassle-free. Simply upload your
          Form-16 and complete your filing in just 15 minutes.{' '}
          <a href="#">taxyaar.com</a> supports salary income, interest from
          banks and other sources, capital gains, income from house property, as
          well as business and professional income. With the Taxyaar website,
          you can file your return right from your smartphone. Begin filing for
          free and get the assurance of maximum refund, guaranteed. We are the
          smartest and most reliable platform for individuals to e-file their
          returns. As an authorized e-return intermediary with the Income Tax
          Department, Government of India, we promise you the smoothest and most
          secure filing experience. We are <a href="#">taxyaar.com</a>.
        </div>
      </div>
    </footer>
  )
}
export default TestFooter
