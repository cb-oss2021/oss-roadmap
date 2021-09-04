import {css, html, LitElement} from "./../web_modules/lit-element.js";
import {repeat} from "./../web_modules/lit-html/directives/repeat.js";
import "./atoms/blur.js";
import "./atoms/compact-switch.js";
import {ALLOW_NATIVE_SHARE, DEFAULT_COMPACT_PX, getShareConfig} from "./config.js";
import {collections} from "./data.js";
import {auth, AuthEvents} from "./firebase/auth.js";
import "./molecules/collection.js";
import {sharedStyles} from "./styles/shared.js";
import {
	andreasIconTemplate,
	coffeeIconTemplate,
	githubIconTemplate,
	helpIconTemplate,
	shareIconTemplate
} from "./util/icons.js";
import {
	measureDimensions,
	measureException,
	measureInstallEvent,
	measureOpenHelp,
	measureOpenShare,
	measurePageView,
	measureShareLink,
	measureToggleCompact,
	measureUserTiming
} from "./util/measure.js";
import {
	copyToClipboard,
	currentSnackCount,
	dispatchCloseDescriptionEvent,
	getFirstVisit,
	getId,
	isDialogVisible,
	loadIsCompact,
	onClickLink,
	setFirstVisitDate,
	setIsCompact
} from "./util/util.js";

/**
 * Deferred init Firebase.
 * @returns {Promise<void>}
 */
async function deferredInitFirebase () {
	const {initFirebase} = await import("./firebase/init-firebase.js");
	await initFirebase();
}

/**
 * The main entry for the application.
 */
export class App extends LitElement {

	static get properties () {
		return {
			compact: {
				type: Boolean,
				reflect: true
			},
			dragging: {
				type: Boolean,
				reflect: true
			}
		}
	}

