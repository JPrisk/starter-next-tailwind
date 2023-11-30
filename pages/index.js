export default function Home() {
  return (
    <>
    <section className="container max-w-[70%] mr-auto ml-auto grid justify-around grid-cols-2 md:grid-cols-none mb-32 pt-8 mx-20 md:mb-20 md:mt-22 md:pt-18 md:pb-9 md:mx-5 text-justify">
      <article className="text-left md:mb-5 maxw-md md-min:pr-6 md:pr-3">
        <h1 className="text-5xl font-euclid mb-8 leading-extra-lose text-main-heading font-semibold">
          Free scheduling software
          <span className="m-0 align-top text-dotColor">.</span>
        </h1>
        <p className="text-lg leading-7">
          Organize your business with 24/7 automated online booking, reminders,
          payments, and more.
        </p>
        <form className="flex mt-10 md:mt-8 md:block">
          <div className="md:mb-4 md:max-w-full mr-4 relative inline-block w-full h-full align-middle max-w-xs pr-11 rounded-lg bg-white drop-shadow-md">
            <div className="relative mb-2">
              <input
                className="w-full border-none pt-3.5 pr-0 pb-1.5 pl-6 outline-none"
                type="email"
                name="email"
                placeholder="Your email"
              ></input>
            </div>
          </div>
          <div>
            <button
              className="w-36 h-12 leading-none mt-0 block text-white bg-btn-bg rounded-lg cursor-pointer text-center transition-colors hover:bg-blue-500"
              type="submit"
            >
              Start FREE
            </button>
          </div>
        </form>
        <div className="mt-4 flex item-center gap-0.5">
          <span className="signup-text">Or sign up with</span>
          <a className="inline-flex py-1 px-2 gap-0.5 border-none rounded-xl items-center no-underline bg-dull-grey">
            <span>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M7.67308 2.78616C8.92728 2.78616 9.77331 3.32791 10.2557 3.78061L12.1407 1.94013C10.983 0.864046 9.47645 0.203552 7.67308 0.203552C5.06079 0.203552 2.80472 1.70265 1.70638 3.88451L3.86597 5.56172C4.40772 3.9513 5.90682 2.78616 7.67308 2.78616Z"
                  fill="#EA4335"
                ></path>{" "}
                <path
                  d="M14.0854 7.03116C14.0854 6.48199 14.0409 6.08124 13.9444 5.66565H7.67346V8.14436H11.3544C11.2802 8.76032 10.8795 9.68798 9.9889 10.3114L12.0965 11.9441C13.3582 10.7789 14.0854 9.06459 14.0854 7.03116Z"
                  fill="#4285F4"
                ></path>{" "}
                <path
                  d="M3.87323 8.20371C3.73223 7.78811 3.65059 7.34284 3.65059 6.88272C3.65059 6.4226 3.73223 5.97732 3.86581 5.56173L1.70622 3.88452C1.25352 4.78992 0.993774 5.80663 0.993774 6.88272C0.993774 7.9588 1.25352 8.97552 1.70622 9.88092L3.87323 8.20371Z"
                  fill="#FBBC05"
                ></path>{" "}
                <path
                  d="M7.67328 13.5617C9.47665 13.5617 10.9906 12.968 12.0964 11.9439L9.98872 10.3112C9.4247 10.7045 8.66773 10.9791 7.67328 10.9791C5.90701 10.9791 4.40791 9.81397 3.87358 8.20355L1.71399 9.88076C2.81234 12.0626 5.06099 13.5617 7.67328 13.5617Z"
                  fill="#34A853"
                ></path>{" "}
              </svg>
            </span>
            <span className="links">Google</span>
          </a>
          <span className="signup-text">or</span>
          <a className="inline-flex py-1 px-2 gap-0.5 border-none rounded-xl items-center no-underline bg-dull-grey">
            <span>
            <svg width="20" height="20">
                <circle
                  cx="10"
                  cy="10"
                  r="8.75"
                  fill="url(#paint0_linear_2696_12898)"
                ></circle>
                <path
                  d="M13.2586 12.676L13.6472 10.2063H11.2158V8.60437C11.2158 7.92856 11.5548 7.26942 12.6438 7.26942H13.75V5.16687C13.75 5.16687 12.7466 5 11.7877 5C9.78427 5 8.47604 6.18309 8.47604 8.32403V10.2063H6.25V12.676H8.47604V18.6466C8.92294 18.715 9.38015 18.75 9.8459 18.75C10.3117 18.75 10.7689 18.715 11.2158 18.6466V12.676H13.2586Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_2696_12898"
                    x1="10"
                    y1="1.25"
                    x2="10"
                    y2="18.6981"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#18ACFE"></stop>
                    <stop offset="1" stopColor="#0163E0"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="links">Facebook</span>
          </a>
        </div>
        <div className="w-72 h-14 mt-10">
          <div className="text-center m-auto my-0 max-w-3xl relative">
            <a
              className="outline-none"
              target="_blank"
              href="https://uk.trustpilot.com/review/setmore.com?utm_medium=trustbox&amp;utm_source=MicroStar"
            >
              <div className="text-lg mt-0 mr-3 mb-2 ml-0 font-medium inline-block md-min:align-middle">
                Excellent
              </div>
              <div className=" mt-0 ml-0 md-min:mr-2 md-min:mb-2 w-24 inline-block md-min:align-middle max-w-full">
                <div>
                  <div className="">
                    <div className="relative w-full h-0 p-0 pb-[18.32%]">
                      <svg
                        role="img"
                        aria-labelledby="starRating-5wjq5q5hk68"
                        viewBox="0 0 251 46"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute h-full w-full left-0 top-0"
                      >
                        <title id="starRating-5wjq5q5hk68" lang="en">
                          4.8 out of five star rating on Trustpilot
                        </title>
                        <g className="tp-star">
                          <path
                            className="tp-star__canvas"
                            fill="#dcdce6"
                            d="M0 46.330002h46.375586V0H0z"
                          ></path>
                          <path
                            className="tp-star__shape"
                            d="M39.533936 19.711433L13.230239 38.80065l3.838216-11.797827L7.02115 19.711433h12.418975l3.837417-11.798624 3.837418 11.798624h12.418975zM23.2785 31.510075l7.183595-1.509576 2.862114 8.800152L23.2785 31.510075z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g className="tp-star">
                          <path
                            className="tp-star__canvas"
                            fill="#dcdce6"
                            d="M51.24816 46.330002h46.375587V0H51.248161z"
                          ></path>
                          <path
                            className="tp-star__canvas--half"
                            fill="#dcdce6"
                            d="M51.24816 46.330002h23.187793V0H51.248161z"
                          ></path>
                          <path
                            className="tp-star__shape"
                            d="M74.990978 31.32991L81.150908 30 84 39l-9.660206-7.202786L64.30279 39l3.895636-11.840666L58 19.841466h12.605577L74.499595 8l3.895637 11.841466H91L74.990978 31.329909z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g className="tp-star">
                          <path
                            className="tp-star__canvas"
                            fill="#dcdce6"
                            d="M102.532209 46.330002h46.375586V0h-46.375586z"
                          ></path>
                          <path
                            className="tp-star__canvas--half"
                            fill="#dcdce6"
                            d="M102.532209 46.330002h23.187793V0h-23.187793z"
                          ></path>
                          <path
                            className="tp-star__shape"
                            d="M142.066994 19.711433L115.763298 38.80065l3.838215-11.797827-10.047304-7.291391h12.418975l3.837418-11.798624 3.837417 11.798624h12.418975zM125.81156 31.510075l7.183595-1.509576 2.862113 8.800152-10.045708-7.290576z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g className="tp-star">
                          <path
                            className="tp-star__canvas"
                            fill="#dcdce6"
                            d="M153.815458 46.330002h46.375586V0h-46.375586z"
                          ></path>
                          <path
                            className="tp-star__canvas--half"
                            fill="#dcdce6"
                            d="M153.815458 46.330002h23.187793V0h-23.187793z"
                          ></path>
                          <path
                            className="tp-star__shape"
                            d="M193.348355 19.711433L167.045457 38.80065l3.837417-11.797827-10.047303-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418974zM177.09292 31.510075l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                            fill="#FFF"
                          ></path>
                        </g>
                        <g className="tp-star">
                          <path
                            className="tp-star__canvas"
                            fill="#dcdce6"
                            d="M205.064416 46.330002h46.375587V0h-46.375587z"
                          ></path>
                          <path
                            className="tp-star__canvas--half"
                            fill="#dcdce6"
                            d="M205.064416 46.330002h23.187793V0h-23.187793z"
                          ></path>
                          <path
                            className="tp-star__shape"
                            d="M244.597022 19.711433l-26.3029 19.089218 3.837419-11.797827-10.047304-7.291391h12.418974l3.837418-11.798624 3.837418 11.798624h12.418975zm-16.255436 11.798642l7.183595-1.509576 2.862114 8.800152-10.045709-7.290576z"
                            fill="#FFF"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="tp-widget-logo"
                className="sm-min:inline-block w-20 tp-widget-logo ml-1"
              >
                <div className="">
                  <div className="relative h-0 w-full p-0 pb-[24.6%]">
                    <svg
                      role="img"
                      aria-labelledby="trustpilotLogo-ydweuucy1h"
                      viewBox="0 0 126 31"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute h-full w-full left-0 top-0"
                    >
                      <title id="trustpilotLogo-ydweuucy1h">Trustpilot</title>
                      <path
                        className="tp-logo__text"
                        d="M33.074774 11.07005H45.81806v2.364196h-5.010656v13.290316h-2.755306V13.434246h-4.988435V11.07005h.01111zm12.198892 4.319629h2.355341v2.187433h.04444c.077771-.309334.222203-.60762.433295-.894859.211092-.287239.466624-.56343.766597-.79543.299972-.243048.633276-.430858.999909-.585525.366633-.14362.744377-.220953 1.12212-.220953.288863 0 .499955.011047.611056.022095.1111.011048.222202.033143.344413.04419v2.408387c-.177762-.033143-.355523-.055238-.544395-.077333-.188872-.022096-.366633-.033143-.544395-.033143-.422184 0-.822148.08838-1.199891.254096-.377744.165714-.699936.41981-.977689.740192-.277753.331429-.499955.729144-.666606 1.21524-.166652.486097-.244422 1.03848-.244422 1.668195v5.39125h-2.510883V15.38968h.01111zm18.220567 11.334883H61.02779v-1.579813h-.04444c-.311083.574477-.766597 1.02743-1.377653 1.369908-.611055.342477-1.233221.51924-1.866497.51924-1.499864 0-2.588654-.364573-3.25526-1.104765-.666606-.740193-.999909-1.856005-.999909-3.347437V15.38968h2.510883v6.948968c0 .994288.188872 1.701337.577725 2.1101.377744.408763.922139.618668 1.610965.618668.533285 0 .96658-.077333 1.322102-.243048.355524-.165714.644386-.37562.855478-.65181.222202-.265144.377744-.596574.477735-.972194.09999-.37562.144431-.784382.144431-1.226288v-6.573349h2.510883v11.323836zm4.27739-3.634675c.07777.729144.355522 1.237336.833257 1.535623.488844.287238 1.06657.441905 1.744286.441905.233312 0 .499954-.022095.799927-.055238.299973-.033143.588836-.110476.844368-.209905.266642-.099429.477734-.254096.655496-.452954.166652-.198857.244422-.452953.233312-.773335-.01111-.320381-.133321-.585525-.355523-.784382-.222202-.209906-.499955-.364573-.844368-.497144-.344413-.121525-.733267-.232-1.17767-.320382-.444405-.088381-.888809-.18781-1.344323-.287239-.466624-.099429-.922138-.232-1.355432-.37562-.433294-.14362-.822148-.342477-1.166561-.596573-.344413-.243048-.622166-.56343-.822148-.950097-.211092-.386668-.311083-.861716-.311083-1.436194 0-.618668.155542-1.12686.455515-1.54667.299972-.41981.688826-.75124 1.14434-1.005336.466624-.254095.97769-.430858 1.544304-.541334.566615-.099429 1.11101-.154667 1.622075-.154667.588836 0 1.15545.066286 1.688736.18781.533285.121524 1.02213.320381 1.455423.60762.433294.276191.788817.640764 1.07768 1.08267.288863.441905.466624.98324.544395 1.612955h-2.621984c-.122211-.596572-.388854-1.005335-.822148-1.204193-.433294-.209905-.933248-.309334-1.488753-.309334-.177762 0-.388854.011048-.633276.04419-.244422.033144-.466624.088382-.688826.165715-.211092.077334-.388854.198858-.544395.353525-.144432.154667-.222203.353525-.222203.60762 0 .309335.111101.552383.322193.740193.211092.18781.488845.342477.833258.475048.344413.121524.733267.232 1.177671.320382.444404.088381.899918.18781 1.366542.287239.455515.099429.899919.232 1.344323.37562.444404.14362.833257.342477 1.17767.596573.344414.254095.622166.56343.833258.93905.211092.37562.322193.850668.322193 1.40305 0 .673906-.155541 1.237336-.466624 1.712385-.311083.464001-.711047.850669-1.199891 1.137907-.488845.28724-1.04435.508192-1.644295.640764-.599946.132572-1.199891.198857-1.788727.198857-.722156 0-1.388762-.077333-1.999818-.243048-.611056-.165714-1.14434-.408763-1.588745-.729144-.444404-.33143-.799927-.740192-1.05546-1.226289-.255532-.486096-.388853-1.071621-.411073-1.745528h2.533103v-.022095zm8.288135-7.700208h1.899828v-3.402675h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155542.486096.07777.132572.199981.232.366633.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.13332-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222zm8.454788 0h2.377562V16.9253h.04444c.355523-.662858.844368-1.12686 1.477644-1.414098.633276-.287239 1.310992-.430858 2.055369-.430858.899918 0 1.677625.154667 2.344231.475048.666606.309335 1.222111.740193 1.666515 1.292575.444405.552382.766597 1.193145.9888 1.92229.222202.729145.333303 1.513527.333303 2.3421 0 .762288-.099991 1.50248-.299973 2.20953-.199982.718096-.499955 1.347812-.899918 1.900194-.399964.552383-.911029.98324-1.533194 1.31467-.622166.33143-1.344323.497144-2.18869.497144-.366634 0-.733267-.033143-1.0999-.099429-.366634-.066286-.722157-.176762-1.05546-.320381-.333303-.14362-.655496-.33143-.933249-.56343-.288863-.232-.522175-.497144-.722157-.79543h-.04444v5.656393h-2.510883V15.38968zm8.77698 5.67849c0-.508193-.06666-1.005337-.199981-1.491433-.133321-.486096-.333303-.905907-.599946-1.281527-.266642-.37562-.599945-.673906-.988799-.894859-.399963-.220953-.855478-.342477-1.366542-.342477-1.05546 0-1.855387.364572-2.388672 1.093717-.533285.729144-.799928 1.701337-.799928 2.916578 0 .574478.066661 1.104764.211092 1.59086.144432.486097.344414.905908.633276 1.259432.277753.353525.611056.629716.99991.828574.388853.209905.844367.309334 1.355432.309334.577725 0 1.05546-.121524 1.455423-.353525.399964-.232.722157-.541335.97769-.905907.255531-.37562.444403-.79543.555504-1.270479.099991-.475049.155542-.961145.155542-1.458289zm4.432931-9.99812h2.510883v2.364197h-2.510883V11.07005zm0 4.31963h2.510883v11.334883h-2.510883V15.389679zm4.755124-4.31963h2.510883v15.654513h-2.510883V11.07005zm10.210184 15.963847c-.911029 0-1.722066-.154667-2.433113-.452953-.711046-.298287-1.310992-.718097-1.810946-1.237337-.488845-.530287-.866588-1.160002-1.12212-1.889147-.255533-.729144-.388854-1.535622-.388854-2.408386 0-.861716.133321-1.657147.388853-2.386291.255533-.729145.633276-1.35886 1.12212-1.889148.488845-.530287 1.0999-.93905 1.810947-1.237336.711047-.298286 1.522084-.452953 2.433113-.452953.911028 0 1.722066.154667 2.433112.452953.711047.298287 1.310992.718097 1.810947 1.237336.488844.530287.866588 1.160003 1.12212 1.889148.255532.729144.388854 1.524575.388854 2.38629 0 .872765-.133322 1.679243-.388854 2.408387-.255532.729145-.633276 1.35886-1.12212 1.889147-.488845.530287-1.0999.93905-1.810947 1.237337-.711046.298286-1.522084.452953-2.433112.452953zm0-1.977528c.555505 0 1.04435-.121524 1.455423-.353525.411074-.232.744377-.541335 1.01102-.916954.266642-.37562.455513-.806478.588835-1.281527.12221-.475049.188872-.961145.188872-1.45829 0-.486096-.066661-.961144-.188872-1.44724-.122211-.486097-.322193-.905907-.588836-1.281527-.266642-.37562-.599945-.673907-1.011019-.905907-.411074-.232-.899918-.353525-1.455423-.353525-.555505 0-1.04435.121524-1.455424.353525-.411073.232-.744376.541334-1.011019.905907-.266642.37562-.455514.79543-.588835 1.281526-.122211.486097-.188872.961145-.188872 1.447242 0 .497144.06666.98324.188872 1.458289.12221.475049.322193.905907.588835 1.281527.266643.37562.599946.684954 1.01102.916954.411073.243048.899918.353525 1.455423.353525zm6.4883-9.66669h1.899827v-3.402674h2.510883v3.402675h2.26646v1.867052h-2.26646v6.054109c0 .265143.01111.486096.03333.684954.02222.18781.07777.353524.155541.486096.077771.132572.199982.232.366634.298287.166651.066285.377743.099428.666606.099428.177762 0 .355523 0 .533285-.011047.177762-.011048.355523-.033143.533285-.077334v1.933338c-.277753.033143-.555505.055238-.811038.088381-.266642.033143-.533285.04419-.811037.04419-.666606 0-1.199891-.066285-1.599855-.18781-.399963-.121523-.722156-.309333-.944358-.552381-.233313-.243049-.377744-.541335-.466625-.905907-.07777-.364573-.133321-.784383-.144431-1.248384v-6.683825h-1.899827v-1.889147h-.02222z"
                        fill="#191919"
                      ></path>
                      <path
                        className="tp-logo__star"
                        fill="#00B67A"
                        d="M30.141707 11.07005H18.63164L15.076408.177071l-3.566342 10.892977L0 11.059002l9.321376 6.739063-3.566343 10.88193 9.321375-6.728016 9.310266 6.728016-3.555233-10.88193 9.310266-6.728016z"
                      ></path>
                      <path
                        className="tp-logo__star-notch"
                        fill="#005128"
                        d="M21.631369 20.26169l-.799928-2.463625-5.755033 4.153914z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </article>
      <figure className="md-min:align-bottom md-min:min-w-[350px] md-min:max-w-[560px] relative">
        <video
          muted
          loop
          autoPlay
          poster="https://assets.setmore.com/website/v2/images/homepage-v2/setmore-website-homepage-hero-cover.webp"
          preload="auto"
          className="w-full video-screen:hidden"
          playsInline
        >
          <source
            src="https://assets.setmore.com/website/v2/images/homepage-v2/video/homepage-hero.mp4"
            type="video/mp4"
          />
        </video>
        <picture className="block">
          <source
            srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop@2x.webp 2x"
            type="image/webp"
            media="(max-width:640px)"
          />
          <source
            srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-crop@2x.png 2x"
            type="image/png"
            media="(max-width:640px)"
          />
          <source
            srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet@2x.webp 2x"
            type="image/webp"
            media="(min-width:641px) and (max-width:992px)"
          />
          <source
            srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software-tablet@2x.png 2x"
            type="image/png"
            media="(min-width:641px) and (max-width:992px)"
          />
          <source
            srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software@2x.webp 2x"
            type="image/webp"
            media="(min-width:993px)"
          />
          <source
            srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software@2x.png 2x"
            type="image/png"
            media="(min-width:993px)"
          />
          <img
            src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-scheduling-software.png"
            alt="Setmore scheduling software"
            className="w-full absolute -bottom-[15px]"
          />
        </picture>
      </figure>
    </section>
    <section className="pb-40 relative bg-blue-grey">
      <div className="m-0 mx-auto my-auto max-w-[1160px] md-min:flex">
        <figure className="">
        <picture className="md-min:min-w-[157px]"><source srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page-crop.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page-crop@2x.webp 2x" type="image/webp" media="(max-width: 767px)"/><source srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page-crop.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page-crop@2x.png 2x" type="image/png" media="(max-width: 767px)"/><source srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page.webp, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page@2x.webp 2x" type="image/webp"/><source srcSet="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page.png, https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page@2x.png 2x" type="image/png"/>
        <img loading="lazy" src="https://assets.setmore.com/website/v2/images/homepage-v2-2/setmore-booking-page.png" alt="setmore app on desktop and mobile"
         className="w-[560px] height-[372px] -mt-10 drop-shadow md-min:-mt-20 aspect-140/93"/></picture>
        </figure>
        <article className="lg-min:ml-36 md-min:ml-10 md-min:max-w-[460px]">
        <h2 className="lg-min:mt-20 md-min:mb-6 md-min:mt-10 text-4xl text-main-heading font-semibold">Spotlight your brand<span className="dot">.</span></h2>
        <p className="mb-10 text-lg mt-4">Brand experience hits a whole new level with a custom Booking Page. Show why your business stands apart and enable people to self-book at their convenience.</p>
        <a href="/start-now" className="border-btn-bg border-solid border text-btn-bg min-w-40 px-10 py-3 rounded-md text-center transition-shadow"><span className="">Create your Booking Page</span></a>
        </article>
      </div>
    </section>
    <section className="bg-blue-grey md:pb-20">
      <ul className="container max-w-[1160px] m-0 mx-auto min-md:flex min-md:flex-wrap min-md:justify-between lg:mx-5 list-none">
      </ul>
    </section>
</>
  );
}
