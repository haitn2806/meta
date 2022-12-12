import React from "react";

const InfoContact = () => {
  return (
    <section className="contact-area overflow-hidden pb-40 bgc-black-with-lighting rel z-1">
      <div className="container pt-10">
        <div className="row justify-content-between">
          {/* <div className="col-xl-5 col-lg-6">
                <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-55">
                    <h2>
                      Have any project on mind! feel free contact with us or{" "}
                      <span>say hello</span>
                    </h2>
                  </div>
                  <div className="contact-info-wrap">
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="fal fa-map-marker-alt" />
                      </div>
                      <div className="content">
                        <span className="title">Location</span>
                        <b className="text">582 Main address, 2nd floor, USA</b>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-envelope-open-text" />
                      </div>
                      <div className="content">
                        <span className="title">Email Address</span>
                        <b className="text">
                          <a href="mailto:support@gmail.com">
                            support@gmail.com
                          </a>
                        </b>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <div className="content">
                        <span className="title">Phone No</span>
                        <b className="text">
                          <a href="callto:+000(123)45699">+000 (123) 456 99</a>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          <div
            class="col-xl-6 col-lg-6"
            style={{
              marginBottom: "10px",
              boxShadow: " rgb(0 0 0 / 35%) 0px 5px 15px",
              borderRadius: "20px",
            }}
          >
            <div
              class="quick-view"
              data-iframe='<iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14899.50060460291!2d105.79249767006654!3d20.997641159134883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3135ac91177348c5%3A0x4a563f93e76b260c!2zxJDGsOG7nW5nIENhbyBU4buRYyAyMCwgTeG7hSBUcsOsLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!3m2!1d20.9925191!2d105.8025184!4m5!1s0x3135ac945f577a01%3A0xdc160bfc73c6fafe!2zQ8O0bmcgdHkgVE5ISCBDw7RuZyBuZ2jhu4cgdsOgIHRydXnhu4FuIHRow7RuZyAzaSwgTmjDoCBCMS00LCA4NSBI4bqhIMSQw6xuaCBLaHUgxJHDtCB0aOG7iyBI4bqhIMSQw6xuaCAtIFRoYW5oIFh1w6JuIC0gSMOgIE7hu5lpLCBUaGFuaCBYdcOibiBUcnVuZywgVGhhbmggWHXDom4sIEhhbm9pLCBWaeG7h3QgTmFt!3m2!1d20.991062!2d105.809626!5e0!3m2!1svi!2s!4v1481335896571" width="100%" height="850" frameborder="0" style="border:0" allowfullscreen></iframe>'
            ></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14899.50060460291!2d105.79249767006654!3d20.997641159134883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3135ac91177348c5%3A0x4a563f93e76b260c!2zxJDGsOG7nW5nIENhbyBU4buRYyAyMCwgTeG7hSBUcsOsLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!3m2!1d20.9925191!2d105.8025184!4m5!1s0x3135ac945f577a01%3A0xdc160bfc73c6fafe!2zQ8O0bmcgdHkgVE5ISCBDw7RuZyBuZ2jhu4cgdsOgIHRydXnhu4FuIHRow7RuZyAzaSwgTmjDoCBCMS00LCA4NSBI4bqhIMSQw6xuaCBLaHUgxJHDtCB0aOG7iyBI4bqhIMSQw6xuaCAtIFRoYW5oIFh1w6JuIC0gSMOgIE7hu5lpLCBUaGFuaCBYdcOibiBUcnVuZywgVGhhbmggWHXDom4sIEhhbm9pLCBWaeG7h3QgTmFt!3m2!1d20.991062!2d105.809626!5e0!3m2!1svi!2s!4v1481335896571"
              style={{
                width: "100%",
                height: "100%",
                border: "2px solid #e2d3d3",
                borderRadius: "20px",
              }}
            ></iframe>
          </div>
          <div className="col-xl-6 col-lg-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              id="contact-area-form"
              className="contact-area-form text-center wow fadeInRight delay-0-2s"
              name="contact-area-form"
              action="#"
              method="post"
            >
              <h4>Liên hệ với chúng tôi</h4>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="form-control"
                defaultValue=""
                placeholder="Name"
                required=""
              />
              <input
                type="email"
                id="blog-email"
                name="blog-email"
                className="form-control"
                defaultValue=""
                placeholder="Email"
                required=""
              />
              <input
                type="text"
                id="website"
                name="website"
                className="form-control"
                defaultValue=""
                placeholder="Website"
                required=""
              />
              <textarea
                name="message"
                id="message"
                className="form-control"
                rows={5}
                placeholder="Write Message"
                required=""
                defaultValue={""}
              />
              <button type="submit" className="theme-btn">
                Send messages <i className="fas fa-angle-double-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-shapes">
        <img
          className="shape circle"
          src="/assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots"
          src="/assets/images/shapes/contact-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="/assets/images/shapes/contact-wave-line.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};

export default InfoContact;