	static get styles () {
		return [
			sharedStyles,
			css`
				:host {
					display: block;
				}
				
				:host(:not([compact])) {
					cursor: grab;
				}
				
				:host(:not([compact])[dragging]) {
					cursor: grabbing;
					will-change: scroll-position;
					user-select: none;
				}
				
				#header {
					padding: var(--spacing-m) var(--spacing-l);
				}
				
				#collections {
					padding: var(--spacing-xxxl) var(--spacing-xxxl) 0;
					display: flex;
    			    flex-direction: column;
    			    align-items: flex-start;
    			    min-width: min-content;
				}
				
				#footer {
					padding: var(--spacing-l) var(--spacing-xxxl);
				}

				.collection:not(:last-child) {
					margin: 0 0 var(--spacing-xxl);
				}
				
				#header, #footer, #skip-navigation {
					justify-content: space-between;
				}
				
				#header, #header > div, #footer, #footer > div, #skip-navigation, #skip-navigation > div {
					display: flex;
					align-items: center;
				}
				
				#header > div > :not(:last-child),
				#footer > div > :not(:last-child) {
					margin: 0 var(--spacing-l) 0 0;
				}
				
				#avatar {
					display: flex;
					align-items: center;
					margin: 0 0 0 var(--spacing-l);
				}

				#avatar .img {
					width: 2.14rem;
					height: 2.14rem;
					border-radius: 100%;
					border: 2px solid currentColor;
					margin: 0 var(--spacing-m) 0 0;
				}

				:host([compact]) #collections {
					padding: 0 var(--spacing-l) var(--spacing-s);
				}
				
				:host([compact]) #footer {
					padding: var(--spacing-xxl) var(--spacing-l) var(--spacing-l);
				}

				:host([compact]) .collection {
					padding: var(--spacing-xl);
					border-radius: var(--border-radius-s);
				}

				:host([compact]) .collection:not(:last-child) {
					margin: 0 0 var(--spacing-l);
				}
				
				:host([compact]) #blur {
					display: none;
				}
				
				:host(:not([compact])) #header {
					position: fixed;
					top: 0;
					z-index: 1234567;
					width: 100%;
					background: var(--background-opaque);
				}
				
				#toggle-compact {
					display: flex;
					align-content: center;
				}
				
				a {
					color: var(--foreground);
					text-decoration: none;
				}
				
				kbd {
					font-family: inherit;
					background: var(--background);
					color: var(--foreground);
					padding: 0 var(--spacing-xs);
					border-radius: var(--border-radius-s);
				}
				
				#skip-navigation {
					position: fixed;
					width: 100%;
					opacity: 0;
					padding: var(--spacing-m);
					background: var(--foreground);
					color: var(--background);
					top: -9999px;
					left: -9999px;
					z-index: -12345;
					display: flex;
				}
				
				#skip-navigation:focus-within {
					outline: var(--focus-outline);
					z-index: 123456789;
					opacity: 1;
					left: 0;
					top: 0;
				}
				
				#coffee {
					position: relative;
				}
				
				#steam {
				  width: 80%;
				  position: absolute;
				  width: 40%;
				  bottom: 100%;
				  left: 50%;
				  animation: 5s linear steaming infinite;
				  filter: blur(3px);
				  color: #FFF;
				}
				
				@keyframes steaming {
				  0% {
				    opacity: 0;
					transform: translate(-50%, 100%) rotate(40deg);
				  }
				  10% {
				    opacity: 1;
				  }
				  70% {
				    opacity: 1;
				  }
				  100% {
				    opacity: 0;
					transform: translate(-50%, -10%) rotate(-10deg);
				  }
				}
				
				@media (max-width: 800px) {
					#toggle-compact {
						display: none;
					}
				}
				
				@media (max-width: 1000px) {
					#footer > div {
						flex-wrap: wrap;
						flex-grow: 1;
						justify-content: stretch;
						align-items: center;
					}
					
					#footer > div > * {
						padding: var(--spacing-m);
						width: 100%;
						border: 2px solid currentColor;
						margin: 0 0 var(--spacing-m) !important;
					}
				}
				
				@media (any-pointer: coarse) {
					#skip-navigation {
						display: none;
					}
				}
                #choice-road-map{
					margin: 0 auto;

				}
				#btn{
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					padding: 10px;
					font-size: 50px;
					font-weight: 400;
					text-align: center;
					text-decoration: none;
					border: none;
					border-radius: 4px;	
					display:inline-block;
					width: auto;
					box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
					0 2px 4px -1px rgba(0, 0, 0, 0.06);
  					cursor: pointer;
  					transition: 0.5s;
					background-color: rgb(230, 230, 230);
					margin:60px;
				}
				#btn:hover,btn:active, btn:focus{
					background-color: rgb(135, 138, 140);
				}
				#title{
					font-size:100px;
					text-align:center;
					margin: 0 auto;
				}
			`
		];
	}

	/**
	 * Setup the element after it has been connected.
	 */
	/**
	 * Hook up first updated.
	 * @param props
	 */
	/**
	 * Sets up listeners.
	 */
	setupListeners () {

		// Each time the auth changes we want to re-render
		auth.addEventListener(AuthEvents.authStateChanged, () => {
			this.requestUpdate().then();
		});

		// Measure all exceptions
		window.addEventListener("error", e => {
			const {message, filename, lineno, colno, error} = e;
			const description = `${error.name} - ${message} (${filename}:[${lineno}, ${colno}])`;
			measureException(description);
		});

		window.addEventListener("selectstart", e => {
			if (this.dragging) {
				e.preventDefault();
			}
		});

		// Close all descriptions when escape is pressed
		window.addEventListener("keydown", e => {
			switch (e.code) {
				case "Escape":
					dispatchCloseDescriptionEvent();
					break;
				case "Digit7":
					if (e.shiftKey && e.altKey) {
						this.focusNavigationSelect();
					}
					break;
			}
		});

		// Listen for CTA events
		window.addEventListener("click", onClickLink);

		// Listen for install event
		window.addEventListener("appinstalled", e => {
			measureInstallEvent();
		});

		// Listen for network changes
		window.addEventListener("online", this.networkChanged.bind(this));
		window.addEventListener("offline", this.networkChanged.bind(this));

		// Listen for hash change
		window.addEventListener("hashchange", this.hashChanged.bind(this));
	}

