import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react";
import { BrandButton } from "./BrandButton";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setIsOpen(false);
    }, []);

    return (
        <header className="px-6 md:px-24 py-4 flex flex-wrap justify-between items-center sticky">
                <Logo/>
            <nav className="gap-4 hidden md:flex">
                <BrandLinks/>
            </nav>
            <nav className="md:hidden">
                <button onClick={toggleNavbar}>
                    {
                        isOpen 
                        ? <X size={36} color="white" />
                        : <Menu size={36} color="white"/>
                    }
                </button>
            </nav>
            {
                isOpen &&
                <div className="flex flex-col items-end basis-full py-4 gap-4">
                    <BrandLinks/>
                </div>
            }
        </header>
    )
}

const BrandLinks = () => {
    return (
        <>
            <BrandButton href="https://github.com/SamueLauXd">
                <Github />
                Github
            </BrandButton>

            <BrandButton href="https://www.linkedin.com/in/samuel-ortiz-8018051b6/">
                <Linkedin />
                Linkedin
            </BrandButton>

            <BrandButton href="https://www.behance.net/samuelortiz3">
                <Behance />
                Behance
            </BrandButton>
        </>
    )
}

const Logo = () => <svg width='165' height="51.62" viewBox="0 0 201 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4_2)">
        <path d="M177.17 14.9703H181.88V29.681C181.88 30.7227 182.237 31.6082 182.952 32.3374C183.666 33.0666 184.522 33.4312 185.519 33.4312H193.711V14.9703H198.421V33.4089C198.421 34.7036 197.96 35.8123 197.037 36.735C196.115 37.6428 194.991 38.0966 193.667 38.0966H185.519C183.986 38.0966 182.587 37.7246 181.322 36.9805C180.057 36.2215 179.045 35.2096 178.286 33.9446C177.542 32.6797 177.17 31.2808 177.17 29.748V14.9703Z" fill="#D0CCD6" />
        <path d="M138.82 19.6804C138.82 18.3857 139.281 17.277 140.204 16.3543C141.126 15.4317 142.243 14.9703 143.552 14.9703H150.606C152.511 14.9703 154.074 15.5656 155.294 16.7562C156.484 15.5656 158.047 14.9703 159.982 14.9703H163.464C164.997 14.9703 166.396 15.3498 167.661 16.1088C168.926 16.8529 169.93 17.8574 170.674 19.1224C171.433 20.3724 171.813 21.7639 171.813 23.2967V38.0966H167.125V23.3637C167.125 22.3368 166.768 21.4662 166.053 20.7519C165.339 20.0227 164.476 19.6581 163.464 19.6581H159.982C159.327 19.6581 158.769 19.8664 158.307 20.2831C157.846 20.6849 157.615 21.176 157.615 21.7564V38.0966H152.905V21.7564C152.905 21.176 152.682 20.6849 152.236 20.2831C151.789 19.8664 151.246 19.6581 150.606 19.6581H143.53V38.0966H138.82V19.6804Z" fill="#D0CCD6" />
        <path d="M112.211 23.2744C112.211 21.7416 112.583 20.3501 113.327 19.1C114.086 17.85 115.098 16.8529 116.363 16.1088C117.628 15.3498 119.027 14.9703 120.56 14.9703H133.462V38.0966H128.752V19.6804H120.56C119.563 19.6804 118.707 20.0376 117.993 20.7519C117.278 21.4514 116.921 22.3071 116.921 23.319V29.7033C116.921 30.7153 117.278 31.5859 117.993 32.3151C118.707 33.0294 119.563 33.3866 120.56 33.3866H126.073V38.0966H120.56C119.027 38.0966 117.628 37.7246 116.363 36.9805C115.098 36.2215 114.086 35.2096 113.327 33.9446C112.583 32.6797 112.211 31.2808 112.211 29.748V23.2744Z" fill="#D0CCD6" />
        <path d="M81.1825 14.0328C81.1825 12.619 81.5322 11.3317 82.2317 10.1709C82.946 9.01016 83.8984 8.08749 85.089 7.40293C86.2944 6.70348 87.6189 6.35376 89.0624 6.35376H105.492V11.0415H89.0624C88.1993 11.0415 87.4552 11.3466 86.8301 11.9568C86.2051 12.5669 85.8926 13.3036 85.8926 14.1667V16.3543C85.8926 17.1431 86.2051 17.8202 86.8301 18.3857C87.4552 18.9512 88.1993 19.234 89.0624 19.234H99.1746C100.633 19.234 101.957 19.5837 103.148 20.2831C104.339 20.9677 105.284 21.8978 105.983 23.0735C106.697 24.2342 107.054 25.5215 107.054 26.9353V30.3953C107.054 31.8091 106.697 33.1038 105.983 34.2794C105.284 35.4402 104.339 36.3703 103.148 37.0698C101.957 37.7543 100.633 38.0966 99.1746 38.0966H81.2048V33.3865H99.1746C100.053 33.3865 100.797 33.0963 101.407 32.516C102.032 31.9207 102.344 31.2064 102.344 30.373V26.9576C102.344 26.1242 102.032 25.4099 101.407 24.8146C100.797 24.2194 100.053 23.9217 99.1746 23.9217H89.0624C87.6189 23.9217 86.2944 23.5869 85.089 22.9172C83.8984 22.2326 82.946 21.3174 82.2317 20.1715C81.5322 19.0256 81.1825 17.7607 81.1825 16.3766V14.0328Z" fill="#D0CCD6" />
        <path d="M191.736 51.3091H193.062L196.06 56.7175V51.3091H197.081V58.1943H195.755L192.757 52.8585V58.1943H191.736V51.3091Z" fill="#D0CCD6" />
        <path d="M168.888 53.2459C168.888 52.8876 168.98 52.5631 169.164 52.2726C169.351 51.9789 169.599 51.7449 169.909 51.5705C170.219 51.3962 170.563 51.3091 170.941 51.3091H174.199V52.3259H170.941C170.656 52.3259 170.413 52.4163 170.209 52.597C170.009 52.7746 169.909 52.9892 169.909 53.241V56.2624C169.909 56.5142 170.009 56.7304 170.209 56.9112C170.413 57.0887 170.656 57.1775 170.941 57.1775H172.553C172.84 57.1775 173.084 57.0887 173.284 56.9112C173.484 56.7304 173.584 56.5142 173.584 56.2624V55.3618H171.715V54.345H174.606V56.2575C174.606 56.6126 174.514 56.937 174.33 57.2308C174.146 57.5245 173.897 57.7585 173.584 57.9328C173.274 58.1072 172.931 58.1943 172.553 58.1943H170.941C170.563 58.1943 170.219 58.1072 169.909 57.9328C169.599 57.7585 169.351 57.5245 169.164 57.2308C168.98 56.937 168.888 56.6126 168.888 56.2575V53.2459Z" fill="#D0CCD6" />
        <path d="M150.736 51.3091H151.758V58.1943H150.736V51.3091Z" fill="#D0CCD6" />
        <path d="M127.995 52.9747C127.995 52.6681 128.07 52.3888 128.222 52.1371C128.377 51.8853 128.584 51.6851 128.842 51.5367C129.103 51.3849 129.391 51.3091 129.704 51.3091H133.267V52.3259H129.704C129.516 52.3259 129.355 52.3921 129.22 52.5244C129.084 52.6568 129.016 52.8165 129.016 53.0038V53.4783C129.016 53.6493 129.084 53.7962 129.22 53.9189C129.355 54.0415 129.516 54.1029 129.704 54.1029H131.897C132.213 54.1029 132.501 54.1787 132.759 54.3304C133.017 54.4789 133.222 54.6807 133.374 54.9357C133.529 55.1875 133.606 55.4667 133.606 55.7733V56.5238C133.606 56.8305 133.529 57.1113 133.374 57.3663C133.222 57.6181 133.017 57.8199 132.759 57.9716C132.501 58.1201 132.213 58.1943 131.897 58.1943H127.999V57.1727H131.897C132.088 57.1727 132.249 57.1097 132.381 56.9838C132.517 56.8547 132.585 56.6998 132.585 56.519V55.7782C132.585 55.5974 132.517 55.4425 132.381 55.3134C132.249 55.1842 132.088 55.1197 131.897 55.1197H129.704C129.391 55.1197 129.103 55.0471 128.842 54.9018C128.584 54.7533 128.377 54.5548 128.222 54.3062C128.07 54.0577 127.995 53.7833 127.995 53.4831V52.9747Z" fill="#D0CCD6" />
        <path d="M105.621 51.3091H110.962V52.3259H106.643V57.1727H110.962V58.1943H105.621V51.3091ZM107.224 54.1029H110.962V55.1197H107.224V54.1029Z" fill="#D0CCD6" />
        <path d="M82.889 51.3091H86.5495C86.9078 51.3091 87.2339 51.3962 87.5276 51.5705C87.8246 51.7449 88.0602 51.9789 88.2345 52.2726C88.4088 52.5631 88.496 52.8876 88.496 53.2459V56.2769C88.496 56.6288 88.4088 56.9499 88.2345 57.2404C88.0602 57.531 87.8246 57.7634 87.5276 57.9377C87.2339 58.1088 86.9078 58.1943 86.5495 58.1943H82.889V51.3091ZM86.5495 57.1727C86.8078 57.1727 87.0273 57.0839 87.208 56.9064C87.3888 56.7288 87.4792 56.5142 87.4792 56.2624V53.2459C87.4792 52.9908 87.3888 52.7746 87.208 52.597C87.0273 52.4163 86.8078 52.3259 86.5495 52.3259H83.9107V57.1727H86.5495Z" fill="#D0CCD6" />
        <path d="M17.1185 33.5748C15.4469 38.3204 15.3818 43.4457 16.7502 48.3019C17.0165 49.2425 15.8322 49.9026 15.1664 49.1887C11.8317 45.6245 9.58215 41.0261 8.95318 35.9292C8.83418 34.9659 8.77185 33.9856 8.77185 32.9911C8.77185 30.2882 9.228 27.6873 10.061 25.2649C10.1743 24.9334 10.4576 24.6898 10.8033 24.6388C14.0388 24.143 17.6965 23.7548 21.6545 23.5027C22.5045 23.4488 22.9776 24.466 22.3883 25.0836C20.3569 27.2029 18.3793 29.9964 17.1185 33.5776V33.5748Z" fill="url(#paint0_linear_4_2)" />
        <path d="M64.0027 31.4669C63.997 31.2459 63.9913 31.0249 63.98 30.8067V30.7841C63.9743 30.6764 63.9687 30.5687 63.963 30.4611C63.9545 30.3279 63.946 30.1919 63.9375 30.0587C63.929 29.9398 63.9205 29.8208 63.9092 29.7018C63.895 29.5176 63.878 29.3363 63.861 29.1549C63.8553 29.0954 63.8497 29.036 63.844 28.9793C63.8242 28.7951 63.8043 28.611 63.7817 28.4268C63.7788 28.4126 63.7788 28.4013 63.776 28.39C63.7618 28.2795 63.7477 28.1718 63.7335 28.0613C63.7052 27.8517 63.6768 27.6448 63.6457 27.438C63.606 27.1915 63.5663 26.945 63.521 26.6985C63.4813 26.4747 63.4388 26.2509 63.3935 26.0271C63.3793 25.9534 63.3623 25.8797 63.3482 25.8089C63.3057 25.5964 63.2575 25.3839 63.2094 25.1743C63.2037 25.1488 63.198 25.1233 63.1924 25.0978C63.147 24.9079 63.1017 24.721 63.0535 24.534C63.028 24.4291 63.0025 24.3271 62.9742 24.2223C62.9317 24.058 62.8864 23.8908 62.8382 23.7265C62.8099 23.6217 62.7787 23.5168 62.7475 23.412C62.7249 23.3355 62.7022 23.259 62.6795 23.1797C62.62 22.9842 62.5605 22.7887 62.4954 22.596C62.4614 22.4827 62.4246 22.3694 62.3849 22.2589C62.3509 22.1512 62.3141 22.0436 62.2744 21.9359C62.1866 21.6781 62.0931 21.4231 61.9967 21.1681C61.7644 20.5504 61.5123 19.9413 61.2431 19.3407C61.1779 19.2018 61.1156 19.0602 61.0476 18.9213C60.8521 18.502 60.6481 18.0855 60.4328 17.6776C60.4328 17.6747 60.43 17.6747 60.43 17.6719C57.0868 11.2858 51.6158 6.18885 44.9634 3.32162C44.7254 3.21963 44.4846 3.11763 44.2409 3.0213C44.0001 2.92214 43.7564 2.82864 43.51 2.73515C43.3003 2.65582 43.085 2.57932 42.8725 2.50566C42.8215 2.48866 42.7705 2.46882 42.7195 2.45183C42.49 2.3725 42.2577 2.296 42.0225 2.22233C41.776 2.143 41.5239 2.06651 41.2745 1.99568C41.2717 1.99284 41.2689 1.99284 41.266 1.99284C41.0621 1.93335 40.8581 1.87668 40.6512 1.82002C40.5917 1.80302 40.5294 1.78885 40.4699 1.77185C40.2263 1.70952 39.9798 1.64719 39.7333 1.59053C39.4754 1.5282 39.2148 1.47153 38.9541 1.4177C38.6935 1.36387 38.43 1.31287 38.1665 1.26471C37.9087 1.21654 37.648 1.17121 37.3845 1.13154C37.3845 1.12871 37.376 1.12871 37.3704 1.12871C37.1069 1.08905 36.8406 1.04938 36.5742 1.01538C35.7724 0.910553 34.9593 0.836889 34.1377 0.79439C33.9308 0.783058 33.724 0.774558 33.5172 0.771725C33.1744 0.757559 32.8315 0.751892 32.4859 0.751892C28.406 0.751892 24.5047 1.52819 20.9263 2.93914C20.4475 3.12897 19.9772 3.32729 19.5097 3.53695C18.8128 3.85427 18.1271 4.19426 17.4585 4.55691C17.0108 4.80057 16.5717 5.05556 16.1382 5.31621C14.4043 6.37017 12.7808 7.58562 11.2877 8.94274C10.9137 9.28272 10.5482 9.63121 10.1913 9.9882C4.48232 15.6943 0.954956 23.5763 0.954956 32.28C0.954956 34.4531 1.17595 36.578 1.59526 38.6264C1.6491 38.8842 1.70293 39.1392 1.76242 39.3942V39.3999C1.88142 39.9042 2.00891 40.4057 2.15058 40.9043C2.15058 40.9043 2.15341 40.9072 2.15058 40.91C4.70331 49.8771 11.1291 57.2237 19.5012 61.0174C19.5041 61.0174 19.5069 61.0202 19.5097 61.023C19.9715 61.2299 20.4419 61.4282 20.915 61.6152C21.4647 61.8333 22.0228 62.0345 22.5894 62.2215C23.0031 62.3603 23.4196 62.4878 23.8417 62.6068C24.2865 62.7343 24.737 62.8533 25.1903 62.9581C26.7628 63.3321 28.3834 63.5871 30.0408 63.7146C30.5026 63.7514 30.9644 63.7769 31.4319 63.7883C31.7747 63.8024 32.1176 63.8081 32.4632 63.8081C39.2743 63.8138 45.581 61.6577 50.7375 57.9915C51.1483 57.6968 51.5535 57.3937 51.9501 57.0849C52.1485 56.929 52.3439 56.7704 52.5394 56.6089C52.9276 56.2887 53.3101 55.9572 53.6841 55.6172C54.0552 55.2773 54.4207 54.9316 54.7777 54.5746C55.3132 54.0391 55.8288 53.4838 56.3246 52.9144C56.5824 52.6169 56.8346 52.3137 57.0754 52.0077C57.3078 51.7244 57.5316 51.4354 57.7497 51.1436C58.0529 50.7384 58.3447 50.3276 58.628 49.9083C58.9114 49.489 59.1862 49.0612 59.4497 48.6277C62.3452 43.8622 64.014 38.2666 64.014 32.28C64.014 32.008 64.0112 31.736 64.0027 31.4669ZM19.6599 6.67333C21.9378 6.67333 23.7851 8.52059 23.7851 10.8013C23.7851 13.0821 21.9378 14.9293 19.6599 14.9293C17.382 14.9293 15.5319 13.0821 15.5319 10.8013C15.5319 8.52059 17.382 6.67333 19.6599 6.67333ZM13.4693 13.5156C14.6083 13.5156 15.5319 14.4392 15.5319 15.581C15.5319 16.7228 14.6083 17.6436 13.4693 17.6436C12.3303 17.6436 11.4039 16.7199 11.4039 15.581C11.4039 14.442 12.3303 13.5156 13.4693 13.5156ZM58.4269 35.5155C56.8346 48.4294 45.8275 58.4221 32.4859 58.4221C19.1442 58.4221 8.13717 48.4294 6.54207 35.5184C6.40891 34.4587 6.34375 33.3764 6.34375 32.28C6.34375 29.2711 6.85089 26.3784 7.78869 23.6868C7.90202 23.3638 8.18534 23.1315 8.52249 23.0805C15.1806 22.0549 23.4819 21.4457 32.4859 21.4457C41.4899 21.4457 49.794 22.0549 56.4465 23.0805C56.7836 23.1315 57.0698 23.3638 57.1803 23.6868C58.1181 26.3784 58.6252 29.2711 58.6252 32.28C58.6252 33.3764 58.56 34.4559 58.4269 35.5155Z" fill="url(#paint1_linear_4_2)" />
        <path opacity="0.15" d="M52.385 12.5387C52.9546 11.5522 50.526 9.08375 46.9607 7.02533C43.3955 4.96691 40.0435 4.09796 39.4739 5.08448C38.9044 6.071 41.3329 8.53941 44.8982 10.5978C48.4635 12.6563 51.8154 13.5252 52.385 12.5387Z" fill="white" />
        <path opacity="0.15" d="M54.1091 15.3033C54.688 15.3033 55.1574 14.834 55.1574 14.255C55.1574 13.6761 54.688 13.2067 54.1091 13.2067C53.5301 13.2067 53.0608 13.6761 53.0608 14.255C53.0608 14.834 53.5301 15.3033 54.1091 15.3033Z" fill="white" />
    </g>
    <defs>
        <linearGradient id="paint0_linear_4_2" x1="8.21654" y1="42.2416" x2="24.5302" y2="25.9279" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4302DE" />
            <stop offset="1" stop-color="#8B02DE" />
        </linearGradient>
        <linearGradient id="paint1_linear_4_2" x1="10.1941" y1="54.5718" x2="54.7777" y2="9.9882" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4302DE" />
            <stop offset="0.54" stop-color="#8B02DE" />
            <stop offset="1" stop-color="#F67106" />
        </linearGradient>
        <clipPath id="clip0_4_2">
            <rect width="200" height="63.0562" fill="white" transform="translate(0.954956 0.751892)" />
        </clipPath>
    </defs>
</svg>

const Github = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>

const Linkedin = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>

const Behance = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-behance"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" /><path d="M3 12l4.5 0" /><path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" /><path d="M16 6l3 0" /></svg>