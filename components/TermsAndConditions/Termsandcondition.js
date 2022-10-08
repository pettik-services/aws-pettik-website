import styles from "./Terms.module.scss";

const termsandcondition = () => {
  return (
    <div>
      {" "}
      <div className={styles.container}>
        <div className={styles.headingContainer}>Terms and Conditions</div>
        <div className={styles.headingContainerParagraph}>
          Before using the www.pettik.com website (collectively, or
          individually, the "Service") owned by xxx company ("us", "we", or
          "our"), please read these Terms and Conditions (“Terms”, “Terms and
          Conditions”).
          <br></br>
          <br></br>
          Acceptance and compliance with these Terms are required for access to
          and use of the Service. All visitors, users, and others who desire to
          access or use the Service are bound by these Terms.
          <br></br>
          <br></br>
          You agree to abide by these Terms by using or accessing the Service.
          You do not have authorization to access the Service if you disagree
          with any aspect of the terms.
        </div>
        <div className={styles.services}>
          <div className={styles.servicesConatiner}>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>Privacy Policy</div>
              <div className={styles.detailsParagraph}>
                We value your privacy. For more information about Pettik and the
                Site's privacy and security practices, please see our Privacy
                Statement.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>
                Availability, Inaccuracies, and Errors
              </div>
              <div className={styles.detailsParagraph}>
                On the Service, we are continuously upgrading our product and
                service offerings. We may have delays updating information on
                the Service and advertising on other websites. The information
                on the Service may contain mistakes or errors, and it may not be
                comprehensive or up to date. On the Service, products or
                services may be mispriced, incorrectly represented, or
                unavailable, and we cannot guarantee the accuracy or
                completeness of any information contained there.
                <br></br>
                As a result, we retain the right to modify or update
                information, as well as to rectify any mistakes, inaccuracies,
                or omissions, at any time and without notice.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>
                Sweepstakes, Contests, and Promotions
              </div>
              <div className={styles.detailsParagraph}>
                Contests, sweepstakes, and other promotions (collectively,
                "Promotions") offered through the Service may be governed by
                rules distinct from these Terms & Conditions. Please read the
                applicable regulations as well as our Privacy Policy before
                participating in any Promotions. If a Promotion's rules
                contradict with these Terms and Conditions, the Promotion's
                rules shall take precedence.
              </div>
            </div>
            <div className={styles.servicesConatinerDetails}>
              <div className={styles.detailsHeading}>Accounts</div>
              <div className={styles.detailsParagraph}>
                When you create an account with us, you confirm that you are at
                least 18 years old and that the information you supply is
                accurate, full, and up to date at all times. Your account on the
                Service may be immediately terminated if you provide inaccurate,
                incomplete, or outdated information.
                <br></br>
                <br></br>
                You are responsible for keeping your account and password
                secure, including but not limited to limiting access to your
                computer and/or account. Whether your password is with our
                Service or a third-party service, you agree to assume
                responsibility for any and all activities or acts that occur
                under your account and/or password.
                <br></br>
                <br></br>
                If you become aware of a security breach or unauthorized use of
                your account, you must tell us immediately.
                <br></br>
                <br></br>
                Without prior consent, you may not use as a username the name of
                another person or entity, a name or trademark that is subject to
                the rights of any person or entity other than you, or a name or
                trademark that is not lawfully accessible for use. Any name that
                is derogatory, vulgar, or indecent may not be used as a
                username.
                <br></br>
                <br></br>
                In our sole discretion, we retain the right to reject service,
                terminate accounts, remove or edit content, or cancel orders.
                <br></br>
                <br></br>
                By using this website and requesting quotes, you hereby
                authorize us to contact you through phone, email, and/or text
                messages at the contact information provided, in order to offer
                you with information about Pettik's services and goods.
                Regardless of your NDNC registry registration status, this
                authorization should be valid for the aforementioned uses.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default termsandcondition;