	/**
	 * Show message when network status changes.
	 * @returns {Promise<void>}
	 */
	async networkChanged () {
		const {showSnackbar} = await import("./util/show-snackbar.js");
		const message = navigator.onLine ? `You are online again` : `You lost connection to the internet`;
		showSnackbar(message, {
			timeout: navigator.onLine ? 4000 : null,
			important: true,
			buttons: [
				["Dismiss", () => ({})]
			]
		});
	}

	/**
	 * Handles that the hash changed.
	 */
	hashChanged () {
		if (location.hash.length > 0) {
			this.focusCollection(location.hash.slice(1));
		}
	}

	/**
	 * Setup dragging.
	 */
	setupDragging () {
		let initialPosition = null;
		let delta = null;
		let initialScroll = null;

		// Listen for drag start
		window.addEventListener("mousedown", e => {
			if (this.compact || isDialogVisible()) {
				return;
			}

			initialScroll = {
				x: window.scrollX,
				y: window.scrollY
			};

			initialPosition = {
				x: e.clientX,
				y: e.clientY
			};

			this.dragging = true;

		}, {passive: true});

		// Listen for drag end
		window.addEventListener("mouseup", e => {
			if (this.compact || isDialogVisible()) {
				return;
			}

			this.dragging = false;
			initialPosition = null;
			initialScroll = null;
			delta = null;
		}, {passive: true});

		// Listen for the dragging
		window.addEventListener("mousemove", e => {
			if (this.dragging
				&& !this.compact
				&& initialPosition != null
				&& !isDialogVisible()) {
				delta = {
					x: initialPosition.x - e.clientX,
					y: initialPosition.y - e.clientY
				};

				const scrollX = initialScroll.x + delta.x;
				const scrollY = initialScroll.y + delta.y;

				requestAnimationFrame(() => {
					window.scrollTo(scrollX, scrollY);

					// Deselect everything
					window.getSelection().removeAllRanges()
				});
			}
		}, {passive: true});
	}

	/**
	 * Shows a help toast.
	 * @returns {Promise<void>}
	 */
	/**
	 * Sets up the service worker.
	 * @returns {Promise<void>}
	 */
	async setupServiceWorker () {
		if (!("serviceWorker" in navigator)) return;

		// Register the service worker
		const reg = await navigator.serviceWorker.register(`sw.js`, {updateViaCache: "none"});
		if (reg == null) return;

		// Handle cases where the updatefound event was missed
		if (reg.waiting != null) {
			this.showUpdateToast();
		}

		// Reload when we get a new service worker and the user has clicked the "reload" button.
		const hasController = !!navigator.serviceWorker.controller;
		let isRefreshing = false;
		navigator.serviceWorker.addEventListener("controllerchange", async () => {
			if (!hasController && !isRefreshing) return;
			isRefreshing = true;
			location.reload();
		});

		// Show reload button when there's a new update
		reg.addEventListener("updatefound", () => {
			const newWorker = reg.installing;
			if (newWorker == null) return;
			newWorker.addEventListener("statechange", async () => {
				switch (newWorker.state) {
					case "installed":
						if (hasController) {
							this.showUpdateToast();
						}
						break;
					default:
						break;
				}
			});
		});

		// Check for update
		reg.update().then();

		// Check for updates every 10 minutes
		setInterval(() => {
			reg.update();
		}, 1000 * 60 * 10);
	};
    //메인페이지 onclick 이벤트

