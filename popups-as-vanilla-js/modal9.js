const popUp9 = (t) => {
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
          outerDiv: "h-[33rem] w-[26rem] ",
          innerDiv: "gap-4 px-12",
          form: "gap-3",
          logo: "h-[10rem] w-[13rem]"
        };
      } else if (t.size === "small") {
        modalSize = {
          outerDiv: "h-[27rem] w-[22rem] ",
          innerDiv: "gap-2 px-10",
          form: "gap-2",
          logo: "h-[6rem] w-[9rem]"
        };
      } else {
        modalSize = {
          outerDiv: "h-[30rem] w-[24rem] ",
          innerDiv: "gap-4 px-12",
          form: "gap-3",
          logo: "h-[7rem] w-[10rem]"
        };
      }

      let bigImgDiv = t.image
      ? `<img src="${t.image}" alt="bigger image" class="w-full h-full absolute z-10" />`
      : `<img src="https://thumbsnap.com/i/F8QxftDb.jpg" alt="bigger image" class="w-full h-full absolute z-10" />`;

      let smallImgDiv = t.logo
      ? `<img src="${t.logo}" alt="smaller image" class=" ${modalSize.logo} z-50 rounded-xl absolute" />`
      : `<img src="https://thumbsnap.com/i/RDd8v24o.jpg" alt="smaller image" class="${modalSize.logo} z-50 rounded-xl " />`;


      let popUpDiv = `
            
      <div
      id='modalWrapper'
      class="font-secondary bg-white z-50 rounded-3xl border border-gray-300  overflow-hidden fixed ${isVisible} ${modalSize.outerDiv} ${modalPosition} "
    >
      <div class="w-full h-2/5 relative flex items-center justify-center">
        ${bigImgDiv}
        <div class="pt-6 z-50">
        
        ${smallImgDiv}
        
        </div>
      </div>

      <div
        class=" h-3/5 flex flex-col justify-center items-center gap-2 px-8 ${modalSize.innerDiv}"
      >
        <h2 class="font-bold text-3xl">${t.content[0][1]}</h2>
        <p>${t.content[1][1]}</p>
        <form
        id='popupForm'
          class="flex flex-col w-full gap-3 ${modalSize.form}"
        >
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
              t.color == "#FFFFFF" || t.color == "#DDDDDD"
                ? "text-black"
                : "text-white"
            }"
          >
            ${t.content[4][1]}
          </button>
        <p class="text-xs pl-2 text-gray-800">
            ${t.content[5] && t.content[5][1]}
            <span class="underline pl-1">${t.content[6] && t.content[6][1]}</span>
        </p>
        </form>
      </div>

      <button class="absolute top-3 right-3 rounded-full close-button z-50">
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
  );
}
    `;
  
      let theBody = document.getElementsByTagName("body")[0];
      theBody.innerHTML += popUpDiv;
  
      function makeModalHidden() {
        modalWrapper.classList.remove("visible");
        modalWrapper.classList.add("hidden");
      }
  
      let popUpForm = document.getElementById("popupForm");
      let modalWrapper = document.getElementById("modalWrapper");
  
      popUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
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
  