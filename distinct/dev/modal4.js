const popUp4 = (t) => {
  let modalSize;
  let isVisible = t.percentage || t.howManySecondsAfter ? "hidden" : "visible";
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
        outerDiv: "h-[37rem] w-[34rem]  gap-6  px-16",
        badgeDiv: "h-32 w-32",
        badge: "h-[5rem] w-[4rem]",
        defSVG: "90",
        form: "gap-10",
    };
  } else if (t.size === "small") {
    modalSize = {
        outerDiv: "h-[26rem] w-[26rem] gap-3 px-8",
        badgeDiv: "h-24 w-24",
        badge: "h-[4rem] w-[3rem]",
        defSVG: "60",
        form: "gap-3",
    };
  } else {
    modalSize = {
        outerDiv: "h-[32rem] w-[30rem] gap-5  px-16",
        badgeDiv: "h-24 w-24",
        badge: "h-[4rem] w-[3rem]",
        defSVG: "60",
        form: "gap-6",
    };
  }


  let logoİmg = t.logo
    ? `<img src={t.logo} alt="badge" class={${modalSize.badge}} />`
    : `<svg
    width=${modalSize.defSVG}
    height=${modalSize.defSVG}
    viewBox="0 0 28 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    >
    <path
    d="M22 12V32H6V12H22ZM19 0H9L7 2H0V6H28V2H21L19 0ZM26 8H2V32C2.00317 33.0599 2.42561 34.0755 3.17507 34.8249C3.92453 35.5744 4.94011 35.9968 6 36H22C23.0599 35.9968 24.0755 35.5744 24.8249 34.8249C25.5744 34.0755 25.9968 33.0599 26 32V8Z"
    fill="white"
    />
    </svg>`;

  let popDiv = `
        <div
        id='modalWrapper'
        class="bg-white z-50 rounded-3xl shadow-lg shadow-gray-200 border border-gray-300  overflow-hidden flex flex-col justify-center items-center text-center fixed ${isVisible} ${modalSize.outerDiv} ${modalPosition}"
            >
        <div
          class="${
            modalSize.badgeDiv
          } grid place-items-center rounded-full bg-[${t.color}]"
        >
        ${logoİmg}

        </div>

        <h2 class="font-bold text-3xl">${t.content[0] && t.content[0][1]}</h2>
        <h3 class="text-xl font-normal">${t.content[1] && t.content[1][1]}</h3>

        <p class="text-gray-500">
        ${t.content[2] && t.content[2][1]}
        <span class="text-black font-medium">
          ${t.content[3] && t.content[3][1]}
        </span>
      </p>

        <button
          id='delete-button'
          class="text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full bg-[${
            t.color
          }] ${
            t.color == "#FFFFFF" || t.color == "#DDDDDD"
              ? 'text-black'
              : 'text-white'
          }"
        >
          ${t.content[4] && t.content[4][1]}
        </button>
        <button
          class="text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full text-black hover:bg-[${t.color}]  close-button"
        >
          ${t.content[5] && t.content[5][1]}
        </button>

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
    </div>`;

  let theBody = document.getElementsByTagName("body")[0];
  theBody.innerHTML += popDiv;

  function makeModalHidden() {
    modalWrapper.classList.remove("visible");
    modalWrapper.classList.add("hidden");
  }

  let deleteButton = document.getElementById("delete-button");
  let modalWrapper = document.getElementById("modalWrapper");

  deleteButton.addEventListener("click", (e) => {

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
    let time = parseInt(t.howManySecondsAfter) * 1000;
    setTimeout(() => {
      modalWrapper.classList.remove("hidden");
      modalWrapper.classList.add("visible");
    }, [time]);
  }

  if (t.percentage) {
    let scrollPercentRounded = 0
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY;
      let docHeight = document.body.offsetHeight;
      let winHeight = window.innerHeight;
      let scrollPercent = scrollTop / (docHeight - winHeight);
      scrollPercentRounded = Math.round(scrollPercent * 100);
    });
    const myInterval = setInterval(checkOutScroll, 500);
    function checkOutScroll() {
      if (scrollPercentRounded >= 50) {
        modalWrapper.classList.remove("hidden");
        modalWrapper.classList.add("visible");
        clearInterval(myInterval);
      }
    }
  }
};
