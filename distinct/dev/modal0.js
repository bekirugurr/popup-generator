const popUp0 = (t) => {
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
      outerDiv: "h-[30rem] w-[57rem]",
      innerDiv: "gap-7 px-12",
      form: "gap-7",
    };
  } else if (t.size === "small") {
    modalSize = {
      outerDiv: "h-[16rem] w-[30rem]",
      innerDiv: "gap-1 px-4",
      form: "gap-2",
    };
  } else {
    modalSize = {
      outerDiv: "h-[20.8rem] w-[39rem]",
      innerDiv: "gap-2 px-8",
      form: "gap-3",
    };
  }

  

  let popDiv = `
<div
      id='modalWrapper'
      class=" bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300 flex overflow-hidden absolute ${isVisible} ${
    modalSize.outerDiv
  } ${modalPosition}"
    >
      <div
        class="w-1/2  flex flex-col justify-center items-center gap-2 px-8 ${
          modalSize.innerDiv
        }"
      >
        <h2 class="font-semibold text-3xl">${t.content[0][1]}</h2>
        <p>${t.content[1][1]}</p>
        <form id='popUpForm' class="flex flex-col w-full gap-3 ${
          modalSize.form
        }">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=${t.content[2][1]}
            class="text-sm border border-gray-400 rounded-lg py-2 pl-2 w-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder=${t.content[3][1]}
            class="text-sm border border-gray-400 rounded-lg py-2 pl-2 w-full"
          />
          <button
            type="submit"
            class="text-sm font-semibold border border-gray-400  rounded-lg py-2 pl-2 w-full bg-[${
              t.color
            }] ${
    t.color == "#FFFFFF" || t.color == "#DDDDDD" ? "text-black" : "text-white"
  }"
          >
            ${t.content[4][1]}
          </button>
        </form>
        <p class="text-xs text-[#777777]">${t.content[5][1]}</p>
      </div>
      <div class="w-1/2 relative">
      <img src=${t.image ? t.image : "https://thumbsnap.com/i/yAynuzuM.jpg"}
      alt='popup image'
      class='w-full h-full'>
        <button id='closeModalButton' class="absolute top-3 right-3 bg-gray-400 p-1 rounded-full"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        
        </button>
      </div>
    </div>
`;

  let theBody = document.getElementsByTagName("body")[0];
  theBody.innerHTML += popDiv;

  function makeModalHidden() {
    modalWrapper.classList.remove("visible");
    modalWrapper.classList.add("hidden");
  }

  let popUpForm = document.getElementById("popUpForm");
  let modalWrapper = document.getElementById("modalWrapper");

  popUpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    //! IT WILL BE WRİTTEN HERE WHAT IS WANTED TO HAPPEN WHEN CLICKED ON THE FORM . BUT I DID NOT ADD IT. BECAUSE WAS NOT WANTED IN THE TASK
    makeModalHidden();
  });

  let closeModalButton = document.getElementById("closeModalButton");

  closeModalButton.addEventListener("click", () => {
    makeModalHidden();
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


