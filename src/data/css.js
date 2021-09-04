export const cssCollection = {
	name: "css",
	areas: [
		{	name: "basic",
			skills: [
				{
					name: "세팅",
					description: {
						text: "CSS의 기본 세팅에 대하여 배웁니다.",
						links: [
							["초기 세탕", "https://lit-element.polymer-project.org/"],
							]
					},
					skills: [
						{
							name: "파일 세팅",
							description: {
								text: "CSS의 파일 세팅에 대하여 배웁니다.",
								links: [
									["파일 세팅", "https://pbj0812.tistory.com/229"],
								]
							}
						}
					]
				},				
				{
					name: "basic",
					description: {
						text: "CSS의 기본 문법과 활용에 대하여 배웁니다.",
						links: [
							["lit-element", "https://lit-element.polymer-project.org/"],
							["Google Devs - Lightning-fast templates", "https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html"],
							["Vaadin - Creating a LitElement project", "https://vaadin.com/tutorials/lit-element/starting-a-lit-element-project"],
							["dev.to - Web Components: from zero to hero, part three", "https://dev.to/thepassle/web-components-from-zero-to-hero-part-three-3c5h"],
						]
					},
					skills: [
						{
							name: "정의",
							description: {
								text: "css의 정의와 개요에 대하여 알아봅니다.",
								links: [
									["CSS 프로그래밍 기초", "https://dinfree.com/lecture/frontend/122_css_1.html"],
									]
							}
						},
						{
							name: "링크",
							description: {
								text: "CSS의 태그를 이용하여 링크를 꾸며봅시다.",
								links: [
									["코딩 팩토리 - 링크 꾸미기", "https://www.codingfactory.net/10470"],
									]
							}
						},
						{
							name: "문법",
							description: {
								text: "CSS의 문법에 대하여 배워봅니다.",
								links: [
									["TCP school- css문법", "http://tcpschool.com/css/css_intro_syntax"],
									]
							}
						},
						{
							name: "우선 순위",
							description: {
								text: "css에서 어떤 속성이 우선시 되는 지 배웁니다.",
								links: [
									["ofcourse - 적용 우선순위", "https://ofcourse.kr/css-course/%EC%A0%81%EC%9A%A9-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84"],
								]
							}
						}
					]
				},
			]
		},
			
				{	
					name: "layout",
					skills: [
					{
					name: "보통흐름",
					description: {
						text: "보통 흐름(normal flow)은 당신이 페이지 레이아웃을 전혀 제어하지 않을 경우 브라우저가 기본값으로 HTML 페이지를 배치하는 방법을 말합니다.",
						links: [
							["Vue", "https://vuejs.org/"],
							["Vue - CLI", "https://cli.vuejs.org/"],
							["Getting Started with Vue", "https://www.taniarascia.com/getting-started-with-vue/"],
						]
					},
					skills: [
							{
							
							name: "디스플레이 속성",
							description: {
								text: "display 속성은 요소를 어떻게 보여줄지를 결정합니다.",
								links: [
									["ofcourse - display 속성","https://ofcourse.kr/css-course/display-%EC%86%8D%EC%84%B1"]
									]
							},
						
						
							skills:[
							{
							name: "floats",
							description: {
								text: "float 은 한 요소(element)가 보통 흐름(normal flow)으로부터 빠져 텍스트 및 인라인(inline) 요소가 그 주위를 감싸는 자기 컨테이너의 좌우측을 따라 배치되어야 함을 지정합니다.",
								links: [
									["mdn - float", "https://developer.mozilla.org/ko/docs/Web/CSS/float"],
									["Google Devs - Lightning-fast templates", "https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html"],
									["Vaadin - Creating a LitElement project", "https://vaadin.com/tutorials/lit-element/starting-a-lit-element-project"],
									["dev.to - Web Components: from zero to hero, part three", "https://dev.to/thepassle/web-components-from-zero-to-hero-part-three-3c5h"],
								]
							},
						},
						{
							name: "포지션 속성",
							description: {
								text: "position 속성은 태그를 어떻게 위치시킬지를 정의합니다.",
								links: [
									["ofcourse - 포지션 속성", "https://ofcourse.kr/css-course/position-%EC%86%8D%EC%84%B1"],
									["MDN - position", "https://developer.mozilla.org/ko/docs/Web/CSS/position"],
								]
							},
							skills:[
								{
									name: "상대 포지셔닝",
									description: {
										text: "top (en-US), bottom (en-US)와 left (en-US), and right (en-US)는 position과 나란히 사용되어 기준 위치에 비례해 정확한 위치잡기를 지정합니다.",
										links: [
											]
									},
								},
								{
									name: "절대 포지셔닝",
									description: {
										text: "요소를 일반적인 문서 흐름에서 제거하고, 페이지 레이아웃에 공간도 배정하지 않습니다.",
										links: [
											["lit-element", "https://lit-element.polymer-project.org/"],
											["Google Devs - Lightning-fast templates", "https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html"],
											["Vaadin - Creating a LitElement project", "https://vaadin.com/tutorials/lit-element/starting-a-lit-element-project"],
											["dev.to - Web Components: from zero to hero, part three", "https://dev.to/thepassle/web-components-from-zero-to-hero-part-three-3c5h"],
										]
									},
								},
								{
									name: "고정 포지셔닝",
									description: {
										text: "브라우저 뷰 포트 자체를 기준으로 비례해 요소를 고정합니다.",
										links: [
											["lit-element", "https://lit-element.polymer-project.org/"],
											["Google Devs - Lightning-fast templates", "https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html"],
											["Vaadin - Creating a LitElement project", "https://vaadin.com/tutorials/lit-element/starting-a-lit-element-project"],
											["dev.to - Web Components: from zero to hero, part three", "https://dev.to/thepassle/web-components-from-zero-to-hero-part-three-3c5h"],
										]
									},
								},


							]
						},
						{
							name: "테이블 레이아웃",
							description: {
								text: "셀안의 데이터가 길어서 지정한 너비 이상으로 셀을 밀어버리는 것을 방지합니다.",
								links: [
									["table 스타일", "http://webberstudy.com/html-css/css-2/table-style/"],
									]

							}
						
							},
							{
								name: "다단 레이아웃",
								description: {
									text: "컨텐츠를 단으로 배치합니다.",
									links: [
										["MDN - 다단 레이아웃", "https://lit-element.polymer-project.org/"],
																		]
	
								}
							
								}
							]
						
						}
					]
				}
					
			]
		},
		{	
			name: "media query",
			skills:[

				{
					name: "media query",
					description: {
						text: "단말기의 유형(출력물 vs. 화면)과, 어떤 특성이나 수치(화면 해상도, 뷰포트 너비 등)에 따라 웹 사이트나 앱의 스타일을 수정할 때 유용합니다.",
						links: [
							["MDN - 미디어 쿼리 사용하기", "https://developer.mozilla.org/ko/docs/Web/CSS/Media_Queries/Using_media_queries"],
							]
					},
					
						
					
						skills:[
						{
					
							name: "flex",
							description: {
								text: "flex박스를 이용하여 레이아웃을 구성합니다.",
								links: [
										["MDN - flexbox", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"],
									]
							}
						},
						{
						name: "grid",
						description: {
							text: "grid 를 이용하여 문서 배치를 효율적으로 할 수 있습니다.",
							links: [
								["MDN - grid", "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid"],
						]
						},
					},
					{
						name: "complex",
						description: {
							text: "더 복잡한 쿼리들을 알아봅니다.",
							links: [
								]
						},
						skills:[
							{
							name: "논리곱",
							description: {
								text: "and를 사용해 미디어 기능을 결합할 수 있습니다.",
								links: [
										]
							},
							
						},
						{
							name: "논리합",
							description: {
								text: "쿼리들을 콤마로 분리할 수 있습니다. ",
								links: [
								]
							},
							
						},
						{
							name: "부정 논리",
							description: {
								text: "not 연산자를 사용하여 전체 미디어 쿼리를 부정할 수 있습니다. 이것은 미디어 쿼리의 전체 의미를 반대로 뒤집습니다. ",
								links: [
									]
							},
							
						},
					]
					},
					
						
					
				]
				},
			]
		},
		{	
			name: "reponsive design",
			skills:[
				{
					name: "reponsive design",
					description: {
						text: "반응형 웹 디자인에 대해 알아봅니다.",
						links: [
							["MDN - 반응형 디자인", "https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Responsive_Design"],
						]
					},
					skills: [
						{
							name: "분기점 선정",
							description: {
								text: "미디어 쿼리를 추가하고 디자인을 조정하면서 콘텐츠가 개선되는 위치를 파악하기 위해 뷰포트를 쉽게 크거나 작게 만들 수 있습니다.",
								links: [
									["MDN - 분기점을 선정하는 방법", "https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries#%EB%B6%84%EA%B8%B0%EC%A0%90%EC%9D%84_%EC%84%A0%EC%A0%95%ED%95%98%EB%8A%94_%EB%B0%A9%EB%B2%95"],
									]
	
							}
						
							},
							{
								name: "능동 학습",
								description: {
									text: "가장 작은 뷰로 시작한 뒤에 뷰포트의 크기 확대에 맞춰 조판을 추가합니다.",
									links: [
										["MDN - 능동학습", "https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries#%EB%8A%A5%EB%8F%99_%ED%95%99%EC%8A%B5_%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%9A%B0%EC%84%A0_%EB%B0%98%EC%9D%91%ED%98%95_%EB%94%94%EC%9E%90%EC%9D%B8"],
									]
		
								}
							
							},
							{
								name: "포인터",
								description: {
									text: "사용자가 요소 위에 (마우스 커서를) 올릴 수 있는 능력을 가진 조건인지를 시험할 수 있습니다.",
									links: [
										]
		
								}
							
								},
								{
								name: "정의",
								description: {
									text: "CSS가 무엇인지에 대해 배워봅니다.",
									links: [
											["MDN - 미디어 쿼리 초보자 안내서", "https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries#%EB%8A%A5%EB%8F%99_%ED%95%99%EC%8A%B5_%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%9A%B0%EC%84%A0_%EB%B0%98%EC%9D%91%ED%98%95_%EB%94%94%EC%9E%90%EC%9D%B8"],
														]
			
									}
								
									},
									{
									name: "기술",
									description: {
											text: "반응형 웹의 기술들에 대해 알아봅니다.",
											links: [
												["삼성 SDS - 반응형 웹의 기술들", "https://www.samsungsds.com/kr/insights/Responsive_web_1.html"],
												]
				
										},
										skills:[
										
											{
												name: "픽셀",
												description: {
													text: "픽셀은 화면을 구성하는 가장 기본이 되는 단위로 보통 ‘Picture Element’ 혹은 ‘화소’라고도 불립니다. ",
													links: [
															]
						
												}
											
											},
											{
												name: "뷰 포트",
												description: {
													text: "가독성이 좋은 뷰 포트를 만들 수 있습니다.",
													links: [
														["Apple - Configuring the Viewport", "https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/UsingtheViewport/UsingtheViewport.html"],
																]
						
												},
												skills:[
													{
														name: "옵션",
														description: {
															text: "여러 옵션을 적용하면 반응형 레이아웃과 미디어 쿼리 등의 상황에 잘 적응할 수 있습니다. ",
															links: [
																		]
								
														},
													}	


												]

											
											},
										

										]
									
										},
										{
										name: "모바일 퍼스트",
										description: {
												text: "초기부터 모바일을 중심으로 웹을 구축합니다.",
												links: [
													["MDN - 모바일 우선 반응 디자인", "https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Media_queries#%EB%8A%A5%EB%8F%99_%ED%95%99%EC%8A%B5_%EB%AA%A8%EB%B0%94%EC%9D%BC_%EC%9A%B0%EC%84%A0_%EB%B0%98%EC%9D%91%ED%98%95_%EB%94%94%EC%9E%90%EC%9D%B8"],
														]
					
											},
											skills:[
												{
													name: "Brad frost",
													description: {
														text: "Brad frost의 오픈소스를 통하여 모바일 웹 디자인을 해봅니다.",
														links: [
															["Brad frost", "https://bradfrost.com/"],
															["Btad frost 깃허브", "https://github.com/bradfrost"],
															]
							
													},
												}	


											]
										
									},
					]
				},
			]
				
		}
	]
}