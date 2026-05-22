class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header_area" id="header_contents">
        <div class="top_bar style_one hide">
          <div class="auto-container">
            <div class="row">
              <div class="col-lg-12">
                <div class="top_inner">
                  <div class="left_side common_css">
                    <div class="contntent address">
                      <i class="icon-placeholder"></i>
                      <div class="text">
                        <small>Location</small> <span>Chennai, Porur</span>
                      </div>
                    </div>
                    <div class="contntent email">
                      <i class="icon-email"></i>
                      <div class="text">
                        <small>Email</small>
                        <a href="mailto:info@dodoinfotech.com">info@dodoinfotech.com</a>
                      </div>
                    </div>
                  </div>
                  <div class="right_side common_css">
                    <div class="contntent phone">
                      <i class="icon-phone-call"></i>
                      <div class="text">
                        <small>Phone</small>
                        <a href="tel:+919445552511">+91 94455 52511</a>
                      </div>
                    </div>

                    <div class="contntent media">
                      <div class="social_media_v_one style_two">
                        <ul>
                          <li>
                            <a class="a7" href="https://www.facebook.com/profile.php?id=100094346455746"
                              target="_blank">
                              <span class="fa fa-facebook"></span>
                            </a>
                          </li>
                          <li>
                            <a class="a7"
                              href="https://www.instagram.com/imperial_info_system?fbclid=IwAR3sld7XhKfKhzijM4zvNUGnCglEsYVfc6hQv024YayG1w0PgrGiZ9Zbnls"
                              target="_blank">
                              <span class="fa fa-instagram"></span>
                            </a>
                          </li>
                          <li>
                            <a class="a7" href="https://www.linkedin.com/feed/" target="_blank">
                              <span class="fa fa-linkedin"></span>
                            </a>
                          </li>
                          <li>
                            <a class="a7" href="https://www.youtube.com/channel/UCg9M1EJBIrgCjYlWxt4mQsg"
                              target="_blank">
                              <span class="fa fa-youtube"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="pulser">
          <a href="tel:+919445552511" class="phone-icon">
            <i class="fa fa-phone"></i>
            <span class="phone-number">+91 94455 52511</span>
          </a>
        </div>

        <header class="header header_default style_one style_two_remade get_sticky_header">
          <div class="auto-container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-md-9 col-sm-9 col-xs-9 logo_column">
                <div class="header_logo_box">
                  <div class="loggo">
                    <a href="index.html" class="logo navbar-brand">
                      <img src="assets/images/logo-default1.png" alt="Dodo" class="logo_default" />
                      <img src="assets/images/logo-default1.png" alt="Dodo" class="logo__sticky" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-10 col-md-3 col-sm-3 col-xs-3 menu_column">
                <div class="navbar_togglers hamburger_menu">
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
                <div class="header_content_collapse">
                  <div class="header_menu_box">
                    <div class="navigation_menu">
                      <ul id="myNavbar" class="navbar_nav">
                        <li class="menu-item menu-item-has-children active nav-item">
                          <a href="index.html" class="dropdown-toggle nav-link">
                            <span>Home</span>
                          </a>
                        </li>
                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="free-web-development-consulting-in-nagercoil-about-us.html"
                            class="dropdown-toggle nav-link">
                            <span>About Us</span>
                          </a>
                        </li>
                        <li
                          class="menu-item menu-item-has-children dropdown dropdown_full position-static mega_menu nav-item">
                          <a href="#" class="dropdown-toggle nav-link"><span>Services</span></a>
                          <ul class="dropdown-menu">
                            <li>
                              <div class="row">
                                <div class="col-lg-3 m_column">
                                  <h6>Web Developement</h6>
                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="basic-web-development-service-thiruvananthapuram.html">Basic Web
                                          Developement</a>
                                      </li>
                                      <li>
                                        <a href="dynamic-web-development-in-trichy.html">Dynamic Web Developement</a>
                                      </li>
                                      <li>
                                        <a href="custom-web-development-in-salem.html">Custom Web Developement</a>
                                      </li>
                                      <li>
                                        <a href="e-commerce-development-in-nagercoil.html">Ecommerce Developement</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-3 m_column">
                                  <h5>Mobile Applications</h5>
                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="android-application-development-omrchennai.html">Android App
                                          Development</a>
                                      </li>
                                      <li>
                                        <a href="react-application-development-omrchennai.html">React App
                                          Development</a>
                                      </li>
                                      <li>
                                        <a href="flutter-application-development-in-erode.html">Flutter App Development
                                        </a>
                                      </li>
                                      <li>
                                        <a href="ios-application-development-trivandrum.html">IOS App Development</a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-3 m_column">
                                  <h5>Digital Marketing</h5>
                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="seo-in-ernakulam.html">SEO & AIO Services</a>
                                      </li>
                                      <li>
                                        <a href="bulk-whatsapp-marketing-in-trivandrum.html">Whatsapp & SMS Marketing</a>
                                      </li>
                                      <li>
                                        <a href="social-media-marketing-in-coimbatore.html">Social Media Marketing</a>
                                      </li>
                                      <li>
                                        <a href="best-performace-marketing-company-in-pondicherry.html">Performance Marketing</a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-lg-3 m_column">
                                  <h5>Domain & Hosting</h5>

                                  <div class="list_item_box style_one">
                                    <ul>
                                      <li>
                                        <a href="domain-registration-in-thirunelveli.html">Domain Registration</a>
                                      </li>
                                      <li>
                                        <a href="email-service-in-trivandrum.html">E-Mail Services</a>
                                      </li>
                                      <li><a href="website-hosting-in-kochi.html">Website Hosting</a></li>

                                      <li>
                                        <a href="vps-cloud-hosting-in-erode.html">VPS & Cloud Hosting</a>
                                      </li>
                                      
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children dropdown nav-item">
                          <a href="#" class="dropdown-toggle nav-link">
                            <span>Products</span>
                          </a>
                          <ul class="dropdown-menu">
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>Matrimony Web & App</span>
                              </a>
                            </li>

                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>Property Buy, Sell and Rental </span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>School Management </span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>POS Restaurant Solutions</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="404.html" class="dropdown-item nav-link">
                                <span>CRM Booking Appointment</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="best-website-designing-company-in-trivandrum-clients.html"
                            class="dropdown-toggle nav-link">
                            <span>Clients</span>
                          </a>
                        </li>
                        <li class="menu-item menu-item-has-children dropdown nav-item">
                          <a href="#" class="dropdown-toggle nav-link">
                            <span>Training</span>
                          </a>
                          <ul class="dropdown-menu">
                            <li class="menu-item nav-item">
                              <a href="web-development-training-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Web Developement</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="app-development-training-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Mobile App Developement</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="digital-marketing-training-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Digital Marketing</span>
                              </a>
                            </li>
                            <li class="menu-item nav-item">
                              <a href="internship-companies-trainging-in-nagercoil.html" class="dropdown-item nav-link">
                                <span>Internship Programs</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="web-designer-jobs-in-nagercoil.html" class="dropdown-toggle nav-link">
                            <span>Jobs</span>
                          </a>
                        </li>

                        <li class="menu-item menu-item-has-children nav-item">
                          <a href="dodo-infotech-contact-details.html" class="dropdown-toggle nav-link">
                            <span>Contact Us</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="header_right_content helloarun">
                    <ul>
                      <li>
                        <button type="button" class="contact-toggler">
                          <i class="fa fa-question a43"></i>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <!-- end of the loop -->
      </div>`

      const currentPath = window.location.pathname; 
        const navLinks = this.querySelectorAll('#myNavbar a');

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            if (currentPath.endsWith(linkHref)) {
                this.querySelectorAll('#myNavbar li').forEach(li => {
                    li.classList.remove('active');
                });
                link.closest('li').classList.add('active');
            }
        });   
    }    
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer_area footer_two" id="footer_contents"
               style="background-image: url('assets/images/footerbg.jpg')">
               <div class="footer_widgets_wrap">
                    <!--===============spacing==============-->

                    <div class="pd_top_60"></div>
                    <!--===============spacing==============-->
                    <div class="container">
                         <div class="row">
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" id="footer">
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Information</h2>
                                        </div>
                                   </div>
                                   <!--===============spacing==============-->
                                   <div class="mr_bottom_20"></div>
                                   <!--===============spacing==============-->
                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_box">
                                                  <div class="navigation_foo_inner">
                                                       <div class="menu-information-container">
                                                            <ul class="menu">
                                                                 <li class="menu-item"><a href="#00">Blogs</a></li>
                                                                 <li class="menu-item">
                                                                      <a href="#0">Success Stories</a>
                                                                 </li>
                                                                 <li class="menu-item"><a href="#0">Awards</a></li>

                                                                 <li class="menu-item">
                                                                      <a href="#0">Affiliate Partners </a>
                                                                 </li>
                                                                 <li class="menu-item">
                                                                      <a href="#0"> Site map</a>
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12" id="footer">
                                   <!--===============spacing==============-->

                                   <!--===============spacing==============-->
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Client Area</h2>
                                        </div>
                                   </div>
                                   <div class="mr_bottom_20"></div>
                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_inner">
                                                  <ul class="menu">
                                                       <li class="menu-item">
                                                            <a href="#0">Clients Reviews</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Terms & Conditions</a>
                                                       </li>

                                                       <li class="menu-item"><a href="#0">HR Payroll</a></li>
                                                       <li class="menu-item">
                                                            <a href="#0">Hire & Outsourcing</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Desktop & Laptop</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Our Service</h2>
                                        </div>
                                   </div>
                                   <!--===============spacing==============-->
                                   <div class="mr_bottom_20"></div>
                                   <!--===============spacing==============-->
                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_inner">
                                                  <ul class="menu">
                                                       <li class="menu-item">
                                                            <a
                                                                 href="basic-web-development-service-thiruvananthapuram.html">Web
                                                                 Developement</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="android-application-development-omrchennai.html">Mobile
                                                                 Applications</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="social-media-marketing-in-coimbatore.html">Digital
                                                                 Marketing</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Graphics Designing</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="web-development-training-in-nagercoil.html">Training
                                                                 & Internship</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Our Portfolio</h2>
                                        </div>
                                   </div>
                                   <!--===============spacing==============-->
                                   <div class="mr_bottom_20"></div>
                                   <!--===============spacing==============-->
                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_inner">
                                                  <ul class="menu">
                                                       <li class="menu-item">
                                                            <a href="web-development-company-in-trivandrum.html">Web
                                                                 Developement</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a
                                                                 href="mobile-app-development-company-in-thiruvananthapuram.html">Mobile
                                                                 App Developement</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a
                                                                 href="digital-marketing-training-in-thiruvananthapuram.html">Social
                                                                 Media Designs</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="graphic-design-company-in-trivandrum.html">Graphic
                                                                 Designs </a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="graphic-design-company-in-trivandrum.html">SEO & AIO
                                                                 Clients </a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div style="color: #e5102a">
                              <hr />
                         </div>
                         <div class="row">
                              <div class="col-xl-3 col-lg-5 col-md-12 col-sm-12">
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Useful Links</h2>
                                        </div>
                                   </div>
                                   <!--===============spacing==============-->
                                   <div class="mr_bottom_20"></div>
                                   <!--===============spacing==============-->

                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_inner">
                                                  <ul class="menu">
                                                       <li class="menu-item">
                                                            <a href="privacy-policy.html">Privacy Policy</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="terms-conditions.html">Terms & Conditions</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="cancellation-refund.html">Cancellation & Refund</a>
                                                       </li>
                                                       <li class="menu-item foooter-menu-items">
                                                             <h5>Phone:</h5>
                                                            <a href="tel:+919445552511"> +91 94455 52511</a>
                                                       </li>
                                                       <li class="menu-item foooter-menu-items foooter-menu-itemss">
                                                            <h5>Mail:</h5>
                                                            <a href="mailto:info@dodoinfotech.com">
                                                                  info@dodoinfotech.com</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Overseas Location</h2>
                                        </div>
                                   </div>
                                   <!--===============spacing==============-->
                                   <div class="mr_bottom_20"></div>
                                   <!--===============spacing==============-->
                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_inner">
                                                  <ul class="menu">
                                                       <li class="menu-item">
                                                            <a href="#0">United Kingdom</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Canada</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Malaysia</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Singapore</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Dubai</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Accreditation</h2>
                                        </div>
                                   </div>
                                   <!--===============spacing==============-->
                                   <div class="mr_bottom_20"></div>
                                   <!--===============spacing==============-->
                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_inner">
                                                  <ul class="menu">
                                                       <li class="menu-item">
                                                            <a href="#0">Payment Gateway</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Google Solutions</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">POS Solutions</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Meta Business Suite</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Whatsapp Bluetick Services</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                                   <div class="footer_widgets wid_tit style_one">
                                        <div class="fo_wid_title">
                                             <h2>Our Technology</h2>
                                        </div>
                                   </div>
                                   <!--===============spacing==============-->
                                   <div class="mr_bottom_20"></div>
                                   <!--===============spacing==============-->
                                   <div class="footer_widgets clearfix navigation_foo light_color style_one">
                                        <div class="navigation_foo_box">
                                             <div class="navigation_foo_inner">
                                                  <ul class="menu">
                                                       <li class="menu-item">
                                                            <a href="#0">Java, Javascript</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">React Native, NodeJS, AngularJS</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">PHP, Laravel, Python</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">Flutter, Android Native</a>
                                                       </li>
                                                       <li class="menu-item">
                                                            <a href="#0">HTML5, CSS3, Bootstrap</a>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div class="col-xl-0 col-lg-3 col-md-6 col-sm-12" id="footer"></div>
                              <div class="pd_bottom_20"></div>
                         </div>
                    </div>
               </div>
          </div>`
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)