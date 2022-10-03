const popUp2 = (t) => {
  let modalSize;
  let isVisible = "visible";
  let modalPosition;
  const positionFunction = (position) => {
    let str = position.x + "-" + position.y;
    if (str === "left-top") {
      return "left-3 top-3";
    } else if (str === "center-top") {
      return "left-1/2 -translate-x-1/2 top-3 ";
    } else if (str === "right-top") {
      return "right-3 top-3";
    } else if (str === "left-center") {
      return "left-3  top-1/2 -translate-y-1/2";
    } else if (str === "right-center") {
      return "right-3 top-1/2 -translate-y-1/2";
    } else if (str === "left-bottom") {
      return "left-3 bottom-3";
    } else if (str === "center-bottom") {
      return "left-1/2 -translate-x-1/2 bottom-3";
    } else if (str === "right-bottom") {
      return "right-3 bottom-3";
    } else {
      return "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2";
    }
  };

  modalPosition = positionFunction(t.position);

  if (t.size === "large") {
    modalSize = {
        outerDiv: "h-[37.5rem] w-[30rem]",
        innerDiv: "gap-6 px-8",
        badge: "h-[5rem] w-[4rem]",
        form: "gap-10",
    };
  } else if (t.size === "small") {
    modalSize = {
        outerDiv: "h-[26.5rem] w-[21.2rem]",
        innerDiv: "gap-2 px-12",
        badge: "h-[4rem] w-[3rem]",
        form: "gap-3",
    };
  } else {
    modalSize = {
        outerDiv: "h-[32.5rem] w-[26rem]",
        innerDiv: "gap-4 px-12",
        badge: "h-[4rem] w-[3rem]",
        form: "gap-6",
    };
  }

  let imgDiv= t.image ? `<img src="${t.image}" alt="upper image" class="w-full h-1/2" />` : `<img src="https://www.softlanding.ca/wp-content/uploads/2020/04/WM-2.jpg" alt="upper image" class="w-full h-1/2" />`

  

  let popDiv = `
    <div
      id='modalWrapper'
      class=" bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden  absolute ${isVisible} ${modalSize.outerDiv} ${modalPosition} "
    >
      ${imgDiv}
      
      <div class="w-ful h-1/2 flex flex-col justify-center items-center ${modalSize.innerDiv}" >
        <h2 class="font-bold text-3xl">${t.content[0] && t.content[0][1]}</h2>
        <h3 class="text-xl font-medium">${t.content[1] && t.content[1][1]}</h3>
        <button
          id='contine-button'
          class="text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full bg-[${
            t.color
          }] ${
            t.color == "#FFFFFF" || t.color == "#DDDDDD"
              ? "text-black"
              : "text-white"
          }"
        >
          ${t.content[2] && t.content[2][1]}
        </button>
        <button
          class="text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${t.color}]  close-button"
        >
          ${t.content[3] && t.content[3][1]}
        </button>
      </div>
      <button class="absolute top-3 right-3 rounded-full close-button">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="gray"
        class="w-8 h-8"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        </svg>
      </button>
    </div>
`;

  let theBody = document.getElementsByTagName("body")[0];
  theBody.innerHTML += popDiv;

  function makeModalHidden() {
    modalWrapper.classList.remove("visible");
    modalWrapper.classList.add("hidden");
  }

  let continueButton = document.getElementById("contine-button");
  let modalWrapper = document.getElementById("modalWrapper");

  continueButton.addEventListener("click", () => {

    //! IT WILL BE WRİTTEN HERE WHAT IS WANTED TO HAPPEN WHEN CLICKED ON THE FORM . BUT I DID NOT ADD IT. BECAUSE WAS NOT WANTED IN THE TASK
    makeModalHidden();
  });

  let closeButtons = document.querySelectorAll(".close-button");

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      makeModalHidden();
    });
  });

  if (t.howManySecondsAfter) {
    modalWrapper.classList.remove("visible");
    modalWrapper.classList.add("hidden");
    let time = parseInt(t.howManySecondsAfter) * 1000;
    setTimeout(() => {
      modalWrapper.classList.remove("hidden");
      modalWrapper.classList.add("visible");
    }, [time]);
  }

};
  
  