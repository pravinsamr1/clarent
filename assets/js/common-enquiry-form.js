(function() {
    function initCommonPopup() {
        // 1. Inject trigger badge and overlay markup if not present
        let badge = document.getElementById('clarentPopupBadge');
        let overlay = document.getElementById('clarentPopupOverlay');

        if (!badge) {
            badge = document.createElement('div');
            badge.id = 'clarentPopupBadge';
            badge.className = 'clarent-popup-trigger-badge';
            badge.setAttribute('aria-label', 'Open enquiry form');
            badge.innerHTML = `<img src="assets/webimages/about/contact-form.png" alt="" width="30px">`;
            document.body.appendChild(badge);
        }

        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'clarentPopupOverlay';
            overlay.className = 'clarent-popup-overlay';
            overlay.innerHTML = `
                <div class="clarent-popup-container" id="clarentPopupContainer">
                    <button class="clarent-popup-close-btn" id="clarentPopupClose" aria-label="Close popup">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                    
                    <!-- Form View -->
                    <div class="clarent-popup-form-view" id="clarentPopupFormView">
                        <div class="clarent-popup-header">
                            <span class="clarent-popup-subtitle">Get in Touch</span>
                            <h3 class="clarent-popup-title">How Can We Help You?</h3>
                            <p class="clarent-popup-desc">Specify your details and choose the service you require. Our team will get back to you shortly.</p>
                        </div>
                        
                        <form class="clarent-popup-form" id="clarentPopupForm" novalidate>
                            <!-- Name and Email Row -->
                            <div class="clarent-popup-row">
                                <div class="clarent-popup-group">
                                    <div class="clarent-popup-input-wrapper">
                                        <i class="fa-solid fa-user field-icon"></i>
                                        <input type="text" class="clarent-popup-input" id="popupName" placeholder="Full Name" required autocomplete="name">
                                    </div>
                                </div>
                                <div class="clarent-popup-group">
                                    <div class="clarent-popup-input-wrapper">
                                        <i class="fa-solid fa-envelope field-icon"></i>
                                        <input type="email" class="clarent-popup-input" id="popupEmail" placeholder="Email Address" required autocomplete="email">
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Phone and Country Row -->
                            <div class="clarent-popup-row">
                                <div class="clarent-popup-group">
                                    <div class="clarent-popup-input-wrapper">
                                        <i class="fa-solid fa-phone field-icon"></i>
                                        <input type="tel" class="clarent-popup-input" id="popupPhone" placeholder="Phone Number" required autocomplete="tel">
                                    </div>
                                </div>
                                <div class="clarent-popup-group">
                                    <div class="clarent-popup-input-wrapper clarent-popup-select-wrapper">
                                        <i class="fa-solid fa-globe field-icon"></i>
                                        <select class="clarent-popup-select" id="popupCountry" required>
                                            <option value="" disabled selected>Select Country</option>
                                            <option value="Afghanistan">Afghanistan</option>
                                            <option value="Albania">Albania</option>
                                            <option value="Algeria">Algeria</option>
                                            <option value="Andorra">Andorra</option>
                                            <option value="Angola">Angola</option>
                                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                            <option value="Argentina">Argentina</option>
                                            <option value="Armenia">Armenia</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Azerbaijan">Azerbaijan</option>
                                            <option value="Bahamas">Bahamas</option>
                                            <option value="Bahrain">Bahrain</option>
                                            <option value="Bangladesh">Bangladesh</option>
                                            <option value="Barbados">Barbados</option>
                                            <option value="Belarus">Belarus</option>
                                            <option value="Belgium">Belgium</option>
                                            <option value="Belize">Belize</option>
                                            <option value="Benin">Benin</option>
                                            <option value="Bhutan">Bhutan</option>
                                            <option value="Bolivia">Bolivia</option>
                                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                            <option value="Botswana">Botswana</option>
                                            <option value="Brazil">Brazil</option>
                                            <option value="Brunei">Brunei</option>
                                            <option value="Bulgaria">Bulgaria</option>
                                            <option value="Burkina Faso">Burkina Faso</option>
                                            <option value="Burundi">Burundi</option>
                                            <option value="Cabo Verde">Cabo Verde</option>
                                            <option value="Cambodia">Cambodia</option>
                                            <option value="Cameroon">Cameroon</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Central African Republic">Central African Republic</option>
                                            <option value="Chad">Chad</option>
                                            <option value="Chile">Chile</option>
                                            <option value="China">China</option>
                                            <option value="Colombia">Colombia</option>
                                            <option value="Comoros">Comoros</option>
                                            <option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
                                            <option value="Congo (Kinshasa)">Congo (Kinshasa)</option>
                                            <option value="Costa Rica">Costa Rica</option>
                                            <option value="Croatia">Croatia</option>
                                            <option value="Cuba">Cuba</option>
                                            <option value="Cyprus">Cyprus</option>
                                            <option value="Czech Republic">Czech Republic</option>
                                            <option value="Denmark">Denmark</option>
                                            <option value="Djibouti">Djibouti</option>
                                            <option value="Dominica">Dominica</option>
                                            <option value="Dominican Republic">Dominican Republic</option>
                                            <option value="Ecuador">Ecuador</option>
                                            <option value="Egypt">Egypt</option>
                                            <option value="El Salvador">El Salvador</option>
                                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                                            <option value="Eritrea">Eritrea</option>
                                            <option value="Estonia">Estonia</option>
                                            <option value="Eswatini">Eswatini</option>
                                            <option value="Ethiopia">Ethiopia</option>
                                            <option value="Fiji">Fiji</option>
                                            <option value="Finland">Finland</option>
                                            <option value="France">France</option>
                                            <option value="Gabon">Gabon</option>
                                            <option value="Gambia">Gambia</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ghana">Ghana</option>
                                            <option value="Greece">Greece</option>
                                            <option value="Grenada">Grenada</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Guinea">Guinea</option>
                                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                                            <option value="Guyana">Guyana</option>
                                            <option value="Haiti">Haiti</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Hungary">Hungary</option>
                                            <option value="Iceland">Iceland</option>
                                            <option value="India">India</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Iran">Iran</option>
                                            <option value="Iraq">Iraq</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="Israel">Israel</option>
                                            <option value="Italy">Italy</option>
                                            <option value="Jamaica">Jamaica</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Jordan">Jordan</option>
                                            <option value="Kazakhstan">Kazakhstan</option>
                                            <option value="Kenya">Kenya</option>
                                            <option value="Kiribati">Kiribati</option>
                                            <option value="Korea, North">Korea, North</option>
                                            <option value="Korea, South">Korea, South</option>
                                            <option value="Kosovo">Kosovo</option>
                                            <option value="Kuwait">Kuwait</option>
                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                            <option value="Laos">Laos</option>
                                            <option value="Latvia">Latvia</option>
                                            <option value="Lebanon">Lebanon</option>
                                            <option value="Lesotho">Lesotho</option>
                                            <option value="Liberia">Liberia</option>
                                            <option value="Libya">Libya</option>
                                            <option value="Liechtenstein">Liechtenstein</option>
                                            <option value="Lithuania">Lithuania</option>
                                            <option value="Luxembourg">Luxembourg</option>
                                            <option value="Madagascar">Madagascar</option>
                                            <option value="Malawi">Malawi</option>
                                            <option value="Malaysia">Malaysia</option>
                                            <option value="Maldives">Maldives</option>
                                            <option value="Mali">Mali</option>
                                            <option value="Malta">Malta</option>
                                            <option value="Marshall Islands">Marshall Islands</option>
                                            <option value="Mauritania">Mauritania</option>
                                            <option value="Mauritius">Mauritius</option>
                                            <option value="Mexico">Mexico</option>
                                            <option value="Micronesia">Micronesia</option>
                                            <option value="Moldova">Moldova</option>
                                            <option value="Monaco">Monaco</option>
                                            <option value="Mongolia">Mongolia</option>
                                            <option value="Montenegro">Montenegro</option>
                                            <option value="Morocco">Morocco</option>
                                            <option value="Mozambique">Mozambique</option>
                                            <option value="Myanmar">Myanmar</option>
                                            <option value="Namibia">Namibia</option>
                                            <option value="Nauru">Nauru</option>
                                            <option value="Nepal">Nepal</option>
                                            <option value="Netherlands">Netherlands</option>
                                            <option value="New Zealand">New Zealand</option>
                                            <option value="Nicaragua">Nicaragua</option>
                                            <option value="Niger">Niger</option>
                                            <option value="Nigeria">Nigeria</option>
                                            <option value="North Macedonia">North Macedonia</option>
                                            <option value="Norway">Norway</option>
                                            <option value="Oman">Oman</option>
                                            <option value="Pakistan">Pakistan</option>
                                            <option value="Palau">Palau</option>
                                            <option value="Palestine">Palestine</option>
                                            <option value="Panama">Panama</option>
                                            <option value="Papua New Guinea">Papua New Guinea</option>
                                            <option value="Paraguay">Paraguay</option>
                                            <option value="Peru">Peru</option>
                                            <option value="Philippines">Philippines</option>
                                            <option value="Poland">Poland</option>
                                            <option value="Portugal">Portugal</option>
                                            <option value="Qatar">Qatar</option>
                                            <option value="Romania">Romania</option>
                                            <option value="Russia">Russia</option>
                                            <option value="Rwanda">Rwanda</option>
                                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                            <option value="Saint Lucia">Saint Lucia</option>
                                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                            <option value="Samoa">Samoa</option>
                                            <option value="San Marino">San Marino</option>
                                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                            <option value="Senegal">Senegal</option>
                                            <option value="Serbia">Serbia</option>
                                            <option value="Seychelles">Seychelles</option>
                                            <option value="Sierra Leone">Sierra Leone</option>
                                            <option value="Singapore">Singapore</option>
                                            <option value="Slovakia">Slovakia</option>
                                            <option value="Slovenia">Slovenia</option>
                                            <option value="Solomon Islands">Solomon Islands</option>
                                            <option value="Somalia">Somalia</option>
                                            <option value="South Africa">South Africa</option>
                                            <option value="South Sudan">South Sudan</option>
                                            <option value="Spain">Spain</option>
                                            <option value="Sri Lanka">Sri Lanka</option>
                                            <option value="Sudan">Sudan</option>
                                            <option value="Suriname">Suriname</option>
                                            <option value="Sweden">Sweden</option>
                                            <option value="Switzerland">Switzerland</option>
                                            <option value="Syria">Syria</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Tajikistan">Tajikistan</option>
                                            <option value="Tanzania">Tanzania</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="Timor-Leste">Timor-Leste</option>
                                            <option value="Togo">Togo</option>
                                            <option value="Tonga">Tonga</option>
                                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                            <option value="Tunisia">Tunisia</option>
                                            <option value="Turkey">Turkey</option>
                                            <option value="Turkmenistan">Turkmenistan</option>
                                            <option value="Tuvalu">Tuvalu</option>
                                            <option value="Uganda">Uganda</option>
                                            <option value="Ukraine">Ukraine</option>
                                            <option value="United Arab Emirates">United Arab Emirates</option>
                                            <option value="United Kingdom">United Kingdom</option>
                                            <option value="United States">United States</option>
                                            <option value="Uruguay">Uruguay</option>
                                            <option value="Uzbekistan">Uzbekistan</option>
                                            <option value="Vanuatu">Vanuatu</option>
                                            <option value="Vatican City">Vatican City</option>
                                            <option value="Venezuela">Venezuela</option>
                                            <option value="Vietnam">Vietnam</option>
                                            <option value="Yemen">Yemen</option>
                                            <option value="Zambia">Zambia</option>
                                            <option value="Zimbabwe">Zimbabwe</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Multi-select Services -->
                            <div class="clarent-popup-group">
                                <div class="clarent-ms-wrapper" id="clarentMsWrapper">
                                    <div class="clarent-ms-trigger" id="clarentMsTrigger" tabindex="0" role="button" aria-haspopup="listbox" aria-expanded="false">
                                        <i class="fa-solid fa-briefcase field-icon"></i>
                                        <span class="clarent-ms-placeholder" id="clarentMsPlaceholder">Select Required Services</span>
                                        <i class="fa-solid fa-chevron-down clarent-ms-arrow" id="clarentMsArrow"></i>
                                    </div>
                                    <div class="clarent-ms-dropdown" id="clarentMsDropdown" role="listbox" aria-multiselectable="true">
                                        <div class="clarent-ms-group-label">GRC Services</div>
                                        <label class="clarent-ms-option"><input type="checkbox" value="GRC services - Risk Assessment"><span>Risk Assessment</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="GRC services - Internal Audit"><span>Internal Audit</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="GRC services - Security posture uplift"><span>Security Posture Uplift</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="GRC services - Cyber Security Programs"><span>Cyber Security Programs</span></label>

                                        <div class="clarent-ms-group-label">Security Architecture</div>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Security Architecture - Zero Trust"><span>Zero Trust</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Security Architecture - Microsoft"><span>Microsoft</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Security Architecture - AWS"><span>AWS</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Security Architecture - Other"><span>Other</span></label>

                                        <div class="clarent-ms-group-label">Other Services</div>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Security Engineering solutions"><span>Security Engineering Solutions</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Security Consultations"><span>Security Consultations</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Psychometric Analysis"><span>Psychometric Analysis</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Penetration Testing services"><span>Penetration Testing Services</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Training & Awareness solutions"><span>Training &amp; Awareness Solutions</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="RSA Archer solutions"><span>RSA Archer Solutions</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="ServiceNow solutions"><span>ServiceNow Solutions</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Virtualization solutions"><span>Virtualization Solutions</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Become a Partner"><span>Become a Partner</span></label>
                                        <label class="clarent-ms-option"><input type="checkbox" value="Other services"><span>Other Services</span></label>
                                    </div>
                                    <!-- hidden input to carry values on submit -->
                                    <input type="hidden" id="popupServiceHidden" name="services">
                                </div>
                            </div>
                            
                            <!-- Textarea Message -->
                            <div class="clarent-popup-group">
                                <div class="clarent-popup-input-wrapper">
                                    <i class="fa-solid fa-comment-dots field-icon" style="top: 17px;"></i>
                                    <textarea class="clarent-popup-textarea" id="popupMessage" placeholder="How can we assist you? Tell us about your project..." required></textarea>
                                </div>
                            </div>
                            
                            <!-- Submit Button -->
                            <button type="submit" class="clarent-popup-btn" id="popupSubmitBtn">
                                <span>Send Request</span>
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                    
                    <!-- Success View -->
                    <div class="clarent-popup-success-view" id="clarentPopupSuccessView">
                        <div class="clarent-success-checkmark">
                            <div class="check-icon">
                                <span class="icon-line line-tip"></span>
                                <span class="icon-line line-long"></span>
                                <div class="icon-circle"></div>
                                <div class="icon-fix"></div>
                            </div>
                        </div>
                        <h3 class="clarent-popup-success-title" id="successTitle">Thank you!</h3>
                        <p class="clarent-popup-success-desc" id="successDesc">Your request has been received. Our team will contact you shortly.</p>
                        <button class="clarent-popup-btn" style="max-width: 200px; margin-top: 24px;" id="successCloseBtn" type="button">
                            <span>Close Window</span>
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(overlay);
        }

        // 2. Form references & logic
        const container = document.getElementById('clarentPopupContainer');
        const formView = document.getElementById('clarentPopupFormView');
        const successView = document.getElementById('clarentPopupSuccessView');
        const form = document.getElementById('clarentPopupForm');
        
        const closeBtn = document.getElementById('clarentPopupClose');
        const successCloseBtn = document.getElementById('successCloseBtn');
        
        const fields = [
            document.getElementById('popupName'),
            document.getElementById('popupEmail'),
            document.getElementById('popupPhone'),
            document.getElementById('popupCountry'),
            document.getElementById('popupMessage')
        ];

        // ---- Multi-Select Logic ----
        const msWrapper   = document.getElementById('clarentMsWrapper');
        const msTrigger   = document.getElementById('clarentMsTrigger');
        const msDropdown  = document.getElementById('clarentMsDropdown');
        const msPlaceholder = document.getElementById('clarentMsPlaceholder');
        const msHidden    = document.getElementById('popupServiceHidden');

        function updateMsDisplay() {
            if (!msDropdown || !msPlaceholder || !msHidden) return;
            const checked = msDropdown.querySelectorAll('input[type="checkbox"]:checked');
            if (checked.length === 0) {
                msPlaceholder.textContent = 'Select Required Services';
                msPlaceholder.classList.remove('has-selection');
                msWrapper.classList.remove('ms-error');
            } else if (checked.length === 1) {
                msPlaceholder.textContent = checked[0].value;
                msPlaceholder.classList.add('has-selection');
            } else {
                msPlaceholder.textContent = checked.length + ' services selected';
                msPlaceholder.classList.add('has-selection');
            }
            msHidden.value = Array.from(checked).map(c => c.value).join(', ');
        }

        function openMs() {
            if (!msWrapper || !msTrigger) return;
            msWrapper.classList.add('open');
            msTrigger.setAttribute('aria-expanded', 'true');
        }

        function closeMs() {
            if (!msWrapper || !msTrigger) return;
            msWrapper.classList.remove('open');
            msTrigger.setAttribute('aria-expanded', 'false');
        }

        if (msTrigger) {
            msTrigger.addEventListener('click', function(e) {
                e.stopPropagation();
                msWrapper.classList.contains('open') ? closeMs() : openMs();
            });

            msTrigger.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); msWrapper.classList.contains('open') ? closeMs() : openMs(); }
                if (e.key === 'Escape') closeMs();
            });
        }

        if (msDropdown) {
            msDropdown.querySelectorAll('input[type="checkbox"]').forEach(function(cb) {
                cb.addEventListener('change', function() {
                    updateMsDisplay();
                    msWrapper.classList.remove('ms-error');
                });
            });
        }

        document.addEventListener('click', function(e) {
            if (msWrapper && !msWrapper.contains(e.target)) closeMs();
        });
        // ---- End Multi-Select Logic ----

        function resetPopupForm() {
            form.reset();
            fields.forEach(f => {
                if (f) {
                    f.disabled = false;
                    f.classList.remove('error');
                }
            });
            if (msDropdown) {
                msDropdown.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
                updateMsDisplay();
                closeMs();
                msWrapper.classList.remove('ms-error');
            }
            const submitBtn = document.getElementById('popupSubmitBtn');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('submitting');
                const planeIcon = submitBtn.querySelector('.fa-paper-plane');
                if (planeIcon) planeIcon.style.display = '';
                const btnText = submitBtn.querySelector('span');
                if (btnText) btnText.textContent = 'Send Request';
                const loader = submitBtn.querySelector('.loader-icon');
                if (loader) loader.remove();
            }
            formView.style.display = 'block';
            formView.style.opacity = '1';
            formView.style.transition = '';
            successView.style.display = 'none';
            successView.classList.remove('active');
        }

        showBadge();

        function showPopup() {
            resetPopupForm();
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            badge.classList.add('active-modal');
            console.log("Clarent Popup: Modal opened successfully.");
        }
        
        function closePopup() {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            sessionStorage.setItem('clarent_popup_closed', 'true');
            badge.classList.remove('active-modal');
            console.log("Clarent Popup: Modal closed.");
        }
        
        function showBadge() {
            badge.classList.add('visible');
            console.log("Clarent Trigger Badge: Displayed.");
        }
        
        function hideBadge() {
            badge.classList.remove('visible');
            console.log("Clarent Trigger Badge: Hidden.");
        }
        
        const isLocal = window.location.protocol === 'file:' || 
                        window.location.hostname === 'localhost' || 
                        window.location.hostname === '127.0.0.1' ||
                        window.location.hash === '#test-popup';
                        
        const alreadyClosed = sessionStorage.getItem('clarent_popup_closed');
        const alreadySubmitted = sessionStorage.getItem('clarent_popup_submitted');
        
        if (isLocal || (!alreadyClosed && !alreadySubmitted)) {
            console.log("Clarent Popup: Scheduled to show in 5 seconds.");
            setTimeout(showPopup, 5000);
        } else {
            console.log("Clarent Popup: Suppressed by sessionStorage.");
        }
        
        if (closeBtn) closeBtn.addEventListener('click', closePopup);
        if (successCloseBtn) successCloseBtn.addEventListener('click', closePopup);
        
        badge.addEventListener('click', function() {
            if (overlay.classList.contains('active')) {
                closePopup();
            } else {
                showPopup();
            }
        });
        
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closePopup();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.classList.contains('active')) {
                closePopup();
            }
        });
        
        fields.forEach(field => {
            if (!field) return;
            const clearError = () => {
                field.classList.remove('error');
            };
            field.addEventListener('input', clearError);
            if (field.tagName !== 'SELECT') {
                const closeNiceSelect = () => {
                    const serviceField = document.getElementById('popupService');
                    if (serviceField) {
                        const niceSelect = serviceField.nextElementSibling;
                        if (niceSelect && niceSelect.classList.contains('nice-select')) {
                            niceSelect.classList.remove('open');
                        }
                    }
                };
                field.addEventListener('focus', closeNiceSelect);
                field.addEventListener('click', closeNiceSelect);
            }
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameField = document.getElementById('popupName');
            const emailField = document.getElementById('popupEmail');
            const phoneField = document.getElementById('popupPhone');
            const countryField = document.getElementById('popupCountry');
            const messageField = document.getElementById('popupMessage');
            const submitBtn = document.getElementById('popupSubmitBtn');
            
            let isValid = true;
            
            if (!nameField.value.trim()) {
                nameField.classList.add('error');
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
                emailField.classList.add('error');
                isValid = false;
            }
            
            if (!phoneField.value.trim() || phoneField.value.trim().length < 6) {
                phoneField.classList.add('error');
                isValid = false;
            }

            if (!countryField.value) {
                countryField.classList.add('error');
                isValid = false;
            }

            const checkedServices = msDropdown ? msDropdown.querySelectorAll('input[type="checkbox"]:checked') : [];
            if (!checkedServices || checkedServices.length === 0) {
                if (msWrapper) msWrapper.classList.add('ms-error');
                isValid = false;
            }
            
            if (!messageField.value.trim()) {
                messageField.classList.add('error');
                isValid = false;
            }
            
            if (!isValid) {
                container.classList.add('shake');
                setTimeout(() => { container.classList.remove('shake'); }, 400);
                return;
            }
            
            submitBtn.disabled = true;
            submitBtn.classList.add('submitting');
            
            const btnText = submitBtn.querySelector('span');
            const planeIcon = submitBtn.querySelector('.fa-paper-plane');
            
            const loader = document.createElement('i');
            loader.className = 'fa-solid fa-spinner fa-spin loader-icon';
            loader.style.marginLeft = '6px';
            loader.style.display = 'none';
            submitBtn.appendChild(loader);
            
            setTimeout(() => {
                if (planeIcon) planeIcon.style.display = 'none';
                if (btnText) btnText.textContent = 'Sending Request...';
                loader.style.display = 'inline-block';
            }, 400);
            
            fields.forEach(f => { if (f) f.disabled = true; });
            
            function triggerConfetti() {
                const colors = ['#5135ff', '#ff5455', '#28a745', '#ffc107', '#17a2b8', '#fd7e14'];
                const count = 75;
                
                for (let i = 0; i < count; i++) {
                    const confetti = document.createElement('div');
                    const size = Math.floor(Math.random() * 8) + 6;
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    
                    confetti.style.width = `${size}px`;
                    confetti.style.height = `${size}px`;
                    confetti.style.backgroundColor = color;
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
                    confetti.style.position = 'fixed';
                    confetti.style.zIndex = '999999';
                    
                    const startX = window.innerWidth / 2;
                    const startY = window.innerHeight / 2 - 30;
                    
                    confetti.style.left = `${startX}px`;
                    confetti.style.top = `${startY}px`;
                    
                    document.body.appendChild(confetti);
                    
                    const angle = Math.random() * Math.PI * 2;
                    const speed = Math.random() * 9 + 6;
                    let velX = Math.cos(angle) * speed;
                    let velY = Math.sin(angle) * speed - 2.5;
                    let posX = startX;
                    let posY = startY;
                    let rotation = Math.random() * 360;
                    const rotationSpeed = Math.random() * 16 - 8;
                    const gravity = 0.28;
                    
                    let opacity = 1;
                    const startTime = Date.now();
                    
                    function updateConfetti() {
                        velY += gravity;
                        velX *= 0.98;
                        posX += velX;
                        posY += velY;
                        rotation += rotationSpeed;
                        
                        confetti.style.left = `${posX}px`;
                        confetti.style.top = `${posY}px`;
                        confetti.style.transform = `rotate(${rotation}deg)`;
                        
                        const elapsed = Date.now() - startTime;
                        if (elapsed > 1200) {
                            opacity = 1 - (elapsed - 1200) / 800;
                            confetti.style.opacity = opacity;
                        }
                        
                        if (elapsed < 2000) {
                            requestAnimationFrame(updateConfetti);
                        } else {
                            confetti.remove();
                        }
                    }
                    requestAnimationFrame(updateConfetti);
                }
            }
            
            function enableFormInputs() {
                submitBtn.disabled = false;
                submitBtn.classList.remove('submitting');
                const planeIcon = submitBtn.querySelector('.fa-paper-plane');
                if (planeIcon) planeIcon.style.display = '';
                const btnText = submitBtn.querySelector('span');
                if (btnText) btnText.textContent = 'Send Request';
                const loader = submitBtn.querySelector('.loader-icon');
                if (loader) loader.remove();
                fields.forEach(f => { if (f) f.disabled = false; });
            }

            const payload = {
                name: nameField.value.trim(),
                email: emailField.value.trim(),
                phone: phoneField.value.trim(),
                country: countryField.value,
                services: Array.from(checkedServices).map(c => c.value).join(', '),
                message: messageField.value.trim()
            };

            fetch('send-enquiry.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    return response.json();
                } else {
                    return response.text().then(text => {
                        throw new Error("Invalid response format: Received plain text/HTML instead of JSON. Make sure you are testing on a PHP-enabled server (e.g., using 'php -S 127.0.0.1:8000' in terminal) rather than a static VS Code Live Server.");
                    });
                }
            })
            .then(data => {
                if (data.success) {
                    sessionStorage.setItem('clarent_popup_submitted', 'true');
                    const userName = nameField.value.trim().split(' ')[0];
                    const userEmail = emailField.value.trim();
                    const userPhone = phoneField.value.trim();
                    const chosenServices = payload.services;
                    
                    document.getElementById('successTitle').textContent = `Thank you, ${userName}!`;
                    document.getElementById('successDesc').innerHTML = `Your request for <strong>${chosenServices}</strong> has been received.<br>Our engineering team will contact you at <strong>${userEmail}</strong> or <strong>${userPhone}</strong> within 24 hours.`;
                    
                    formView.style.transition = 'opacity 0.3s ease';
                    formView.style.opacity = '0';
                    
                    setTimeout(function() {
                        formView.style.display = 'none';
                        successView.style.display = 'flex';
                        
                        setTimeout(function() {
                            successView.classList.add('active');
                            triggerConfetti();
                            setTimeout(function() {
                                if (overlay.classList.contains('active') && successView.classList.contains('active')) {
                                    closePopup();
                                }
                            }, 7000);
                        }, 50);
                    }, 300);
                } else {
                    alert(data.message || 'Failed to send your request. Please try again.');
                    enableFormInputs();
                }
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                if (error.message && error.message.indexOf("Invalid response format") !== -1) {
                    alert(error.message);
                } else {
                    alert('Connection error. Please check your PHP server connection and try again.');
                }
                enableFormInputs();
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCommonPopup);
    } else {
        initCommonPopup();
    }
})();
