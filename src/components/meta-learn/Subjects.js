// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

function Subject() {
  return (
    <div className="subject-wrapper">
      <section className="work-process-area  rel z-1 mt-30">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-20 wow fadeInUp delay-0-2s">
                <span className="border-title mb-15">
                  <div>tài liệu Môn học</div>
                  {/* <FaBeer /> */}
                  <span className="triangle"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="nav-search pt-15"
        style={{ display: "flex", marginLeft: "20px", marginTop: "-20px" }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "50%",
            marginBottom: "20px",
          }}
          className="search-header"
        >
          <input
            className="input-header"
            placeholder="Tìm khoá học"
            // style={{position: "relative",}}
          />{" "}
          <button
            className="far fa-search"
            style={{
              position: "absolute",
              top: "27%",
              right: "1.5%",
              "font-size": "20px",
            }}
            onClick={() => setShow(!show)}
          />
        </div>
      </div>

      <div className="slide-content pt-130">
        {/* <div className="ml-slide-content"> */}
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3771/3771278.png"
              width={"40px"}
            />
            &nbsp; Toán lớp 1
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/6132/6132221.png"
              width={"40px"}
            />
            &nbsp; C#
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3771/3771278.png"
              width={"40px"}
            />
            &nbsp; Toán lớp 3
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3771/3771278.png"
              width={"40px"}
            />
            &nbsp; Toán lớp 4
          </div>
        </div>

        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/897/897368.png"
              width={"40px"}
            />
            &nbsp; Tin học lớp 5
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              width={"40px"}
            />
            &nbsp; Javascript
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/919/919854.png"
              width={"40px"}
            />
            &nbsp; Java
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/4178/4178684.png"
              width={"40px"}
            />
            &nbsp; Sinh học lớp 9
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3182/3182554.png"
              width={"40px"}
            />
            &nbsp; Sinh học lớp 12
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/897/897368.png"
              width={"40px"}
            />
            &nbsp; Lịch sử lớp 8
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png"
              width={"40px"}
            />
            &nbsp; C++
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/5486/5486268.png"
              width={"40px"}
            />
            &nbsp; Tiếng anh lớp 12
          </div>
        </div>

        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/5486/5486268.png"
              width={"40px"}
            />
            &nbsp; Tiếng anh lớp 12
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/5486/5486259.png"
              width={"40px"}
            />
            &nbsp; Tiếng anh lớp 10
          </div>
        </div>
        <div className="subject-children">
          <div className="subject-children-name">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/921/921448.png"
              width={"40px"}
            />
            &nbsp; Địa lý lớp 12
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Subject;
