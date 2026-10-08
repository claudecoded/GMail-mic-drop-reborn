// Robust observer to catch dynamically loaded Gmail compose windows
const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE) {
                // Find all potential send containers / formatting toolbars
                const containers = node.querySelectorAll('.gU.Up, tr.btC, [role="toolbar"]');
                containers.forEach(injectMicDropButton);
            }
        }
    }
});

observer.observe(document.body, { childList: true, subtree: true });

function injectMicDropButton(container) {
    // Avoid double injection
    if (container.querySelector('.mic-drop-btn')) return;

    // Locate the official Gmail Send button inside this container
    // Uses aria-label which is universally stable for accessibility
    const standardSendBtn = container.querySelector('[aria-label*="Send"], [data-tooltip*="Send"], .aoO');
    if (!standardSendBtn) return;

    // Create the custom Mic Drop button
    const micDropBtn = document.createElement('button');
    micDropBtn.className = 'T-I J-J5-Ji mic-drop-btn';
    micDropBtn.type = 'button';
    micDropBtn.innerText = 'Send + Mic Drop';
    micDropBtn.title = 'Send with Minion Mic Drop GIF';

    // Insert safely right next to the standard send button
    standardSendBtn.parentNode.insertBefore(micDropBtn, standardSendBtn.nextSibling);

    micDropBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        executeMicDrop(container, standardSendBtn);
    });
}

function executeMicDrop(container, sendButton) {
    // Find the closest wrapper of the current active compose box
    const composeBox = container.closest('.M9, .Hl, table');
    if (!composeBox) return;

    // Target the editable content area using stable role and aria-label attributes
    const emailBody = composeBox.querySelector('[role="textbox"][aria-label*="Body"], .Am.Al.editable');
    
    if (emailBody) {
        // High-availability alternative CDN link for the official 2016 Minion Mic Drop GIF
        const minionGifUrl = "https://giphy.com";
        
        emailBody.focus();
        
        // Append GIF using standard DOM manipulation to bypass strict CSP restrictions on insertHTML
        const br1 = document.createElement('br');
        const br2 = document.createElement('br');
        const img = document.createElement('img');
        img.src = minionGifUrl;
        img.alt = "Minion Mic Drop";
        img.width = 250;
        img.style.display = "block";
        img.style.marginTop = "15px";

        emailBody.appendChild(br1);
        emailBody.appendChild(br2);
        emailBody.appendChild(img);

        // Dispatches input event so Gmail updates its internal state to recognize the changes
        emailBody.dispatchEvent(new Event('input', { bubbles: true }));

        // Trigger the email send after a safe minimal delay
        setTimeout(() => {
            sendButton.click();
        }, 250);
    }
}
