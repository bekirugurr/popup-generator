const popUp10 = (t) => {
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
          outerDiv: "h-[25rem] w-[45rem]",
          innerDiv: "gap-7 px-12",
          form: "gap-6",
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

      let popUpDiv = `
      <div
      id='modalWrapper'
      class=" bg-white z-50 rounded-3xl border border-gray-300 flex overflow-hidden fixed ${isVisible} ${modalSize.outerDiv} ${modalPosition}"
    >
      <div
        class="w-1/2  flex flex-col justify-center items-center gap-2 px-8 ${modalSize.innerDiv}"
      >
        <h2 class="font-semibold text-3xl">${t.content[0] && t.content[0][1]}</h2>
        <p>${t.content[1] && t.content[1][1]}</p>
        <form id='popUpForm' class="flex flex-col w-full gap-3 ${
          modalSize.form
        }">
          <input
            type="text"
            name="name"
            id="name"
            placeholder=${t.content[2] && t.content[2][1]}
            class="text-sm border border-gray-400 rounded-lg py-2 pl-2 w-full"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder=${t.content[3] && t.content[3][1]}
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
            ${t.content[4] && t.content[4][1]}
          </button>
          <div class="text-xs text-gray-800 flex justify-between w-full">
          <a class="hover:text-rose-600" href="#">${t.content[5] && t.content[5][1]}</a>
          <a class="hover:text-rose-600" href="#">${t.content[6] && t.content[6][1]}</a>
      </div>
        </form>
      </div>
      <div class="w-1/2 relative">
      <img src=${t.image ? t.image : "https://thumbsnap.com/i/ffkXAzBs.png"}
      alt='popup image'
      class='w-full h-full'>
        <button  class="absolute top-3 right-3 bg-gray-400 p-1 rounded-full close-button"
        >
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
        
        </button>
      </div>
    </div>
      
      `;

      let theBody = document.getElementsByTagName("body")[0];
      theBody.innerHTML += popUpDiv;
  
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
  