/* Fullscreen Menu scripts: */

jQuery(document).ready(function () {
    // 1. Lazy Loading Polyfill
    const lazyloadRunObserver = () => {
        const lazyloadBackgrounds = document.querySelectorAll('.e-con.e-parent:not(.e-lazyloaded)');
        const lazyloadBackgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('e-lazyloaded');
                    lazyloadBackgroundObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '200px 0px 200px 0px' });
        
        lazyloadBackgrounds.forEach((bg) => {
            lazyloadBackgroundObserver.observe(bg);
        });
    };

    // 2. Animation Polyfill for Elementor
    const triggerAnimations = () => {
        const elements = document.querySelectorAll('.elementor-invisible');
        elements.forEach(el => {
            const settings = el.getAttribute('data-settings');
            let animation = null;
            let delay = 0;

            if (settings) {
                try {
                    const config = JSON.parse(settings);
                    animation = config._animation;
                    delay = config._animation_delay || 0;
                } catch (e) {}
            }

            if (animation) {
                el.classList.remove('elementor-invisible');
                el.classList.add('animate__animated');
                el.classList.add('animate__' + animation);
                if (delay) {
                    el.style.animationDelay = delay + 'ms';
                }
                // Fallback: If still not visible after delay + duration, force show
                setTimeout(() => {
                    el.style.visibility = 'visible';
                    el.style.opacity = '1';
                }, delay + 1500);
            } else {
                el.classList.remove('elementor-invisible');
                el.style.visibility = 'visible';
                el.style.opacity = '1';
            }
        });
    };

    // 3. Page Initialization
    lazyloadRunObserver();
    setTimeout(triggerAnimations, 300);

    // Mutation Observer to handle dynamic content
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                triggerAnimations();
                lazyloadRunObserver();
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Handle events
    ['DOMContentLoaded', 'elementor/lazyload/observe'].forEach(e => {
        document.addEventListener(e, () => {
            lazyloadRunObserver();
            triggerAnimations();
        });
    });


			function uc_fullscreen_navigation_menu_elementor_351ef01_start() {


				var objWidget = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01");
				var objCheckbox = objWidget.find(".checkbox-toggle");
				var objInputWrapper = objWidget.find(".ue-input-wrapper-align");
				var classActive = "is-active";
				var objHamburgerMenu = objWidget.find(".ue_hamburger");
				var objAnimatedHamburger = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01 .uc_hamburger");
				var objAnimatedHamburgerLink = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01 .uc_animated_hamburger_icon");
				var isLoaded = false;

				var menuOpenedClass = "menu-opened";

				if (objCheckbox.is(":checked"))
					objCheckbox.removeAttr("checked");

				objCheckbox.prop('checked', false);
				objWidget.removeClass(menuOpenedClass);

				var objLinks = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01 .uc-list-menu a");
				var objBody = jQuery("body.elementor-page");
				var objHTML = jQuery("html");


				objHamburgerMenu.on("keydown", function (event) {
					var keyCode = event.keyCode;

					if (keyCode == 13 && objHamburgerMenu.is(":focus")) {
						var objToggleCheckbox = objWidget.find(".checkbox-toggle");
						objToggleCheckbox.trigger("click");
					}
				});


				objWidget.delegate(".checkbox-toggle", "click", function () {

					if (objCheckbox.is(":checked")) {
						objBody.addClass(menuOpenedClass);
						objHTML.addClass(menuOpenedClass);
						objWidget.addClass(menuOpenedClass);
						objMenu.collapseAll();
						objHamburgerMenu.attr("aria-expanded", true);

						objMenu.openCurrentPageMenuItem();
						if (isLoaded == false) {
							objMenu.expandAllAfterPageLoad();
						}

						isLoaded = true;

						objLinks.each(function () {
							var objLink = jQuery(this);
							toggleIcon(objLink);
						});

						if (objAnimatedHamburger && objAnimatedHamburger.length > 0) {
							objAnimatedHamburger.addClass(classActive);
							objAnimatedHamburgerLink.addClass(classActive);
						}

					} else {
						objBody.removeClass(menuOpenedClass);
						objHTML.removeClass(menuOpenedClass);
						objWidget.removeClass(menuOpenedClass);
						objHamburgerMenu.attr("aria-expanded", false);

						if (objAnimatedHamburger && objAnimatedHamburger.length > 0) {
							objAnimatedHamburger.removeClass(classActive);
							objAnimatedHamburgerLink.removeClass(classActive);
						}

					}
				});

				function toggleIcons() {
					var objLinks = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01 .uc-list-menu a");
					var objMenu = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01");
					var objExpandIcon = objMenu.find(".ue_inner_menu_expand_icon").html();
					var objCollapseIcon = objMenu.find(".ue_inner_menu_collapse_icon").html();

					objLinks.each(function () {
						var objLink = jQuery(this);
						var isLinkOpened = objLink.hasClass('expanded');
						var objLinkContainer = objLink.find('.uc-menu-item-pointer');

						// Update icon based on the state of the menu item
						if (isLinkOpened) {
							objLinkContainer.html(objCollapseIcon);
						} else {
							objLinkContainer.html(objExpandIcon);
						}
					});
				}

				function toggleIcon(objLink) {
					var isLinkOpened = objLink.hasClass('expanded');
					var objLinkContainer = objLink.find('.uc-menu-item-pointer');
					var objMenu = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01");
					var objExpandIcon = objMenu.find(".ue_inner_menu_expand_icon").html();
					var objCollapseIcon = objMenu.find(".ue_inner_menu_collapse_icon").html();

					// Update icon based on the state of the menu item
					if (isLinkOpened) {
						objLinkContainer.html(objCollapseIcon);
					} else {
						objLinkContainer.html(objExpandIcon);
					}

					// Update all icons
					toggleIcons();
				}


				jQuery(window).on("keydown", function (e) {
					if (e.key == "Escape") {
						if (objCheckbox.is(":checked"))
							objCheckbox.removeAttr("checked");

						objCheckbox.prop('checked', false);
						objWidget.removeClass(menuOpenedClass);

						objHTML.removeClass(menuOpenedClass);
					}
				});

				//imitate top position of the close icon
				var objMenu = jQuery('#uc_fullscreen_navigation_menu_elementor_351ef01');
				var objInnerMenu = objMenu.find('.ue_inner_menu');
				var objInput = objMenu.find('.checkbox-toggle');
				var objHamburger = objMenu.find('.ue_hamburger');
				var scrolledDistance;

				objInnerMenu.on('scroll', function (e) {
					scrolledDistance = objInnerMenu.scrollTop();

					objInput.css({
						'transform': 'translate(0, -' + scrolledDistance + 'px)',
						'transition': 'unset'
					});
					objHamburger.css({
						'transform': 'translate(0, -' + scrolledDistance + 'px)',
						'transition': 'unset'
					});
				});

				objWidget.delegate(".checkbox-toggle", 'click', function () {

					objInput.css({
						'transform': 'translate(0, 0)',
						'transition': ''
					});

					objHamburger.css({
						'transform': 'translate(0, 0)',
						'transition': ''
					});
				});



				if (typeof UCFullscreenMenu == "undefined")
					console.log("fullscreen menu error: the fullscreen file: menu.js in ac_assets folder is missing or empty, please check");

				var objMenu = new UCFullscreenMenu("uc_fullscreen_navigation_menu_elementor_351ef01 .ue_inner_menu");
				objMenu.runMenu();

				objLinks.click(function (e) {
					var objLink = jQuery(this);

					toggleIcon(objLink);

					var url = objLink.attr("href");
					url = jQuery.trim(url);

					if (!url)
						return (true);

					var objLinkParent = objLink.parent();
					var isClickable = jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01 .ue_inner_menu").data('clickable');

					function goToItem() {
						if (objCheckbox.is(":checked"))
							objCheckbox.removeAttr("checked");

						objCheckbox.prop('checked', false);
						objWidget.removeClass(menuOpenedClass);
						objAnimatedHamburger.removeClass(classActive);

						objBody.removeClass(menuOpenedClass);
						objHTML.removeClass(menuOpenedClass);
					}

					var expandCollapsed = jQuery('.uc-menu-item-pointer');
					var target = e.target

					if (expandCollapsed && expandCollapsed.length > 0 && target.className == expandCollapsed[0].className)
						return (true);

					if (isClickable == false) {

						if (objLinkParent.hasClass('menu-item-has-children'))
							return (true)
						else
							goToItem();

					} else {
						goToItem();
					}

					return (true);
				});



				objLinks.each(function () {
					objLink = jQuery(this);
					toggleIcon(objLink);
				});



				/**
				* fix for sticky parent section
				*/
				function initFixForStickyParent() {
					var objParents = objWidget.parents();
					var objStikyParent;

					objParents.each(function () {
						var objParent = jQuery(this);

						if (objParent.hasClass("elementor-sticky") == true) {
							var isParentVisible = objParent.is(":visible");

							if (isParentVisible == true) {
								objParent.addClass("uc-visible")
								objParent.removeClass("uc-hidden")
							} else {
								objParent.addClass("uc-hidden")
								objParent.removeClass("uc-visible")
							}

						}

					});
				}

				//init fix for sticky
				setTimeout(initFixForStickyParent, 300);

				jQuery(window).on("scroll", function () {
					//init fix for sticky
					setTimeout(initFixForStickyParent, 100);
				});

				// Fix: safari browser fullscrenn menu not displayed correctly
				jQuery(document).ready(function () {
					var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
					if (isSafari) {
						jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01").closest(".e-flex.e-con-boxed.e-con.e-parent").css("overflow", "visible");
					}
				});

			} if (jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01").length && !jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01").parents('[data-elementor-type="popup"]').length) uc_fullscreen_navigation_menu_elementor_351ef01_start();
			jQuery(document).on('elementor/popup/show', (event, id, objPopup) => {
				if (objPopup.$element.has(jQuery("#uc_fullscreen_navigation_menu_elementor_351ef01")).length) uc_fullscreen_navigation_menu_elementor_351ef01_start()
			});
		});

	
