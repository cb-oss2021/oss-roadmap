import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}
				
				h2 {
					margin: var(--spacing-xl) 0 var(--spacing-m);
				}
				
				h3 {
					margin: var(--spacing-m) 0 var(--spacing-s);
				}
				
				p {
					margin: 0 0 var(--spacing-m);
				}
				
				a {
					color: var(--link);
				}
				
				#close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--spacing-l);
					cursor: pointer;
					font-size: 1.5rem;
				}
				
				#version {
					position: absolute;
					right: var(--spacing-m);
					bottom: var(--spacing-m);
					color: var(--shade-500);
				}
				
			</style>
			
			<div tabindex="0"></div>
			<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>
			
			<h2>Computer Science RoadMap FAQ</h2>

			<h3>프론트엔드(FrontEnd)란 무엇인가?</h3>
			<p>프론트엔드 웹 개발 은 HTML , CSS 및 JavaScript를 사용하여 웹 사이트 의 그래픽 사용자 인터페이스 를 개발하여 사용자 가 해당 웹 사이트를 보고 상호 작용할 수 있도록 하는 것입니다.</p>

			<h3>프론트엔드 개발에 사용되는 Tools</h3>
			<ul>
				<li><strong>HTML(하이퍼텍스트 마크업 언어)</strong></li>
					<p>HTML( Hyper Text Markup Language )은 웹 페이지가 존재하지 않는 웹 사이트 개발 프로세스의 중추입니다. 마크업 언어는 텍스트가 이미지, 표, 링크 및 기타 표현으로 바뀔 수 있음을 나타냅니다. 사이트가 어떻게 보일지에 대한 전반적인 프레임워크를 제공하는 것은 HTML 코드입니다.</p>
				<li><strong>CSS(Cascading Style Sheet)</strong></li>
					<p>CSS ( Cascading Style Sheets )는 사이트의 프레젠테이션 측면을 제어하고 사이트가 고유한 모양을 갖도록 합니다. 다른 스타일 규칙 위에 위치하고 장치 화면 크기 및 해상도와 같은 다른 입력을 기반으로 트리거되는 스타일 시트를 유지함으로써 이를 수행합니다.</p>
				<li><strong>JavaScript</strong></li>
					<p>JavaScript 는 정적 HTML 페이지를 동적 인터페이스로 변환하는 데 사용되는 이벤트 기반 명령형 프로그래밍 언어(HTML의 선언적 언어 모델 과 반대 )입니다. JavaScript 코드는 HTML 표준에서 제공하는 DOM( Document Object Model)을 사용하여 사용자 입력과 같은 이벤트에 대한 응답으로 웹 페이지를 조작할 수 있습니다.
					AJAX 라는 기술을 사용하여 JavaScript 코드는 웹에서 콘텐츠를 능동적으로 검색할 수 있으며(원래 HTML 페이지 검색과 무관), 서버 측 이벤트에도 반응하여 웹 페이지 경험에 진정한 동적 특성을 추가할 수 있습니다.
					</p>
				<li><strong>WebAssembly</strong></li>
					<p>모든 주요 브라우저(예: Google, Apple, Mozilla 및 Microsoft의 주요 공급업체)에서 지원하는 WebAssembly 는 웹 브라우저에서 코드를 실행하기 위한 JavaScript의 유일한 대안입니다. 일반적으로 프로그래머는 WebAssembly(또는 asm.js)에서 직접 프로그래밍하지 않지만 Rust, C 또는 C++와 같은 언어를 사용하거나 이론적으로 컴파일되는 모든 언어를 사용합니다</p>
			</ul>
			
			<h3>백엔드(BackEnd)란 무엇인가?</h3>
			<p>백엔드 개발자는 웹 사이트의 사용자 대면 측면이 처음부터 존재할 수 있도록 하는 구성 요소를 강화하는 기술을 구축하고 유지 관리합니다.</p>

			<h3>백엔드 개발에 사용되는 Tools</h3>
			<ul>
				<li><strong>PHP</strong></li>
					<p>PHP(Hypertext Preprocessor)는 동적 웹 페이지를 만들기 위해 설계되었으며 이를 구현하기 위해 PHP로 작성된 코드를 HTML 소스 문서 안에 넣으면 PHP 처리 기능이 있는 웹 서버에서 해당 코드를 인식하여 작성자가 원하는 웹 페이지를 생성합니다. 또한 PHP는 명령 줄 인터페이스 방식의 자체 인터프리터를 제공하여 이를 통해 범용 프로그래밍 언어로도 사용할 수 있으며 그래픽 애플리케이션을 제작할 수도 있습니다.</p>
				<li><strong>Node.js</strong></li>
					<p>Node.js는 확장성 있는 네트워크 애플리케이션(특히 서버 사이드) 개발에 사용되는 소프트웨어 플랫폼입니다. 작성 언어로 JavaScript를 활용하며 논블로킹(Non-blocking) I/O와 단일 스레드 이벤트 루프를 통한 높은 처리 성능을 가지고 있습니다.
					내장 HTTP 서버 라이브러리를 포함하고 있어 웹 서버에서 아파치 등의 별도의 소프트웨어 없이 동작하는 것이 가능하며 이를 통해 웹 서버의 동작에 있어 더 많은 통제를 가능케 합니다.
					</p>
				<li><strong>MYSQL</strong></li>
					<p>MySQL은 세계에서 가장 많이 쓰이는 오픈 소스의 관계형 데이터베이스 관리 시스템(RDBMS)입니다. 다중 스레드, 다중 사용자 형식의 구조질의어 형식의 데이터베이스 관리 시스템으로서 오라클이 관리 및 지원하고 있습니다. MySQL은 데이터베이스를 관리하거나 자료를 관리하기 위한 GUI 관리툴은 내장되어 있지 않기 때문에 이용자들은 명령 줄 인터페이스 도구들을 이용하거나 또는 데이터베이스를 만들고, 관리하고, 데이터를 백업하는데, 상태를 검사하고, 데이터베이스 구조를 생성하는데, 또는 데이터 레코더를 작성하는데 있어서 MySQL 프론트엔드 데스크톱 소프트웨어나 웹 애플리케이션을 사용해야 합니다.</p>
			</ul>
			<h3>풀스택(Full Stack)이란 무엇인가?</h3>
			<p>풀스택 개발자는 클라이언트 측(프론트엔드)과 서버 측(백엔드) 모두에서 렌더링되는 사이트와 웹 애플리케이션을 만들 수 있습니다. 또한 비즈니스 로직을 캡슐화하고 특정 비즈니스 문제를 해결하며 데이터베이스, 파일 서버, 클라우드 서비스 등과 같은 인프라에 액세스하는 서비스, 구성 요소 및 API를 만듭니다. 그들은 전체 스택과 함께 작동하며 두 세계 모두에서 최고입니다.</p>



			
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}