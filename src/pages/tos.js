import React from 'react';
import styled from 'styled-components';
import Seo from '../components/seo';

export const Container = styled.div`
  padding: 48px;
  max-width: 1200px;
  margin: 20px auto;
  background: #171F2A;
  border-radius: 16px;
  z-index: 3;
  position: relative;
  .lastUpdated {
    font-family: 'Titillium Web', sans-serif;
    margin-bottom: 24px;
    font-weight: normal;
    font-size: 1.1rem;
    line-height: 1.5;
    color: #B6C1D5;
    text-align: center;
  }
  a {
    color: #B6C1D5;
    text-decoration: underline;
    &:hover, &:focus, &:active {
      color: #B6C1D5;
      text-decoration: underline;
    }
  }
  b {
    font-weight: bold;
  }
  p, h3 {
    margin: 1em 0;
  }
  p {
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #B6C1D5;
  }
  h2 {
    font-family: 'Titillium Web', sans-serif;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: #FFFFFF;
  }
  h3 {
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 700;
    font-family: 'Titillium Web', sans-serif;
    color: #FFFFFF;
  }
  ul {
    list-style: unset;
  }
  li {
    font-family: 'Titillium Web', sans-serif;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 1.5;
    color: #B6C1D5;
    padding: 2px 0px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    margin: 12px;
  }
`;

