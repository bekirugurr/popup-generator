const popUp5 = (t) => {
  //! Aşağıda siteye girilen alet all ise veya istenen alet ile girildiyse kendisi açısından if blokunun çalışmasına izin veriyor
  let whichDevice =
    "ontouchstart" in document.documentElement ? "mobile" : "desktop";
  let isItOkeyAboutDevice =
    t.visitorDevice == "all" || t.visitorDevice == whichDevice;

  //! Aşağıda hangi sitenen gelenlere popup açılacağı belirtilmemiş ise veya belirtilen site ile gelinen sitenin string hallerinden birisi diğerini içeriyorsa kendisi açısından if blokunun çalışmasına izin veriyor
  let referrerSite = document.referrer;
  let isItOkeyAboutTrafficSource =
    !t.trafficSource ||
    (t.trafficSource &&
      referrerSite.toLowerCase().includes(t.trafficSource.toLowerCase())) ||
    (referrerSite &&
      t.trafficSource.toLowerCase().includes(referrerSite.toLowerCase()));

  //! Aşağıda browser languge belirtilmemiş veya belirtilen dil kullanıcının browser languagesiyle eşleşiyorsa modalın çalışmasına izin veriyor
  const userBrowserLanguage = navigator.language || navigator.userLanguage;
  console.log(userBrowserLanguage);

  let isItOkayAboutBrowserLanguage =
    t.browserLanguage.length === 0 ||
    t.browserLanguage.includes(userBrowserLanguage.slice(0, 2));
  console.log("uzunluk 0 mı", t.browserLanguage.length === 0);
  console.log(
    "browser dil array içinde var mı?",
    t.browserLanguage.includes(userBrowserLanguage.slice(0, 2))
  );

  //! if bloku ancak yukarıdaki üçü için de sorun yoksa çalışıyor
  if (
    isItOkeyAboutDevice &&
    isItOkeyAboutTrafficSource &&
    isItOkayAboutBrowserLanguage
  ) {
    let modalSize;
    let isVisible =
      t.percentage || t.howManySecondsAfter ? "hidden" : "visible";
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
        outerDiv: "h-[22rem] w-[34rem]  gap-10  px-16",
      };
    } else if (t.size === "small") {
      modalSize = {
        outerDiv: "h-[15rem] w-[26rem] gap-3 px-8",
      };
    } else {
      modalSize = {
        outerDiv: "h-[18rem] w-[30rem] gap-5  px-16",
      };
    }

    let popUpDiv = `
          <div
          id='modalWrapper'
          class="bg-white z-50 rounded-3xl border border-gray-300  overflow-hidden flex flex-col justify-center items-center text-center fixed ${isVisible} ${
      modalSize.outerDiv
    } ${modalPosition}"
              >
          <h2 class="font-bold text-3xl">${t.content[0] && t.content[0][1]}</h2>
          <h3 class="text-xl font-normal">${
            t.content[1] && t.content[1][1]
          }</h3>
  
          <button
            id='to-dashboard-button'
            class="text-sm font-semibold border border-gray-400  rounded-lg py-3 w-full bg-[${
              t.color
            }] ${
      t.color == "#FFFFFF" || t.color == "#DDDDDD" ? "text-black" : "text-white"
    }"
          >
            ${t.content[2] && t.content[2][1]}
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
    theBody.innerHTML += popUpDiv;

    function makeModalHidden() {
      modalWrapper.classList.remove("visible");
      modalWrapper.classList.add("hidden");
    }

    let toDashboardButton = document.getElementById("to-dashboard-button");
    let modalWrapper = document.getElementById("modalWrapper");

    toDashboardButton.addEventListener("click", (e) => {
      //! IT WILL BE WRİTTEN HERE WHAT IS WANTED TO HAPPEN WHEN CLICKED ON THE FORM . BUT I DID NOT ADD IT. BECAUSE WAS NOT WANTED IN THE TASK
      makeModalHidden();
    });

    let closeButtons = document.querySelectorAll(".close-button");

    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        makeModalHidden();
      });
    });

    //! Aşağıdaki isWaitingForTrigger değişkeni istenen saniye geçmesiyle ve istenen scroll yüzdesinin geçmesi iki durumunda da çalışmasını engellemk için. Bir tetikleyince öbürü tetiklemesin diye
    let isWaitingForTrigger = true;

    //! İstenen saniyenin geçmesiyle tetikliyor
    if (t.howManySecondsAfter) {
      let time = parseInt(t.howManySecondsAfter) * 1000;
      setTimeout(() => {
        if (isWaitingForTrigger) {
          modalWrapper.classList.remove("hidden");
          modalWrapper.classList.add("visible");
          isWaitingForTrigger = false;
        }
      }, [time]);
    }

    //! Her yarım saniyede bir scroll u kontrol ediyor. İstenen scroll u geçmişse ve popup tetiklenmedi ise tetikliyor ve interval e son veriyor
    if (t.percentage) {
      let scrollPercentRounded = 0;
      window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        scrollPercentRounded = Math.round(scrollPercent * 100);
      });
      const myInterval = setInterval(checkOutScroll, 500);
      function checkOutScroll() {
        if (!isWaitingForTrigger) {
          clearInterval(myInterval);
        } else if (scrollPercentRounded >= parseInt(t.percentage)) {
          modalWrapper.classList.remove("hidden");
          modalWrapper.classList.add("visible");
          isWaitingForTrigger = false;
          clearInterval(myInterval);
        }
      }
    }
  }

  //! EXIT INTENT TARGETING. Kullanıcı mousu browserın yukarısına götürünce çalışıyor. Aşağılara gittiğinde çalışmıyor. Çünkü gidip dönebilir. Bir de kullanıcıyı sürekli darlamaması için sadece bir defa çalışıyor. İstenildiği üzere sadece desktoplarda çalışıyor
  if (isItOkayAboutBrowserLanguage && t.exitIntentTargeting && whichDevice !== "mobile") {
    let onMouseOut = (e) => {
      if (e.clientY < 50) {
        document.removeEventListener("mouseout", onMouseOut);
        modalWrapper.classList.remove("hidden");
        modalWrapper.classList.add("visible");
      }
    };
    document.addEventListener("mouseout", onMouseOut);
  }
};
