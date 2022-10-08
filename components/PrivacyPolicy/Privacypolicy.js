import styles from "./Privacy.module.scss";

const privacypolicy = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.headingContainer}>PRIVACY POLICY</div>
        <div className={styles.headingContainerParagraph}>
          This page explains our privacy practices for collecting, utilizing,
          and disclosing personal information collected from Pettik users. Your
          personal information is solely needed for website administration,
          malware protection, and website improvement. As a result, by accessing
          and using this site, you consent to our company's policy of collecting
          and using your personal information.
        </div>
        {/*<div className={styles.headingContainer}></div> */}
        <div className={styles.services}>
          <div className={styles.servicesConatiner}>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>
                Data Collection And Usage
              </div>
              <div className={styles.detailsParagraph}>
                We may request you to supply us with certain personal
                identifiable questions and answers when you use the Pettik
                website for security considerations to avoid identity theft.
                Personally identifiable information may include, but is not
                limited to, your contact information such as your name, email
                address, contact information, passwords, and security keys.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>Logging in Details</div>
              <div className={styles.detailsParagraph}>
                We, like numerous other websites, gather information from your
                browser during your visit to this page. This Login information
                may include information such as your IP address, browser version
                and type, page history, links that you visited on our site, as
                well as the time and date of your visit, the amount of time
                spent on those pages, and your location.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>Cookies</div>
              <div className={styles.detailsParagraph}>
                These are tiny files with supplementary information that can be
                used as anonymous identifiers. In most cases, a pop-up will
                appear in the corner of the website asking you to allow cookies.
                Cookies are little text files that a website sends to your
                browser and stores on your computer's hard drive until you erase
                them. You may set your browser to reject all cookies or to
                notify you when one is received. All of this is within your
                control based on your consent. You may not be able to use some
                parts of our site if you refuse to accept cookies. As a result,
                we strongly advise you to accept it.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>Security</div>
              <div className={styles.detailsParagraph}>
                We are highly concerned about the security of our clients' data,
                therefore we value your privacy. However, as technology
                advances, we must caution you that no technique of Internet
                transmission, electronic storage, or manner is completely safe.
                As a result, while we make every effort to utilize it only for
                business purposes and to safeguard your personal information to
                the fullest extent possible, we cannot guarantee its complete
                security.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>Disclaimer</div>
              <div className={styles.detailsParagraph}>
                According to the terms and conditions and information supplied
                to you previously, Pettik retains the right to make adjustments,
                corrections, and changes without warning to users. On the
                website, there are some hyperlinks that will lead you to
                third-party websites for further information. Pettik is not
                liable for information provided by third parties or on other
                websites. In addition, the firm has no influence over the
                privacy policies of various websites. As a result, you should
                read the privacy policy of the website where you submit the
                information carefully and refer to it for a more complete
                understanding of the situation.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>Legal Disclaimer</div>
              <div className={styles.detailsParagraph}>
                As the need arises, we reserve the right to share your
                personally identifiable information if required by law. We think
                that it is in the company's best interests to defend its
                property, other legal rights, as well as the property rights and
                rights of others, from any potentially unfair scenario.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>
                Changes to the Privacy Policy
              </div>
              <div className={styles.detailsParagraph}>
                Pettik reserves the right to change this privacy policy in
                accordance with changing times, norms, and rules. Any changes
                will be communicated to you by publishing the updated privacy
                policy on the website. It is recommended that you examine this
                privacy policy on a regular basis for any modifications to which
                you may disagree or prefer. By continuing to use the Pettik
                website, you agree to be bound by this privacy policy and any
                subsequent modifications. You may contact us using the
                information provided on this page if you have any questions or
                concerns regarding this Privacy Policy.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default privacypolicy;
