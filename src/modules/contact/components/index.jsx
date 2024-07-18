import Header from "../../../common/components/elements/Header";
import ContactSection from "./ContactSection";

const Contact = () => {
  return (
    <div>
      <Header
        title={"Contact"}
        description={
          "Feel free to get in touch and let's have a discussion about how we can work together."
        }
      />

      <ContactSection />
    </div>
  );
};

export default Contact;
