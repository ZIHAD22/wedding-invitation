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
            01. React কিভাবে কাজ
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
            02. Props vs State
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <strong>01.Props</strong> <br />
            i. Props হলো React এর এমন একটা propertie যেটার মাধ্যমে একটা Parent
            component থেকে Child component এ data পাঠানো যাই
            <br />
            <br />
            ii. Props অপরিবর্তনীয় (পরিবর্তন করা যাবে না)।শুধুমাত্র পাঠযোগ্য
            <br />
            <br />
            iii. Props class component ও functional component এবং state এর সাথে
            ব্যবহার করা যেতে পারে
            <br />
            <br />
            <strong>02.State</strong> <br />
            i. State একটি অ্যাপ্লিকেশনের ঐ অংশগুলিকে প্রতিনিধিত্ব করে যা
            পরিবর্তন হতে পারে
            <br />
            <br />
            ii. State এটি পরিবর্তনযোগ্য (পরিবর্তন করা যেতে পারে)। এবং প্রতিটি
            component তার নিজেস্ব State থাকতে পারে।
            <br />
            <br />
            iii. State class component ও functional component এর সাথে ব্যবহার
            করা যায়
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionAccordion;