const TermsOfService = () => {
  return (
    <Container>
      <h2>Terms of Service</h2>
      <div className='lastUpdated'>
        <b>Last updated on:</b> 06/22/2023
      </div>
      <div>
        <Paragraph>
            Welcome, and thank you for your interest in Spyn, Inc. (“<b>Spyn</b>,” "<b>FitHub</b>," “<b>we</b>,” “<b>our</b>,” or “<b>us</b>”) and our website at <a href="https://www.spyn.ai">www.spyn.ai</a>, <a href="https://www.aifithub.com">www.aifithub.com</a>, along with our related websites, hosted applications, mobile or other downloadable applications, and other services provided by us (collectively, the “<b>Service</b>”). These Terms of Service are a legally binding contract between you and Spyn regarding your use of the Service.
          </Paragraph>
          <h3 align="center">
            <b>PLEASE READ THE FOLLOWING TERMS CAREFULLY</b>
          </h3>
          <Paragraph>
            <b>
              BY CLICKING “I ACCEPT,” OR BY DOWNLOADING, INSTALLING, OR
              OTHERWISE ACCESSING OR USING THE SERVICE
            </b>
            , YOU AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION
            TO YOUR USE OF THE SERVICE, YOU AGREE TO BE BOUND BY, THE FOLLOWING
            TERMS AND CONDITIONS, INCLUDING SPYN’S PRIVACY POLICY (TOGETHER,
            THESE “<b>TERMS</b>”). IF YOU ARE NOT ELIGIBLE, OR DO NOT AGREE TO
            THE TERMS, THEN YOU DO NOT HAVE OUR PERMISSION TO USE THE SERVICE.
            YOUR USE OF THE SERVICE, AND SPYN’S PROVISION OF THE SERVICE TO YOU,
            CONSTITUTES AN AGREEMENT BY SPYN AND BY YOU TO BE BOUND BY THESE
            TERMS.
          </Paragraph>
          <Paragraph>
            <b>NO MEDICAL ADVICE DISCLAIMER</b>: DO NOT USE THE SITE FOR MEDICAL
            SERVICES. IN THE EVENT OF AN EMERGENCY, DIAL 911, YOUR LOCAL
            EMERGENCY ASSISTANCE NUMBER, AND/OR YOUR PERSONAL PHYSICIAN. THIS
            SITE IS INTENDED TO PROVIDE OUR USERS WITH EDUCATIONAL INFORMATION
            ONLY AND IS ONLY PROVIDED AS A CONVENIENCE, NOT AS A VALID RESOURCE
            FOR INFORMATION OR CONTACT OR COMMUNICATION WITH A MEDICAL
            PROFESSIONAL. IF YOU EXPERIENCE ANY PAIN OR EXACERBATION OR HAVE A
            CHANGE IN MEDICAL CONDITION, YOU SHOULD IMMEDIATELY SEEK APPROPRIATE
            MEDICAL ATTENTION. YOU ACKNOWLEDGE AND AGREE THAT SPYN IS NOT AND
            WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGES CAUSED BY YOUR USE AND/OR
            RELIANCE ON THE SITE OR ANY INFORMATION OBTAINED OR ACCESSED THROUGH
            THE SITE.
          </Paragraph>
          <Paragraph>
            <b>ARBITRATION NOTICE</b>. EXCEPT FOR CERTAIN KINDS OF DISPUTES
            DESCRIBED IN SECTION 17, YOU AGREE THAT DISPUTES ARISING UNDER THESE
            TERMS WILL BE RESOLVED BY BINDING, INDIVIDUAL ARBITRATION, AND BY
            ACCEPTING THESE TERMS, YOU AND SPYN ARE EACH WAIVING THE RIGHT TO A
            TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR
            REPRESENTATIVE PROCEEDING. YOU AGREE TO GIVE UP YOUR RIGHT TO GO TO
            COURT TO ASSERT OR DEFEND YOUR RIGHTS UNDER THIS CONTRACT (EXCEPT
            FOR MATTERS THAT MAY BE TAKEN TO SMALL CLAIMS COURT). YOUR RIGHTS
            WILL BE DETERMINED BY A NEUTRAL ARBITRATOR AND NOT A JUDGE OR JURY.
            (SEE SECTION 17.)
          </Paragraph>
          <Paragraph>
            <b>SERVICE PROVIDERS’ NOTICE</b>. If you are an healthcare
            professional, clinic, organization or other authorized service
            provider (“<b>Service Provider</b>”), you may create a personalized
            professional profile, subject to these Terms in addition to the
            Independent Service Provider Terms and Conditions available here.
          </Paragraph>
          <Paragraph>
            <b>INFORMATION PURPOSES ONLY</b>. ANY AND ALL CONTENT OF SPYN IS
            INTENDED FOR GENERAL INFORMATIONAL PURPOSES ONLY. SPYN DOES NOT
            GUARANTEE OR REPRESENT THAT ALL CONTENT IS ACCURATE, COMPLETE, OR
            RELIABLE. SPYN MAKES NO DETERMINATION REGARDING THE SUITABILITY OF
            ANY EXERCISE OR ACTIVITY ON THE PLATFORM, OR OF ANY THERAPIST,
            PHYSICIAN, HEALTHCARE PROFESSIONAL, OR SERVICE PROVIDER WITH RESPECT
            TO YOUR MEDICAL OR HEALTH CONDITION OR CIRCUMSTANCE. SPYN DOES NOT
            ENDORSE ANY SERVICE PROVIDER LISTED ON ITS PLATFORM. SPYN DOES NOT
            DETERMINE IF A SERVICE PROVIDER LISTED ON THE SITE IS DULY LICENSED,
            REGISTERED, OR IN GOOD STANDING WITH THE STATE AND/OR ITS
            PROFESSIONAL BOARD. YOU SHOULD NOT RELY ON THIS SITE OR ANY CONTENT
            OR INFORMATION FOUND OR ACCESSED ON THE SITE AS A SOURCE OF
            PROFESSIONAL, MEDICAL OR MENTAL HEALTH ADVICE. SPYN DOES NOT PROVIDE
            ANY MEDICAL OR MENTAL HEALTH SERVICES, ADVICE, OPINIONS, OR
            RECOMMENDATIONS, AND IS NOT LICENSED TO DO SO.
          </Paragraph>
          <Paragraph>
            <b>USER ACKNOWLEDGMENT</b>: YOU ACKNOWLEDGE AND AGREE THAT YOU TAKE
            FULL RESPONSIBILITY IN USING SPYN AND ITS INFORMATION, INCLUDING
            INFORMATION PERTAINING TO ANY SERVICE PROVIDER.
          </Paragraph>
          <Paragraph bulletLabel={<p>1.</p>}>
            <p>
              <b>Spyn Service Overview</b>. Spyn is a platform for home
              activities that enables asynchronous training, real-time feedback,
              and in-depth insights by utilizing AI and computer vision to track
              body movements. Professional Service Providers can establish
              professional profiles on the platform, communicate with their
              clients in a one-on-one training environment both real time and
              asynchronous and assign customized activities to each of their
              clients.
            </p>
          </Paragraph>
          <Paragraph bulletLabel={<p>2.</p>}>
            <p>
              <b>Eligibility</b>. You must be at least 18-years old to use the
              Service. By agreeing to these Terms, you represent and warrant to
              us that: (a) you are at least 18-years old; (b) you have not
              previously been suspended or removed from the Service; and (c)
              your registration and your use of the Service is in compliance
              with any and all applicable laws and regulations. If you are an
              entity, organization, or company, the individual accepting these
              Terms on your behalf represents and warrants that they have
              authority to bind you to these Terms and you agree to be bound by
              these Terms.
            </p>
          </Paragraph>
          <Paragraph bulletLabel={<p>3.</p>}>
            <p>
              <b>Accounts and Registration</b>. To access most features of the
              Service, you must register for an account. When you register for
              an account, you may be required to provide us with some
              information about yourself, such as your name, [date of birth,]
              email address, or other contact information. You agree that the
              information you provide to us is accurate, complete, and not
              misleading, and that you will keep it accurate and up to date at
              all times. When you register, you will be asked to create a
              password. You are solely responsible for maintaining the
              confidentiality of your account and password, and you accept
              responsibility for all activities that occur under your account.
              If you believe that your account is no longer secure, then you
              should immediately notify us at support@aifithub.com. If you are accessing
              the Service through a Service Provider, your Service Provider will
              be responsible for your initial registration with Spyn.
            </p>
          </Paragraph>
          <Paragraph bulletLabel={<p>4.</p>}>
            <p>
              <b>General Payment Terms</b>. Certain features of the Service may
              require you to pay fees. Before you pay any fees, you will have an
              opportunity to review and accept the fees that you will be
              charged. All fees are in U.S. Dollars and are non-refundable
              unless otherwise specifically provided for herein.
            </p>
            <Paragraph bulletLabel={<p>4.1</p>}>
              <p>
                <b>Access Through Service Provider</b>. If you are accessing the
                Service though a Service Provider, you will be responsible for
                any amounts you may owe to that Service Provider. If you are
                accessing the Service as a Service Provider or an individual
                user, the following terms of this Section 4 apply.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>4.2</p>}>
              <p>
                <b>Price</b>. Spyn reserves the right to determine pricing for
                the Service. Spyn will make reasonable efforts to keep pricing
                information published on the Service up to date. We encourage
                you to check our pricing page periodically for current pricing
                information. Spyn may change the fees for any feature of the
                Service, including additional fees or charges, if Spyn gives you
                advance notice of changes before they apply. Spyn, at its sole
                discretion, may make promotional offers with different features
                and different pricing to any of Spyn’s customers. These
                promotional offers, unless made to you, will not apply to your
                offer or these Terms.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>4.3</p>}>
              <p>
                <b>Authorization</b>. You authorize Spyn to charge all sums for
                the orders that you make and any level of Service you select as
                described in these Terms or published by Spyn, including all
                applicable taxes, to the payment method specified in your
                account. If you pay any fees with a credit card, then Spyn may
                seek pre-authorization of your credit card account prior to your
                purchase to verify that the credit card is valid and has the
                necessary funds or credit available to cover your purchase.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>4.4</p>}>
              <p>
                <b>Subscription Service</b>. The Service may include certain
                subscription-based plans with automatically recurring payments
                for periodic charges (“<b>Subscription Service</b>”). The “
                <b>Subscription Billing Date</b>” is the date when you purchase
                your first subscription to the Service. The Subscription Service
                will begin on the Subscription Billing Date and continue for the
                subscription period that you select on your account (such
                period, the “<b>Initial Subscription Period</b>”), and will
                automatically renew for successive periods of the same duration
                as the Initial Subscription Period (the Initial Subscription
                Period and each such renewal period, each a “
                <b>Subscription Period</b>”) unless you cancel the Subscription
                Service or we terminate it. If you activate a Subscription
                Service, then you authorize Spyn or its third-party payment
                processors to periodically charge, on a going-forward basis and
                until cancellation of the Subscription Service, all accrued sums
                on or before the payment due date. For information on the “
                <b>Subscription Fee</b>”, please see our “Plan & Billing” page
                on our website. Your account will be charged automatically on
                the Subscription Billing Date and thereafter on the renewal date
                of your Subscription Service for all applicable fees and taxes
                for the next Subscription Period. You must cancel your
                Subscription Service 30 days before it renews in order to avoid
                billing the next periodic Subscription Fee to your account. Spyn
                or its third-party payment processor will bill the periodic
                Subscription Fee to the payment method associated with your
                account or that you otherwise provide to us. You may cancel the
                Subscription Service by contacting us at support@aifithub.com. YOUR
                CANCELLATION MUST BE RECEIVED BEFORE THE RENEWAL DATE IN ORDER
                TO AVOID CHARGE FOR THE NEXT SUBSCRIPTION PERIOD.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>4.5</p>}>
              <p>
                <b>Delinquent Accounts</b>. Spyn may suspend or terminate access
                to the Service, including fee-based portions of the Service, for
                any account for which any amount is due but unpaid. In addition
                to the amount due for the Service, a delinquent account will be
                charged with fees or charges that are incidental to any
                chargeback or collection of any unpaid amount, including
                collection fees. If your payment method is no longer valid at
                the time a renewal Subscription Fee is due, then Spyn reserves
                the right to suspend or delete your account and any information
                or User Content (defined below) associated with your account
                without any liability to you.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>4.6</p>}>
              <p>
                <b>Free Trial</b>. We reserve the right to provide any or part
                of the Service on a free-trial basis. If you register on our
                platform for a free trial, We will make one or more Services
                available to you on a trial basis free of charge until the
                earlier of (a) the end of the free trial period for which you
                registered to use the applicable Service, or (b) the start date
                of any Subscription Service ordered by you. Additional trial
                terms and conditions may appear on the trial registration web
                page. Any such additional terms and conditions are incorporated
                into this Agreement by reference and are legally binding. ANY
                CUSTOMIZATIONS MADE TO THE SERVICES BY OR FOR YOU, DURING YOUR
                FREE TRIAL WILL BE PERMANENTLY LOST UNLESS YOU PURCHASE A
                SUBSCRIPTION TO THE SAME SERVICES AS THOSE COVERED BY THE TRIAL,
                PURCHASE UPGRADED SERVICES, OR EXPORT SUCH DATA, BEFORE THE END
                OF THE TRIAL PERIOD. DURING THE FREE TRIAL THE SERVICES ARE
                PROVIDED “AS-IS” WITHOUT ANY WARRANTY.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>5.</p>}>
            <p>
              <b>Licenses</b>
            </p>
            <Paragraph bulletLabel={<p>5.1</p>}>
              <p>
                <b>Limited License</b>. Subject to your complete and ongoing
                compliance with these Terms, Spyn grants you , solely for your
                personal, non-commercial use, a limited, non-exclusive,
                non-transferable, non-sublicensable, revocable license to: (a)
                install and use one object code copy of any mobile or other
                downloadable application associated with the Service obtained
                from a legitimate marketplace on a mobile device that you own or
                control; and (b) access and use the Service.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>5.2</p>}>
              <p>
                <b>License Restrictions</b>. Except and solely to the extent
                such a restriction is impermissible under applicable law, you
                may not: (a) reproduce, distribute, publicly display, publicly
                perform, or create derivative works of the Service; (b) make
                modifications to the Service; or (c) interfere with or
                circumvent any feature of the Service, including, but not
                limited to, any security or access control mechanism. If you are
                prohibited under applicable law from using the Service, then you
                may not use it.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>5.3</p>}>
              <p>
                <b>Feedback</b>. We respect and appreciate the thoughts and
                comments from our users. If you choose to provide input and
                suggestions regarding existing functionalities, problems with or
                proposed modifications or improvements to the Service (“
                <b>Feedback</b>”), then you hereby grant Spyn an unrestricted,
                perpetual, irrevocable, non-exclusive, fully-paid, royalty-free
                right and license to exploit the Feedback in any manner and for
                any purpose, including to improve the Service and create other
                products and services. We will have no obligation to provide you
                with attribution for any Feedback you provide to us.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>6.</p>}>
            <p>
              <b>Ownership; Proprietary Rights</b>. The Service is owned and
              operated by Spyn. The visual interfaces, graphics, design,
              compilation, information, data, computer code (including source
              code or object code), products, software, services, and all other
              elements of the Service provided by Spyn (“<b>Materials</b>”) are
              protected by intellectual property and other laws. All Materials
              included in the Service are the property of Spyn or its
              third-party licensors. Except as expressly authorized by Spyn, you
              may not make use of the Materials. There are no implied licenses
              in these Terms and Spyn reserves all rights to the Materials not
              granted expressly in these Terms.
            </p>
          </Paragraph>
          <Paragraph bulletLabel={<p>7.</p>}>
            <p>
              <b>Third-Party Terms</b>
            </p>
            <Paragraph bulletLabel={<p>7.1</p>}>
              <p>
                <b>Third-Party Service</b>. Spyn may allow log-in access to the
                Service through a third-party service provider such as Google or
                Apple. By using one of these third-party services, you hereby
                authorize Spyn to transfer that information to the applicable
                third-party service. Third-party services are not under Spyn’s
                control, and, to the fullest extent permitted by law, Spyn is
                not responsible for any third-party service’s use of your
                exported information. The Service may also contain links to
                third-party websites. Linked websites are not under Spyn’s
                control, and Spyn is not responsible for their content. Please
                be sure to review the terms of use and privacy policy of any
                third-party services.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>7.2</p>}>
              <p>
                <b>Third-Party Software</b>. The Service may include or
                incorporate third-party software components that are generally
                available free of charge under licenses granting recipients
                broad rights to copy, modify, and distribute those components (“
                <b>Third-Party Components</b>”). Although the Service is
                provided to you subject to these Terms, nothing in these Terms
                prevents, restricts, or is intended to prevent or restrict you
                from obtaining Third-Party Components under the applicable
                third-party licenses or to limit your use of Third-Party
                Components under those third-party licenses.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>8.</p>}>
            <p>
              <b>User Content</b>
            </p>
            <Paragraph bulletLabel={<p>8.1</p>}>
              <p>
                <b>User Content Generally</b>. Certain features of the Service
                may permit users to submit, upload, publish, broadcast, or
                otherwise transmit (“<b>Post</b>”) content to the Service,
                including messages, photos, video or audio (including sound or
                voice recordings and musical recordings embodied in the video or
                audio), images, folders, data, text, and any other works of
                authorship or other works (“<b>User Content</b>”). You retain
                any copyright and other proprietary rights that you may hold in
                the User Content that you Post to the Service, subject to the
                licenses granted in these Terms.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>8.2</p>}>
              <p>
                <b>Limited License Grant to Spyn</b>. By Posting User Content to
                or via the Service, you grant Spyn a worldwide, non-exclusive,
                irrevocable, royalty-free, fully paid right and license (with
                the right to sublicense through multiple tiers) to host, store,
                transfer, publicly display, publicly perform (including by means
                of a digital audio transmission), communicate to the public,
                reproduce, modify for the purpose of formatting for display,
                create derivative works as authorized in these Terms, and
                distribute your User Content, in whole or in part, in any media
                formats and through any media channels, in each instance whether
                now known or hereafter developed. All of the rights you grant in
                these Terms are provided on a through-to-the-audience basis,
                meaning the owners or operators of external services will not
                have any separate liability to you or any other third party for
                User Content Posted or otherwise used on external services via
                the Service. You agree to pay all monies owing to any person or
                entity resulting from Posting your User Content and from Spyn’s
                exercise of the license set forth in this Section.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>8.3</p>}>
              <p>
                <b>Limited License Grant to Other Users</b>. By Posting User
                Content to or via the Service and making it available to other
                users of the Service, you grant those users a non-exclusive
                license to access and use that User Content as permitted by
                these Terms and the functionality of the Service.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>8.4</p>}>
              <p>
                <b>
                  You Must Have Rights to the Content You Post; User Content
                  Representations and Warranties
                </b>
                . You must not Post User Content if you are not the owner of or
                are not fully authorized to grant rights in all of the elements
                of that User Content, including in all ambient music and
                underlying musical works embodied in any sound recording. Spyn
                disclaims any and all liability in connection with User Content.
                You are solely responsible for your User Content and the
                consequences of providing User Content via the Service. By
                providing User Content via the Service, you affirm, represent,
                and warrant to us that:
              </p>
              <Paragraph bulletLabel={<p>8.4.1</p>}>
                <p>
                  you are the creator and owner of the User Content, or have the
                  necessary licenses, rights, consents, and permissions to
                  authorize Spyn and users of the Service to use and distribute
                  your User Content as necessary to exercise the licenses
                  granted by you in this Section, in the manner contemplated by
                  Spyn, the Service, and these Terms;
                </p>
              </Paragraph>
              <Paragraph bulletLabel={<p>8.4.2</p>}>
                <p>
                  your User Content, and the Posting or other use of your User
                  Content as contemplated by these Terms, does not and will not:
                  (i) infringe, violate, misappropriate, or otherwise breach any
                  third-party right, including any copyright, trademark, patent,
                  trade secret, moral right, privacy right, right of publicity,
                  or any other intellectual property, contract, or proprietary
                  right; (ii) slander, defame, libel, or invade the right of
                  privacy, publicity or other property rights of any other
                  person; or (iii) cause Spyn to violate any law or regulation
                  or require us to obtain any further licenses from or pay any
                  royalties, fees, compensation or other amounts or provide any
                  attribution to any third parties; and
                </p>
              </Paragraph>
              <Paragraph bulletLabel={<p>8.4.3</p>}>
                <p>
                  your User Content could not be deemed by a reasonable person
                  to be objectionable, profane, indecent, pornographic,
                  harassing, threatening, embarrassing, hateful, or otherwise
                  inappropriate.
                </p>
              </Paragraph>
            </Paragraph>
            <Paragraph bulletLabel={<p>8.5</p>}>
              <p>
                <b>User Content Disclaimer</b>. We are under no obligation to
                edit or control User Content that you or other users Post and
                will not be in any way responsible or liable for User Content.
                Spyn may, however, at any time and without prior notice, screen,
                remove, edit, or block any User Content that in our sole
                judgment violates these Terms, is alleged to violate the rights
                of third parties, or is otherwise objectionable. You understand
                that, when using the Service, you will be exposed to User
                Content from a variety of sources and acknowledge that User
                Content may be inaccurate, offensive, indecent, or
                objectionable. You agree to waive, and do waive, any legal or
                equitable right or remedy you have or may have against Spyn with
                respect to User Content. If notified by a user or content owner
                that User Content allegedly does not conform to these Terms, we
                may investigate the allegation and determine in our sole
                discretion whether to remove the User Content, which we reserve
                the right to do at any time and without notice. For clarity,
                Spyn does not permit infringing activities on the Service.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>8.6</p>}>
              <p>
                <b>Monitoring Content</b>. Spyn does not control and does not
                have any obligation to monitor: (a) User Content; (b) any
                content made available by third parties; or (c) the use of the
                Service by its users. You acknowledge and agree that Spyn
                reserves the right to, and may from time to time, monitor any
                and all information transmitted or received through the Service
                for operational and other purposes. If at any time Spyn chooses
                to monitor the content, then Spyn still assumes no
                responsibility or liability for content or any loss or damage
                incurred as a result of the use of content. During monitoring,
                information may be examined, recorded, copied, and used in
                accordance with our Privacy Policy (defined below). Spyn may
                block, filter, mute, remove or disable access to any User
                Content uploaded to or transmitted through the Service without
                any liability to the user who Posted such User Content to the
                Service or to any other users of the Service.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>9.</p>}>
            <p>
              <b>Communications</b>
            </p>
            <Paragraph bulletLabel={<p>9.1</p>}>
              <p>
                <b>Push Notifications</b>. When you install our app on your
                mobile device, you agree to receive push notifications, which
                are messages an app sends you on your mobile device when you are
                not in the app. You can turn off notifications by visiting your
                mobile device’s “settings” page.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>9.2</p>}>
              <p>
                <b>Email</b>. We may send you emails concerning our products and
                services, as well as those of third parties. You may opt out of
                promotional emails by following the unsubscribe instructions in
                the promotional email itself.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>10.</p>}>
            <p>
              <b>Prohibited Conduct</b>. BY USING THE SERVICE, YOU AGREE NOT TO:
            </p>
            <Paragraph bulletLabel={<p>10.1</p>}>
              <p>
                use the Service for any illegal purpose or in violation of any
                local, state, national, or international law;
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.2</p>}>
              <p>
                harass, threaten, demean, embarrass, bully, or otherwise harm
                any other user of the Service;
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.3</p>}>
              <p>
                violate, encourage others to violate, or provide instructions on
                how to violate, any right of a third party, including by
                infringing or misappropriating any third-party intellectual
                property right;
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.4</p>}>
              <p>
                access, search, or otherwise use any portion of the Service
                through the use of any engine, software, tool, agent, device, or
                mechanism (including spiders, robots, crawlers, and data mining
                tools) other than the software or search agents provided by
                Spyn;
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.5</p>}>
              <p>
                interfere with security-related features of the Service,
                including by: (i) disabling or circumventing features that
                prevent or limit use, printing or copying of any content; or
                (ii) reverse engineering or otherwise attempting to discover the
                source code of any portion of the Service except to the extent
                that the activity is expressly permitted by applicable law;
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.6</p>}>
              <p>
                interfere with the operation of the Service or any user’s
                enjoyment of the Service, including by: (i) uploading or
                otherwise disseminating any virus, adware, spyware, worm, or
                other malicious code; (ii) making any unsolicited offer or
                advertisement to another user of the Service; (iii) collecting
                personal information about another user or third party without
                consent; or (iv) interfering with or disrupting any network,
                equipment, or server connected to or used to provide the
                Service;
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.7</p>}>
              <p>
                perform any fraudulent activity including impersonating any
                person or entity, claiming a false affiliation or identify,
                accessing any other Service account without permission, or
                falsifying your age or date of birth;
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.8</p>}>
              <p>
                sell or otherwise transfer the access granted under these Terms
                or any Materials (as defined in Section 6) or any right or
                ability to view, access, or use any Materials; or
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>10.9</p>}>
              <p>
                attempt to do any of the acts described in this Section 10 or
                assist or permit any person in engaging in any of the acts
                described in this Section 10.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>11.</p>}>
            <p>
              <b>Intellectual Property Rights Protection</b>
            </p>
            <Paragraph bulletLabel={<p>11.1</p>}>
              <p>
                <b>Respect of Third Party Rights</b>. Spyn respects the
                intellectual property rights of others, takes the protection of
                intellectual property rights very seriously, and asks users of
                the Service to do the same. Infringing activity will not be
                tolerated on or through the Service.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.2</p>}>
              <p>
                <b>DMCA Notification</b>. We comply with the provisions of the
                Digital Millennium Copyright Act applicable to Internet service
                providers (17 U.S.C. § 512, as amended). If you have an
                intellectual property rights-related complaint about any
                material on the Service, you may contact our Designated Agent at
                the following address:
              </p>
            </Paragraph>
            <Paragraph>
              <p style={{ marginLeft: 100 }}>
                Spyn, Inc.
                <br />
                Attn: Legal Department (IP Notification)
                <br />
                Email: ip-infringement@aifithub.com
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.3</p>}>
              <p>
                <b>Procedure for Reporting Claimed Infringement</b>. If you
                believe that any content made available on or through the
                Service has been used or exploited in a manner that infringes an
                intellectual property right you own or control, then please
                promptly send a written “
                <b>Notification of Claimed Infringement</b>” to the Designated
                Agent identified above containing the following information:
              </p>
              <Paragraph>
                an electronic or physical signature of the person authorized to
                act on behalf of the owner of the copyright or other right being
                infringed;
              </Paragraph>
              <Paragraph>
                a description of the copyrighted work or other intellectual
                property right that you claim has been infringed;
              </Paragraph>
              <Paragraph>
                a description of the material that you claim is infringing and
                where it is located on the Service;
              </Paragraph>
              <Paragraph>
                your address, telephone number, and email address;
              </Paragraph>
              <Paragraph>
                a statement by you that you have a good faith belief that the
                use of the materials on the Service of which you are complaining
                is not authorized by the copyright or other intellectual
                property right owner, its agent, or the law; and
              </Paragraph>
              <Paragraph>
                a statement by you that the above information in your notice is
                accurate and that, under penalty of perjury, you are the
                copyright or other intellectual property right owner or
                authorized to act on the copyright or intellectual property
                owner’s behalf.
              </Paragraph>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.4</p>}>
              <p>
                Your Notification of Claimed Infringement may be shared by Spyn
                with the user alleged to have infringed a right you own or
                control as well as with the operators of publicly available
                databases that track notifications of claimed infringement, and
                you consent to Spyn making such disclosures. You should consult
                with your own lawyer or see 17 U.S.C. § 512 to confirm your
                obligations to provide a valid notice of claimed infringement.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.5</p>}>
              <p>
                <b>Repeat Infringers</b>. Spyn’s policy is to: (a) remove or
                disable access to material that Spyn believes in good faith,
                upon notice from an intellectual property rights owner or
                authorized agent, is infringing the intellectual property rights
                of a third party by being made available through the Service;
                and (b) in appropriate circumstances, to terminate the accounts
                of and block access to the Service by any user who repeatedly or
                egregiously infringes other people’s copyright or other
                intellectual property rights. Spyn will terminate the accounts
                of users that are determined by Spyn to be repeat infringers.
                Spyn reserves the right, however, to suspend or terminate
                accounts of users in our sole discretion.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.6</p>}>
              <p>
                <b>Counter Notification</b>. If you receive a notification from
                Spyn that material made available by you on or through the
                Service has been the subject of a Notification of Claimed
                Infringement, then you will have the right to provide Spyn with
                what is called a “Counter Notification.” To be effective, a
                Counter Notification must be in writing, provided to Spyn’s
                Designated Agent through one of the methods identified in
                Section 11.2, and include substantially the following
                information:
              </p>
              <Paragraph>your physical or electronic signature;</Paragraph>
              <Paragraph>
                identification of the material that has been removed or to which
                access has been disabled and the location at which the material
                appeared before it was removed or access to it was disabled;
              </Paragraph>
              <Paragraph>
                a statement under penalty of perjury that you have a good faith
                belief that the material was removed or disabled as a result of
                mistake or misidentification of the material to be removed or
                disabled; and
              </Paragraph>
              <Paragraph>
                your name, address, and telephone number, and a statement that
                you consent to the jurisdiction of Federal District Court for
                the judicial district in which the address is located, or if you
                are residing outside of the United States, then for any judicial
                district in which Spyn may be found, and that you will accept
                service of process from the person who provided notification
                under Section 11.2 above or an agent of that person.
              </Paragraph>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.7</p>}>
              <p>
                A party submitting a Counter Notification should consult a
                lawyer or see 17 U.S.C. § 512 to confirm the party’s obligations
                to provide a valid counter notification under the Copyright Act.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.8</p>}>
              <p>
                <b>Reposting of Content Subject to a Counter Notification</b>.
                If you submit a Counter Notification to Spyn in response to a
                Notification of Claimed Infringement, then Spyn will promptly
                provide the person who provided the Notification of Claimed
                Infringement with a copy of your Counter Notification and inform
                that person that Spyn will replace the removed User Content or
                cease disabling access to it in 10 business days, and Spyn will
                replace the removed User Content and cease disabling access to
                it not less than 10, nor more than 14, business days following
                receipt of the Counter Notification, unless Spyn’s Designated
                Agent receives notice from the party that submitted the
                Notification of Claimed Infringement that such person has filed
                an action seeking a court order to restrain the user from
                engaging in infringing activity relating to the material on
                Spyn’s system or network.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>11.9</p>}>
              <p>
                <b>
                  False Notifications of Claimed Infringement or Counter
                  Notifications
                </b>
                . The Copyright Act provides at 17 U.S.C. § 512(f) that: “[a]ny
                person who knowingly materially misrepresents under Section 512
                of the Copyright Act (17 U.S.C. § 512) (1) that material or
                activity is infringing, or (2) that material or activity was
                removed or disabled by mistake or misidentification, will be
                liable for any damages, including costs and attorneys’ fees,
                incurred by the alleged infringer, by any copyright owner or
                copyright owner’s authorized licensee, or by a service provider,
                who is injured by such misrepresentation, as the result of Spyn
                relying upon such misrepresentation in removing or disabling
                access to the material or activity claimed to be infringing, or
                in replacing the removed material or ceasing to disable access
                to it.” Spyn reserves the right to seek damages from any party
                that submits a Notification of Claimed Infringement or Counter
                Notification in violation of the law.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>12.</p>}>
            <p>
              <b>Modification of Terms</b>. We may, from time to time, change
              these Terms. Please check these Terms periodically for changes.
              Revisions will be effective immediately except that, for existing
              users, material revisions will be effective 30 days after posting
              or notice to you of the revisions unless otherwise stated. If a
              change to these Terms materially modifies your rights or
              obligations, we require that you accept the modified Terms in
              order to continue to use the Service. If you do not agree to the
              modified Terms, then you should remove your User Content and
              discontinue your use of the Service. Except as expressly permitted
              in this Section 12, these Terms may be amended only by a written
              agreement signed by authorized representatives of the parties to
              these Terms.
            </p>
          </Paragraph>
          <Paragraph bulletLabel={<p>13.</p>}>
            <p>
              <b>Term, Termination, and Modification of the Service</b>
            </p>
            <Paragraph bulletLabel={<p>13.1</p>}>
              <p>
                <b>Term</b>. These Terms are effective beginning when you accept
                the Terms or first download, install, access, or use the
                Service, and ending when terminated as described in
                Section 13.2.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>13.2</p>}>
              <p>
                <b>Termination</b>. If you violate any provision of these Terms,
                then your authorization to access the Service and these Terms
                automatically terminate. In addition, Spyn may, at its sole
                discretion, terminate these Terms or your account on the
                Service, or suspend or terminate your access to the Service, at
                any time for any reason or no reason, with or without notice,
                and without any liability to you arising from such termination.
                You may terminate your account and these Terms at any time by
                contacting customer service at support@aifithub.com.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>13.3</p>}>
              <p>
                <b>Effect of Termination</b>. Upon termination of these Terms:
                (a) your license rights will terminate and you must immediately
                cease all use of the Service; (b) you will no longer be
                authorized to access your account or the Service; (c) you must
                pay Spyn any unpaid amount that was due prior to termination;
                and (d) all payment obligations accrued prior to termination and
                Sections 5.3, 6, 13.3, 14, 15, 16, 17, and 18 will survive.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>13.4</p>}>
              <p>
                <b>Modification of the Service</b>. Spyn reserves the right to
                modify or discontinue all or any portion of the Service at any
                time (including by limiting or discontinuing certain features of
                the Service), temporarily or permanently, without notice to you.
                Spyn will have no liability for any change to the Service,
                including any paid-for functionalities of the Service, or any
                suspension or termination of your access to or use of the
                Service. You should retain copies of any User Content you Post
                to the Service so that you have permanent copies in the event
                the Service is modified in such a way that you lose access to
                User Content you Posted to the Service.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>14.</p>}>
            <p>
              <b>Indemnity</b>. To the fullest extent permitted by law, you are
              responsible for your use of the Service, and you will defend and
              indemnify Spyn, its affiliates and their respective shareholders,
              directors, managers, members, officers, employees, consultants,
              and agents (together, the “<b>Spyn Entities</b>”) from and against
              every claim brought by a third party, and any related liability,
              damage, loss, and expense, including attorneys’ fees and costs,
              arising out of or connected with: (1) your unauthorized use of, or
              misuse of, the Service; (2) your violation of any portion of these
              Terms, any representation, warranty, or agreement referenced in
              these Terms, or any applicable law or regulation; (3) your
              violation of any third-party right, including any intellectual
              property right or publicity, confidentiality, other property, or
              privacy right; or (d) any dispute or issue between you and any
              third party. We reserve the right, at our own expense, to assume
              the exclusive defense and control of any matter otherwise subject
              to indemnification by you (without limiting your indemnification
              obligations with respect to that matter), and in that case, you
              agree to cooperate with our defense of those claims.
            </p>
          </Paragraph>
          <Paragraph bulletLabel={<p>15.</p>}>
            <p>
              <b>Disclaimers; No Warranties by Spyn</b>
            </p>
            <Paragraph bulletLabel={<p>15.1</p>}>
              <p>
                THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH THE
                SERVICE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS.
                SPYN DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                IMPLIED, RELATING TO THE SERVICE AND ALL MATERIALS AND CONTENT
                AVAILABLE THROUGH THE SERVICE, INCLUDING: (a) ANY IMPLIED
                WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                TITLE, QUIET ENJOYMENT, OR NON-INFRINGEMENT; AND (b) ANY
                WARRANTY ARISING OUT OF COURSE OF DEALING, USAGE, OR TRADE. SPYN
                DOES NOT WARRANT THAT THE SERVICE OR ANY PORTION OF THE SERVICE,
                OR ANY MATERIALS OR CONTENT OFFERED THROUGH THE SERVICE, WILL BE
                UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER
                HARMFUL COMPONENTS, AND SPYN DOES NOT WARRANT THAT ANY OF THOSE
                ISSUES WILL BE CORRECTED.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>15.2</p>}>
              <p>
                NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY
                YOU FROM THE SERVICE OR SPYN ENTITIES OR ANY MATERIALS OR
                CONTENT AVAILABLE THROUGH THE SERVICE WILL CREATE ANY WARRANTY
                REGARDING ANY OF THE SPYN ENTITIES OR THE SERVICE THAT IS NOT
                EXPRESSLY STATED IN THESE TERMS. WE ARE NOT RESPONSIBLE FOR ANY
                DAMAGE THAT MAY RESULT FROM THE SERVICE AND YOUR DEALING WITH
                ANY OTHER SERVICE USER. YOU UNDERSTAND AND AGREE THAT YOU USE
                ANY PORTION OF THE SERVICE AT YOUR OWN DISCRETION AND RISK, AND
                THAT WE ARE NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY
                (INCLUDING YOUR COMPUTER SYSTEM OR MOBILE DEVICE USED IN
                CONNECTION WITH THE SERVICE) OR ANY LOSS OF DATA, INCLUDING USER
                CONTENT. SPYN EXPRESSLY DISCLAIM ALL LIABILITY, TO THE FULLEST
                EXTENT PERMITTED BY LAW, FOR: (A) CONTENT POSTED ON THE PLATFORM
                BY ANY THIRD-PARTIES AND USERS INCLUDING SERVICE PROVIDERS, (C)
                THIRD-PARTY SITES AND ANY THIRD-PARTY PRODUCT OR SERVICE LISTED
                ON OR ACCESSIBLE TO YOU THROUGH THE PLATFORM, AND (C) THE
                QUALITY OR CONDUCT OF ANY SERVICE PROVIDER YOU ENCOUNTER IN
                CONNECTION WITH YOUR USE OF THE PLATFORM.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>15.3</p>}>
              <p>
                THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS SECTION 15
                APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. SPYN DOES NOT
                DISCLAIM ANY WARRANTY OR OTHER RIGHT THAT SPYN IS PROHIBITED
                FROM DISCLAIMING UNDER APPLICABLE LAW.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>16.</p>}>
            <p>
              <b>Limitation of Liability</b>
            </p>
            <Paragraph bulletLabel={<p>16.1</p>}>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE
                SPYN ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING DAMAGES
                FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE LOSS)
                ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR YOUR
                INABILITY TO ACCESS OR USE, THE SERVICE OR ANY MATERIALS OR
                CONTENT ON THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT,
                TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY,
                AND WHETHER OR NOT ANY SPYN ENTITY HAS BEEN INFORMED OF THE
                POSSIBILITY OF DAMAGE. THE INFORMATION ACCESSIBLE TO YOU THROUGH
                THE SERVICE IS NOT INTENDED IN ANY WAY TO BE USED AS MEDICAL
                ADVICE OR TO REPLACE MEDICAL ADVICE OFFERED BY YOU OR OTHER
                HEALTHCARE PROFESSIONALS FAMILIAR WITH YOUR CONDITION. THE
                INFORMATION PROVIDED BY SPYN DOES NOT NECESSARILY REPRESENT THE
                MOST CURRENT PRACTICES OR METHODS IN PHYSICAL REHABILITATION.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>16.2</p>}>
              <p>
                EXCEPT AS PROVIDED IN SECTIONS 17.5 AND 17.6 AND TO THE FULLEST
                EXTENT PERMITTED BY LAW, THE AGGREGATE LIABILITY OF THE SPYN
                ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE
                USE OF OR ANY INABILITY TO USE ANY PORTION OF THE SERVICE OR
                OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR
                OTHERWISE, IS LIMITED TO THE GREATER OF: (a) THE AMOUNT YOU HAVE
                PAID TO SPYNFOR ACCESS TO AND USE OF THE SERVICE IN THE 12
                MONTHS PRIOR TO THE EVENT OR CIRCUMSTANCE GIVING RISE TO THE
                CLAIM AND (b) US$100.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>16.3</p>}>
              <p>
                EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION OF
                LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS
                INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES
                UNDER THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF
                THE BASIS OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE
                PROVISIONS IS SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS
                OF THESE TERMS. THE LIMITATIONS IN THIS SECTION 16 WILL APPLY
                EVEN IF ANY LIMITED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>17.</p>}>
            <p>
              <b>Dispute Resolution and Arbitration</b>
            </p>
            <Paragraph bulletLabel={<p>17.1</p>}>
              <p>
                <b>Generally</b>. In the interest of resolving disputes between
                you and Spyn in the most expedient and cost effective manner,
                and except as described in Section 17.2 and 17.3, you and Spyn
                agree that every dispute arising in connection with these Terms,
                the Service, and communications from us will be resolved by
                binding arbitration. Arbitration is less formal than a lawsuit
                in court. Arbitration uses a neutral arbitrator instead of a
                judge or jury, may allow for more limited discovery than in
                court, and can be subject to very limited review by courts.
                Arbitrators can award the same damages and relief that a court
                can award. This agreement to arbitrate disputes includes all
                claims arising out of or relating to any aspect of these Terms,
                the Service, or any communications to or from us, whether based
                in contract, tort, statute, fraud, misrepresentation, or any
                other legal theory, and regardless of whether a claim arises
                during or after the termination of these Terms. YOU UNDERSTAND
                AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND SPYN ARE
                EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A
                CLASS ACTION.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.2</p>}>
              <p>
                <b>Exceptions</b>. Despite the provisions of Section 17.1,
                nothing in these Terms will be deemed to waive, preclude, or
                otherwise limit the right of either party to: (a) bring an
                individual action in small claims court; (b) pursue an
                enforcement action through the applicable federal, state, or
                local agency if that action is available; (c) seek injunctive
                relief in a court of law in aid of arbitration; or (d) to file
                suit in a court of law to address an intellectual property
                infringement claim.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.3</p>}>
              <p>
                <b>Opt-Out</b>. If you do not wish to resolve disputes by
                binding arbitration, you may opt out of the provisions of this
                Section 17 within 30 days after the date that you agree to these
                Terms by sending a letter to Spyn, Inc., Attention: Legal
                Department – Arbitration Opt-Out, support@aifithub.com that specifies:
                your full legal name, the email address associated with your
                account on the Service, and a statement that you wish to opt out
                of arbitration (“<b>Opt-Out Notice</b>”). Once Spyn receives
                your Opt-Out Notice, this Section 17 will be void and any action
                arising out of these Terms will be resolved as set forth in
                Section 18.2. The remaining provisions of these Terms will not
                be affected by your Opt-Out Notice.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.4</p>}>
              <p>
                <b>Arbitrator</b>. Any arbitration between you and Spyn will be
                settled under the Federal Arbitration Act and administered by
                the American Arbitration Association (“<b>AAA</b>”) under its
                Consumer Arbitration Rules (collectively, “<b>AAA Rules</b>”) as
                modified by these Terms. The AAA Rules and filing forms are
                available online at www.adr.org, by calling the AAA at
                +1-800-778-7879, or by contacting Spyn. The arbitrator has
                exclusive authority to resolve any dispute relating to the
                interpretation, applicability, or enforceability of this binding
                arbitration agreement.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.5</p>}>
              <p>
                <b>Notice of Arbitration; Process</b>. A party who intends to
                seek arbitration must first send a written notice of the dispute
                to the other party by certified U.S. Mail or by Federal Express
                (signature required) or, only if that other party has not
                provided a current physical address, then by electronic mail (“
                <b>Notice of Arbitration</b>”). Spyn’s address for Notice is:
                Spyn, Inc., support@aifithub.com. The Notice of Arbitration must:
                (a) describe the nature and basis of the claim or dispute; and
                (b) set forth the specific relief sought (“<b>Demand</b>”). The
                parties will make good faith efforts to resolve the claim
                directly, but if the parties do not reach an agreement to do so
                within 30 days after the Notice of Arbitration is received, you
                or Spyn may commence an arbitration proceeding. All arbitration
                proceedings between the parties will be confidential unless
                otherwise agreed by the parties in writing. During the
                arbitration, the amount of any settlement offer made by you or
                Spyn must not be disclosed to the arbitrator until after the
                arbitrator makes a final decision and award, if any. If the
                arbitrator awards you an amount higher than the last written
                settlement amount offered by Spyn in settlement of the dispute
                prior to the award, Spyn will pay to you the higher of: (a) the
                amount awarded by the arbitrator and (b) [US$10,000].
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.6</p>}>
              <p>
                <b>Fees</b>. If you commence arbitration in accordance with
                these Terms, Spyn will reimburse you for your payment of the
                filing fee, unless your claim is for more than US$10,000, in
                which case the payment of any fees will be decided by the AAA
                Rules. Any arbitration hearing will take place at a location to
                be agreed upon in the county and state of your
                [residence/billing address], but if the claim is for US$10,000
                or less, you may choose whether the arbitration will be
                conducted: (a) solely on the basis of documents submitted to the
                arbitrator; (b) through a non-appearance based telephone
                hearing; or (c) by an in-person hearing as established by the
                AAA Rules in the county (or parish) of your [residence/billing
                address]. If the arbitrator finds that either the substance of
                your claim or the relief sought in the Demand is frivolous or
                brought for an improper purpose (as measured by the standards
                set forth in Federal Rule of Civil Procedure 11(b)), then the
                payment of all fees will be governed by the AAA Rules. In that
                case, you agree to reimburse Spyn for all monies previously
                disbursed by it that are otherwise your obligation to pay under
                the AAA Rules. Regardless of the manner in which the arbitration
                is conducted, the arbitrator must issue a reasoned written
                decision sufficient to explain the essential findings and
                conclusions on which the decision and award, if any, are based.
                The arbitrator may make rulings and resolve disputes as to the
                payment and reimbursement of fees or expenses at any time during
                the proceeding and upon request from either party made within 14
                days of the arbitrator’s ruling on the merits.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.7</p>}>
              <p>
                <b>No Class Actions</b>. YOU AND SPYN AGREE THAT EACH MAY BRING
                CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY
                AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR
                REPRESENTATIVE PROCEEDING. Further, unless both you and Spyn
                agree otherwise, the arbitrator may not consolidate more than
                one person’s claims, and may not otherwise preside over any form
                of a representative or class proceeding.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.8</p>}>
              <p>
                <b>Modifications to this Arbitration Provision</b>. If Spyn
                makes any future change to this arbitration provision, other
                than a change to Spyn’s address for Notice of Arbitration, you
                may reject the change by sending us written notice within
                30 days of the change to Spyn’s address for Notice of
                Arbitration, in which case your account with Spyn will be
                immediately terminated and this arbitration provision, as in
                effect immediately prior to the changes you rejected will
                survive.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>17.9</p>}>
              <p>
                <b>Enforceability</b>. If Section 17.7 or the entirety of this
                Section 17 is found to be unenforceable, or if Spyn receives an
                Opt-Out Notice from you, then the entirety of this Section 17
                will be null and void and, in that case, the exclusive
                jurisdiction and venue described in Section 18.2 will govern any
                action arising out of or related to these Terms.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>18.</p>}>
            <p>
              <b>Miscellaneous</b>
            </p>
            <Paragraph bulletLabel={<p>18.1</p>}>
              <p>
                <b>General Terms</b>. These Terms, including the Privacy Policy
                and any other agreements expressly incorporated by reference
                into these Terms, are the entire and exclusive understanding and
                agreement between you and Spyn regarding your use of the
                Service. You may not assign or transfer these Terms or your
                rights under these Terms, in whole or in part, by operation of
                law or otherwise, without our prior written consent. We may
                assign these Terms and all rights granted under these Terms,
                including with respect to your User Content, at any time without
                notice or consent. The failure to require performance of any
                provision will not affect our right to require performance at
                any other time after that, nor will a waiver by us of any breach
                or default of these Terms, or any provision of these Terms, be a
                waiver of any subsequent breach or default or a waiver of the
                provision itself. Use of Section headers in these Terms is for
                convenience only and will not have any impact on the
                interpretation of any provision. Throughout these Terms the use
                of the word “including” means “including but not limited to.” If
                any part of these Terms is held to be invalid or unenforceable,
                then the unenforceable part will be given effect to the greatest
                extent possible, and the remaining parts will remain in full
                force and effect.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.2</p>}>
              <p>
                <b>Governing Law</b>. These Terms are governed by the laws of
                the State of [Washington] without regard to conflict of law
                principles. You and Spyn submit to the personal and exclusive
                jurisdiction of the state courts and federal courts located
                within [King County], [Washington] for resolution of any lawsuit
                or court proceeding permitted under these Terms. We operate the
                Service from our offices in [Washington], and we make no
                representation that Materials included in the Service are
                appropriate or available for use in other locations.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.3</p>}>
              <p>
                <b>Privacy Policy</b>. Please read the Spyn Privacy Policy (the
                “<b>Privacy Policy</b>”) carefully for information relating to
                our collection, use, storage, and disclosure of your personal
                information. The Spyn Privacy Policy is incorporated by this
                reference into, and made a part of, these Terms.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.4</p>}>
              <p>
                <b>Additional Terms</b>. Your use of the Service is subject to
                all additional terms, policies, rules, or guidelines applicable
                to the Service or certain features of the Service that we may
                post on or link to from the Service (the “
                <b>Additional Terms</b>”). All Additional Terms are incorporated
                by this reference into, and made a part of, these Terms.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.5</p>}>
              <p>
                <b>Consent to Electronic Communications</b>. By using the
                Service, you consent to receiving certain electronic
                communications from us as further described in our Privacy
                Policy. Please read our Privacy Policy to learn more about our
                electronic communications practices. You agree that any notices,
                agreements, disclosures, or other communications that we send to
                you electronically will satisfy any legal communication
                requirements, including that those communications be in writing.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.6</p>}>
              <p>
                <b>Contact Information</b>. The Service is offered by Spyn,
                Inc., located at Redmond, Washington, USA. You may contact us by
                sending correspondence to that address or by emailing us at
                info@aifithub.com.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.7</p>}>
              <p>
                <b>Notice to California Residents</b>. If you are a California
                resident, then under California Civil Code Section 1789.3, you
                may contact the Complaint Assistance Unit of the Division of
                Consumer Services of the California Department of Consumer
                Affairs in writing at 1625 N. Market Blvd., Suite S-202,
                Sacramento, California 95834, or by telephone at +1-800-952-5210
                in order to resolve a complaint regarding the Service or to
                receive further information regarding use of the Service.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.8</p>}>
              <p>
                <b>No Support</b>. We are under no obligation to provide support
                for the Service. In instances where we may offer support, the
                support will be subject to published policies.
              </p>
            </Paragraph>
            <Paragraph bulletLabel={<p>18.9</p>}>
              <p>
                <b>International Use</b>. The Service is intended for visitors
                located within the United States. We make no representation that
                the Service is appropriate or available for use outside of the
                United States. Access to the Service from countries or
                territories or by individuals where such access is illegal is
                prohibited.
              </p>
            </Paragraph>
          </Paragraph>
          <Paragraph bulletLabel={<p>19.</p>}>
            <p>
              Notice Regarding Apple. This Section 19 only applies to the extent
              you are using our mobile application on an iOS device. You
              acknowledge that these Terms are between you and Spyn only, not
              with Apple Inc. (“<b>Apple</b>”), and Apple is not responsible for
              the Service or the content of it. Apple has no obligation to
              furnish any maintenance and support services with respect to the
              Service. If the Service fails to conform to any applicable
              warranty, you may notify Apple, and Apple will refund any
              applicable purchase price for the mobile application to you. To
              the maximum extent permitted by applicable law, Apple has no other
              warranty obligation with respect to the Service. Apple is not
              responsible for addressing any claims by you or any third party
              relating to the Service or your possession and/or use of the
              Service, including: (1) product liability claims; (2) any claim
              that the Service fails to conform to any applicable legal or
              regulatory requirement; or (3) claims arising under consumer
              protection or similar legislation. Apple is not responsible for
              the investigation, defense, settlement, and discharge of any
              third-party claim that the Service and/or your possession and use
              of the Service infringe a third party’s intellectual property
              rights. You agree to comply with any applicable third-party terms
              when using the Service. Apple and Apple’s subsidiaries are
              third-party beneficiaries of these Terms, and upon your acceptance
              of these Terms, Apple will have the right (and will be deemed to
              have accepted the right) to enforce these Terms against you as a
              third-party beneficiary of these Terms. You hereby represent and
              warrant that: (a) you are not located in a country that is subject
              to a U.S. Government embargo or that has been designated by the
              U.S. Government as a “terrorist supporting” country; and (b) you
              are not listed on any U.S. Government list of prohibited or
              restricted parties.
            </p>
          </Paragraph>
      </div>
    </Container>
  );
};


const Paragraph = props => {

  if (!props.bulletLabel) {
    return <p>{props.children}</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        '& a': { color: 'rgb(88, 166, 255)' }
      }}
    >
      <div style={{ width: 50 }}>{props.bulletLabel}</div>
      <div style={{flex: 1}}>{props.children}</div>
    </div>
  );
};

export default TermsOfService;

export const Head = () => (<Seo title="Fithub - Terms Of Service" />);
