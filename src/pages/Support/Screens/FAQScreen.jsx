import React from "react";
import "../styles/faqScreen.css";
import QuestionBox from "../components/QuestionBox";
import SupportScreensTopSection from "../components/SupportScreensTopSection";

function FAQScreen() {
  return (
    <div className="faq-wrapper">
    <div className="topsection ml-[5%]">
    <SupportScreensTopSection title="FAQ"
     >
        <p className="text-gray-400">
          Got a question? We’re here to answer! If you don’t see your question
          here, drop us a line on our <a href="#contact">Contact Page.</a>
        </p>
      </SupportScreensTopSection>
    </div>
      
      <section className="questions-container">
        <QuestionBox
          question="What is the ReaderApp dashboard?"
          answer="The ReaderApp dashboard provides a comprehensive view of your reading activities and insights."
        />
        <QuestionBox
          question="What kind of information can I see on the ReaderApp dashboard?"
          answer="You can view your reading statistics, book summaries, and reading progress on the dashboard."
        />
        <QuestionBox
          question="How can I get support for the ReaderApp dashboard?"
          answer="You can get support by visiting our Contact Page or reaching out to our support team directly."
        />
        <QuestionBox
          question="How do I access the ReaderApp dashboard?"
          answer="Log in to your ReaderApp account and navigate to the dashboard from the main menu."
        />
        <QuestionBox
          question="What kind of reading insights and analytics does the ReaderApp dashboard provide?"
          answer="The dashboard provides insights into your reading habits, progress, and recommendations based on your reading history."
        />
        <QuestionBox
          question="Can I customize the layout and content of the ReaderApp dashboard?"
          answer="Yes, you can customize the layout and content based on your preferences and reading goals."
        />
      </section>
    </div>
  );
}

export default FAQScreen;