	/**
	 * Shows an update toast.
	 * @returns {Promise<void>}
	 */
	async showUpdateToast () {
		const {showSnackbar} = await import("./util/show-snackbar.js");
		showSnackbar(`Update available`, {
			important: true,
			buttons: [
				["Reload", async () => {
					const reg = await navigator.serviceWorker.getRegistration();
					if (reg == null || reg.waiting == null) return;
					reg.waiting.postMessage({action: "skipWaiting"});
				}],
				["Dismiss", () => ({})]
			]
		});
	}

	/**
	 * Sets up the compact property.
	 */
	setupCompact () {

		// Check whether the compact param should be as default
		const params = new URLSearchParams(location.search);
		if (params.get("compact") != null) {
			setIsCompact(true);
		}

		// Set initial compact
		this.compact = window.innerWidth <= DEFAULT_COMPACT_PX || loadIsCompact();
	}

	/**
	 * Signs in the user using Google.
	 */
	/**
	 * Signs out the user.
	 */

	/**
	 * Toggles compact mode.
	 * @param e
	 */
	toggleCompact (e) {
		const compact = e.detail;
		this.compact = compact;
		setIsCompact(compact);
		measureToggleCompact(compact);

		// Add the compact params to the URL
		const params = new URLSearchParams(location.search);
		if (compact) {
			params.set("compact", "true");
		} else {
			params.delete("compact");
		}

		const search = params.toString().replace(/=(true|false)$/gm, "");
		history.replaceState(null, "", search.length === 0 ? location.pathname : `${location.pathname}?${search}`);
	}

	/**
	 * Shares the website.
	 * @returns {Promise<void>}
	 */
	async share () {
		measureOpenShare();

		const config = getShareConfig();

		// When navigator.share and navigator.canShare works without issues in the future we don't need this check.
		if (ALLOW_NATIVE_SHARE) {
			try {
				await navigator.share(config);
				measureShareLink(`Native Share`);
				return;

			} catch (err) {

				// If the user cancelled the share we abort. This was the best cross-browser solution.
				const errorMessage = (err.message || err.toString()).toLowerCase();
				if (errorMessage.includes("cancellation") || errorMessage.includes("share canceled") || ("canShare" in navigator && navigator.canShare())) {
					return;
				}
			}
		}

		// Use the custom share
		try {
			// Open fallback share if possible
			const {openShare} = await import("./util/open-share.js");
			await openShare(config);

		} catch (err) {
			// As a last resort we just copy the link
			await copyToClipboard(config.url);
		}
	}

	/**
	 * Opens the help dialog.
	 * @returns {Promise<void>}
	 */
	async openHelp () {
		measureOpenHelp();
		const {openHelp} = await import("./util/open-help.js");
		await openHelp();
	}

	/**
	 * Selects a focus jump.
	 * @param name
	 */
	/**
	 * Focuses the navigation select.
	 */
	focusNavigationSelect () {
		const $navigationSelection = this.shadowRoot.querySelector("#navigation-select");
		$navigationSelection.focus();
	}

	/**
	 * Renders the element.
	 */
	render () {
		const {signIn, signOut} = this;
		const user = auth.user;

		return html`
			<header id="header">
				<div>
					<a href="https://github.com/cb-oss2021/oss-roadmap" target="_blank" rel="noopener" aria-label="Open Github" title="Open Github">
						<ws-icon hoverable .template="${githubIconTemplate}"></ws-icon>
					</a>
					${user != null ? html : undefined}
				</div>
				<div>
					<ws-button aria-label="Share website" @click="${this.share}" title="Open share menu">
						<ws-icon .template="${shareIconTemplate}"></ws-icon>
					</ws-button>
				</div>
			</header>
            
			<main id="collections">
				<div id="title">
					Computer Science<br> RoadMap
				</div>
                <div id= choice-road-map>
                    <button id=btn onclick="location='FrontEnd.html'">FrontEnd</button>
                    <button id=btn onclick="location='BackEnd.html'">BackEnd</button>
                </div>
			</main>
			
			
		
			<ws-blur id="blur"></ws-blur>
		`;
	}
}
customElements.define("ws-app", App);