// ==UserScript==
// @name         Hide Substack Cookie Banner + Subscribe Modal
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Hide cookie banner and subscribe modal on Substack
// @match        https://*.substack.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const hideElements = () => {
        // Hide cookie banner
        document
            .querySelectorAll('[class^="cookieBanner-"], [class*=" cookieBanner-"]')
            .forEach(el => {
                el.style.display = 'none';
            });

        // Hide subscribe modal parent
        const subscribeNode = document.querySelector('[aria-label="Subscribe modal"]');
        if (subscribeNode && subscribeNode.parentElement) {
            subscribeNode.parentElement.style.display = 'none';
        }
    };

    hideElements();

    const observer = new MutationObserver(hideElements);
    observer.observe(document.documentElement, { childList: true, subtree: true });
})();

