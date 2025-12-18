/* Adds a "Copy" button to each fenced code block (pre > code). */

(function () {
  function makeClipboardIconSvg() {
    // Simple, original inline SVG (no external dependency)
    return (
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M16 4h-1.2a3 3 0 0 0-5.6 0H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm-4-1a1 1 0 0 1 .98.8l.04.2h-2l.04-.2A1 1 0 0 1 12 3Zm4 17H8V6h1.5v1.5h5V6H16v14Z"/>' +
      '</svg>'
    );
  }

  function makeCheckIconSvg() {
    return (
      '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">' +
      '<path fill="currentColor" d="M9.2 16.2 4.9 11.9l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4-9.9 9.9Z"/>' +
      '</svg>'
    );
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    // Fallback for non-secure contexts
    return new Promise(function (resolve, reject) {
      try {
        var textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(textarea);
        if (ok) resolve();
        else reject(new Error('Copy command failed'));
      } catch (err) {
        reject(err);
      }
    });
  }

  function enhanceCodeBlocks() {
    var blocks = document.querySelectorAll('pre > code');
    var clipboardSvg = makeClipboardIconSvg();
    var checkSvg = makeCheckIconSvg();

    blocks.forEach(function (code) {
      var pre = code.parentElement;
      if (!pre || pre.dataset.copyButtonInjected === 'true') return;

      pre.dataset.copyButtonInjected = 'true';

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-code-button';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      button.innerHTML = clipboardSvg;

      button.addEventListener('click', function () {
        var text = code.innerText;
        button.disabled = true;

        copyTextToClipboard(text)
          .then(function () {
            var previous = button.innerHTML;
            button.innerHTML = checkSvg;
            window.setTimeout(function () {
              button.innerHTML = previous;
              button.disabled = false;
            }, 1200);
          })
          .catch(function () {
            // Fall back to text on failure so the user gets a clear signal.
            var previous = button.innerHTML;
            button.textContent = 'Failed';
            window.setTimeout(function () {
              button.innerHTML = previous;
              button.disabled = false;
            }, 1200);
          });
      });

      pre.appendChild(button);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhanceCodeBlocks);
  } else {
    enhanceCodeBlocks();
  }
})();
