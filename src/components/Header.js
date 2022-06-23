import { UilInstagram } from "@iconscout/react-unicons";
import { UilFacebookF } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";
import { UilYoutube } from "@iconscout/react-unicons";
import { UilApple } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

function Header() {
  const [header, setHeader] = useState({
    flex: "",
    display: "",
    absolute: "",
    height: "",
    width: "",
    marginX: "",
    marginY: "",
    hidden: "",
    flex_nav: "",
    menu: "",
    menu_hidden: "hidden",
  });

  const [scrollFlag, setScrollFlag] = useState(false);

  const updateScroll = () => {
    const { scrollY } = window;
    const isScrolled = scrollY !== 0;
    console.log(isScrolled);
    // ㄷㄷ 상태값 같은거면 렌더링 발생 안됨...
    setScrollFlag(isScrolled);
  };

  console.log("렌더링 발생", scrollFlag);

  const throttle = (callback, delay) => {
    let timer = null;
    console.log("@@@", timer);

    // 클로저 함수 발동
    // 외부 함수의 변수인 callback 함수를 접근하여 사용
    // 우려되는 점은 timer가 계속 저장되어 메모리 누수 발생()
    return () => {
      console.log("앤 뭐임", timer);
      // 중복 방지 (두번 셋타임 들어가 콜백 부르기에 비효율적 이므로)
      if (timer) return;
      timer = setTimeout(() => {
        callback();
        console.log("내부 체크");
        timer = null;
      }, delay);
      console.log("###", timer);
    };
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("여긴 왜 클로저");
    };
  }, []);

  // true OR false로 css 상태 관리
  useEffect(() => {
    if (scrollFlag) {
      setHeader({
        flex: "flex",
        display: "hidden",
        absolute: "xl:absolute",
        height: "h-11",
        width: "max-w-5xl",
        marginX: "md:mx-auto",
        marginY: "my-0",
        hidden: "hidden",
        flex_nav: "md:flex",
        menu: "block",
        menu_hidden: "md:hidden",
      });
    } else {
      setHeader({
        flex: "",
        display: "",
        absolute: "",
        height: "",
        width: "",
        marginX: "",
        marginY: "",
        hidden: "",
        flex_nav: "",
        menu: "",
        menu_hidden: "hidden",
      });
    }
  }, [scrollFlag]);

  return (
    <header
      className={` bg-white ${header?.flex} max-w-full z-50 shadow sticky top-0`}
    >
      <section
        className={`max-w-5xl flex justify-between my-0 mx-auto py-3 ${header?.display}`}
      >
        <div className="flex">
          <UilInstagram className="w-5 h-5 mr-4 cursor-pointer" />
          <UilFacebookF className="w-5 h-5 mr-4 cursor-pointer" />
          <UilTwitterAlt className="w-5 h-5 mr-4 cursor-pointer" />
          <UilYoutube className="w-5 h-5 mr-4 cursor-pointer" />
          <UilApple className="w-5 h-5 cursor-pointer" />
        </div>
        <div className="flex">
          <h1 className="text-sm mr-4">SIDE MENU</h1>
          <h1 className="text-sm">SUBSCRIBE</h1>
        </div>
      </section>
      <figure
        className={`flex justify-center ${header?.absolute} bottom-3 items-center flex-shrink-0`}
      >
        <img
          src="/vogue_logo.png"
          className={`${header.height} cursor-pointer`}
        />
      </figure>
      <nav
        className={`relative lg:block flex justify-end mt-5 pb-5 w-full ${header.marginX} ${header.marginY}`}
      >
        <img
          src="./icon/header_menu.svg"
          className={` max-w-none cursor-pointer  ${header.menu_hidden} bottom-0 `}
        />
        <ul
          className={`flex justify-center flex-wrap font-roboto my-0 mx-5 ${header.hidden} ${header.flex_nav}`}
        >
          <li className="pr-10 ">
            <span className="cursor-pointer hover:text-red-500">FASHION</span>
          </li>
          <li className="pr-10">
            <span className="cursor-pointer hover:text-red-500">BEAUTY</span>
          </li>
          <li className="pr-10">
            <span className="cursor-pointer hover:text-red-500">LIVING</span>
          </li>
          <li className="pr-10">
            <span className="cursor-pointer hover:text-red-500">PEOPLE</span>
          </li>
          <li className="pr-10">
            <span className="cursor-pointer hover:text-red-500">VIDEO</span>
          </li>
          <li className="pr-10">
            <span className="cursor-pointer hover:text-red-500">RUNWAY</span>
          </li>
          <li className="pr-10">
            <span className="cursor-pointer hover:text-red-500">TIME&GEM</span>
          </li>
          <li>
            <span className="cursor-pointer hover:text-red-500">SHOPPING</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
