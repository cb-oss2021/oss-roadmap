export const javascriptCollection = {
	name: "java script",

	areas: [
		{	name : "syntax",
			skills: [
				{
					name: "syntax",
					description: {
					text: '자바스크립트의 기본 문법에 대하여 배워봅시다.',
					links: [
						['생활코딩 - 자바스크립트 입문', 'https://www.youtube.com/watch?v=PZIPsKgWJiw&list=PLuHgQVnccGMA4uSig3hCjl7wTDeyIeZVU'],
						]
					},
						skills: [
								{
								name: "웹에서의 역할",
								description: {
								text: '자바스크립트로 웹의 동작을 구현 할 수 있습니다. ',
								links: [
									['TCP school-자바스크립트 개요','http://tcpschool.com/javascript/intro']
									]
								}
								},
								{
								name: "기초 학습",
								description: {
								text: '자바스크립트의 기초 문법에 대하여 배워봅시다.',
								links: [
									['코딩 앙마 - 자바스크립트 기초', 'https://www.youtube.com/watch?v=KF6t61yuPCY&t=200s'],
									]
								},
								
								skills: [
									{	
										name: "템플릿 리터럴",
										description: {
										text: '템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. 여러 줄로 이뤄진 문자열과 문자 보간기능을 사용할 수 있습니다.',
										links: [
											['MDN - Template literals', 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals'],
											]
										},
									},
									{	
										name: "객체",
										description: {
										text: '객체는 관련된 데이터와 함수의 집합입니다. ',
										links: [
											['MDN - 객체 기본', 'https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics'],
											]
										},
									},
									{	
										name: "전개 구문",
										description: {
										text: '배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 (함수로 호출할 경우) 또는 요소 (배열 리터럴의 경우)로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있습니다.',
										links: [
											['MDN - 전개구문', 'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax'],
											]
										},
									}
									]
							},
								{
									name: "심화 학습",
									description: {
									text: '자바스크립트의 심화 문법에 대하여 배워봅시다.',
									links: [
										['코딩 앙마 - 자바스크립트 중급', 'https://www.youtube.com/watch?v=4_WLS9Lj6n4&t=2310s'],
										]
									},
									
							}
						]			
				}
			]
		},
		{
			name: "DOM",
			skills :[		
				{
					name: "DOM",
					description: {
					text: "DOM이란 무엇일까요?",
					links: [
							["생활코딩 - dom이란", "https://www.youtube.com/watch?v=lW_gaUJjpWI"],
							["TCP school - dom의 개념", "http://tcpschool.com/javascript/js_dom_concept"],
						]
					},
					skills: [
						{
							name: "DOM interface",
							description: {
								text: "개발자 언어(java, javascript)와 DOM 의 의사소통을 담당하는 중간 매개체입니다.",
								links: [
									["TCP - DOM 인터페이스", "https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model"],
									
								]
							}

						},
							
						{
							
							name: "DOM의 종류",
							description: {
								text: "3가지 DOM의 종류에 대해 알아봅니다.",
								links: [
									
									
								]
							},
							
								skills: [
									{
										name: "core DOM",
										description: {
											text: "모든 문서 타입을 위한 DOM 모델입니다.",
											
										},
									},
									{
											name: "html DOM",
											description: {
												text: "HTML 문서를 위한 DOM 모델입니다.",
											
										},
									},
										{
											name: "XML DOM",
											description: {
												text: "XML 문서를 위한 DOM 모델입니다.",
													
											},
										}
									]
						
						},
						{
							name: "DOM의 기본",
							description: {
								text: "DOM의 기본을 파악합니다.",
								links: [
									["DOM의 기본", "https://danbi-s-rain.gitbook.io/blog/coding/javascript/html-xml-dom/dom"],
					
									
								]
							},
						},
					

					]
						
					
				}
					
			]
		},
		
		{
			name: "es6",
			skills:[ 
				{		
						name: "es6",
					description: {
					text: 'ES6의 개념과 기본 문법을 배워봅시다',
					links: [
						['우아한 형제들 - 신선함으로 다가온 ES6 경험', 'https://techblog.woowahan.com/2554/'],
						['Rabbil Hasan - es6 tutorial', 'https://www.youtube.com/watch?v=86tXMkWEVj8&list=PLkyGuIcLcmx2Fw5adzhL7q9fJ0PQoU3i7'],
						]
					},
					skills:
					[
						{
							name: "es6의 특징",
							description: {
								text: "es6의 주요 특징을 알아봅니다.",
								links: [
									["es6의 주요 특징", "https://bctr.tistory.com/4"],
									
								]
							},
							skills: [
								{
									name: "TS와의 차이",
									description: {
										text: "Type script와의 차이점을 알아봅니다.",
										links: [
											["gitbook - TS vs ES6", "https://yamoo9.gitbook.io/typescript/ts-vs-es6"],
											
										]
									},
								},
								{
									name: "cloud script",
									description: {
										text: "cloud script 작성법을 알아봅시다.",
										links: [
											["MS - 사용자 지정 CloudScript 작성", "https://docs.microsoft.com/ko-kr/gaming/playfab/features/automation/cloudscript/writing-custom-cloudscript"],
											
										]
									},
								}
								]
							
						}
					]
				}		
			]		
		},
		{
			name: "api",
			skills : [
				{
					name: "api",
					description: {
					text: 'API의 개념과 활용에 대해 알아봅시다',
					links: [
							['shutter stock- 기업은 왜 API를 신경쓸까?', 'https://www.shutterstock.com/ko/blog/what-is-an-api/'],
							['조코딩 - API의 기능과 활용', 'https://www.youtube.com/watch?v=QPEUU89AOg8'],
					]
					},
					skills: [
						{
							name: "자료형",
							description: {
								text: "Lit-element 에 대해 배워봅니다.",
								links: [
									["MS - Object Data Types", "https://docs.microsoft.com/ko-kr/rest/api/automation/object-data-types"],
							
								]
							},
							skills: [
								{
									name: "자료형의 의미",
									description: {
										text: "자료형의 의미를 알아봅니다.",
										links: [
											["구름 edu - 자료형이란?", "https://edu.goorm.io/learn/lecture/201/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-c%EC%96%B8%EC%96%B4-%EA%B8%B0%EC%B4%88/lesson/5973/%EC%9E%90%EB%A3%8C%ED%98%95%EC%9D%B4%EB%9E%80"],
										]
									},
								
							
									skills: [
										{
											name: "HINSTANCE",
											description: {
												text: "HINSTANCE 자료형은 'H(Handle) + Instance'로 구성된 이름이고 'Instance Handle'을 저장할 때 사용합니다.",
												links: [
													["MS - WinMain: 애플리케이션 진입점", "https://docs.microsoft.com/ko-kr/windows/win32/learnwin32/winmain--the-application-entry-point"],
												]
											}
										},
										{
											name: "instance",
											description: {
												text: "instanceof 연산자는 object의 프로토타입 체인에 constructor.prototype이 존재하는지 판별합니다.",
												links: [
													["velog - JS 인스턴스(instance)", "https://velog.io/@code-bebop/JS-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4instance"],
												]
											}
										},
										{
											name: "WCHAR",
											description: {
												text: "자료형의 한 종류인 whcar에 대해 알아봅니다.",
												links: [
													["npm - ref-wchar", "https://www.npmjs.com/package/ref-wchar"],
												]
											}
										}
									]
								}
							]
						},
						
					]
				},
				
			]
		},
		{
			name: "ajax",
			skills : [
				{
					name: "ajax",
					description: {
					text: '비동기식 웹 어플리케이션의 기초인 ajax에 대해 알아봅시다.',
					links: [
							['shutter stock- 기업은 왜 API를 신경쓸까?', 'https://www.shutterstock.com/ko/blog/what-is-an-api/'],
							['조코딩 - API의 기능과 활용', 'https://www.youtube.com/watch?v=QPEUU89AOg8'],
					]
					},
					skills: [
						{
							name: "webRTC",
							description: {
								text: "웹 애플리케이션과 사이트가 중간자 없이 브라우저 간에 오디오나 영상 미디어를 포착하고 마음대로 스트림할 뿐 아니라, 임의의 데이터도 교환할 수 있도록 하는 기술입니다.",
								links: [
									["MDN- WebRTC API", "https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API"],
								]
							},
								skills: [
									{
										name: "stun nat turn",
										description: {
											text: "webRTC 프로토콜에 대해 알아봅니다.",
											links: [
												["MDN - WebRTC 프로토콜 소개", "https://developer.mozilla.org/ko/docs/Web/API/WebRTC_API/Protocols"],
											]
										},
									}
								]
							},	
							
						
					
						{	
							name: "tech",
							description: {
								text: "ajax의 여러 기술들에 대해 알아봅니다.",
								links: [
									["velog - Lit-html 어떠세요?", "https://velog.io/@jerrynim_/Lit-html-1-%EC%86%8C%EA%B0%9C"],
									
									]
								},
								
							 
								skills: [
										{
										name: "polling",
										description: {
											text: "폴링(polling)이란 하나의 장치(또는 프로그램)가 충돌 회피 또는 동기화 처리 등을 목적으로 다른 장치(또는 프로그램)의 상태를 주기적으로 검사하여 일정한 조건을 만족할 때 송수신 등의 자료처리를 하는 방식을 말합니다. ",
											links: [
												["ktword - polling", "http://www.ktword.co.kr/test/view/view.php?m_temp1=618"],
											]
										
										}
										},
										{
											name: "long polling",
											description: {
												text: "polling 방식의 단점을 보완한 long polling 에 대해 알아봅니다.",
												links: [
													["js.info - long polling", "https://ko.javascript.info/long-polling"],
												]
											},
										}
								 
								]
							},
							{
								name: "ajax 예제",
							description: {
								text: "실제로 실습을 해보며 개념을 익혀봅니다.",
								links: [
									["생활코딩 - Ajax", "https://www.youtube.com/watch?v=U_ICTI-1DBc"],
									
									]

							}	
						}	
						]	
					},
				]
			}
	]
}
