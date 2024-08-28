import React from "react";

const Contact = () => {
  const transbackground = {
    background: "rgba(0, 0, 0, 0.5)",
  };
  const project = [
    {
      id: 1,
      name: "Mai Hương",
      description: "0912573302",
      email: "maihuong@gmail.com",
    },
    {
      id: 2,
      name: "Kim Dung",
      description: "0912573302",
      email: "kimdung@gmail.com",
    },
    {
      id: 3,

      name: "Thanh Mai",
      description: "0912573302",
      email: "thanhmai@gmail.com",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col text-center pt-32 pb-20">
      <div style={transbackground} className="text-white ">
        <h1 className="text-3xl pt-20">Thông tin liên hệ</h1>
        <div className=" flex-col items-center justify-items-center pt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:mx-32  ">
          {project.map((item) => {
            return (
              <div
                key={item.id}
                class="w-96 max-w-sm rounded overflow-hidden shadow-lg mb-10 hover11 h-129 column hover:scale-110 duration-200 cursor-pointer"
              >
                <div class="px-6 py-4 h-40 ">
                  <div class="font-bold text-xl mb-2 text-center text-white">
                    {item.name}
                  </div>
                  <p class="text-gray-100 my-5 ">{item.description}</p>
                  <p class="text-gray-100 ">{item.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
