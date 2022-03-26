import React from "react";
import "./QuestionAccordion.css";

const QuestionAccordion = () => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            React কিভাবে কাজ
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            React declarative way তে কাজ করে। এর মানে বুঝাতে হলে আপনাকে আমি বলব
            যে আপনি একটা আধুনিক ওয়েব Application এর কথা চিন্তা করতে বলি তাহলে
            আপনার মাথাই আসবে যে ওয়েবসাইট এর একটা Header tag আছে। যেখানে nav bar
            এবং অনন্য জিনিস থাকবে। তারপর main tag যেখানে website এর main content
            থাকবে। এই রকম footer tag থাকবে। কিন্তু React declarative way টা কি ?
            declarative way টা হলো ঐ যে header tag টা কে react এ একটা component
            হিসেবে তৈরি করা হয়। এবং পরে ঐই তাকে Header component হিসেবে ব্যবহার
            করা হয় এই ভাবে{" <Header /> "}।এই রকম ভাবে {"<Main/> "} ও{" "}
            {"<Footer/> "} component গুলোর ফলে কোড গুলো যে কেও দেখলে বুঝা টা
            অনেক সহজ হয়। React declarative way তে কোন কোড দেখে ঐ কোড শেষ ফলাফল
            বর্ণনা এবং code refactor করা টাও সহজ হয়।
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            second item's accordion body. Let's imagine this being filled with
            some actual content.
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            Placeholder content for this accordion, which is intended to
            demonstrate the <code>.accordion-flush</code> className. This is the
            third item's accordion body. Nothing more exciting happening here in
            terms of content, but just filling up the space to make it look, at
            least at first glance, a bit more representative of how this would
            look in a real-world application.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAccordion;
