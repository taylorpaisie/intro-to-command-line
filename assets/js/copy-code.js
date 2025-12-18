/* Adds a "Copy" button to each fenced code block (pre > code). */

(function () {
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

    blocks.forEach(function (code) {
      var pre = code.parentElement;
      if (!pre || pre.dataset.copyButtonInjected === 'true') return;

      pre.dataset.copyButtonInjected = 'true';

      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-code-button';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      button.textContent = 'Copy';

      button.addEventListener('click', function () {
        var text = code.innerText;
        button.disabled = true;

        copyTextToClipboard(text)
          .then(function () {
            var previous = button.textContent;
            button.textContent = 'Copied!';
            window.setTimeout(function () {
              button.textContent = previous;
              button.disabled = false;
            }, 1200);
          })
          .catch(function () {
            var previous = button.textContent;
            button.textContent = 'Failed';
            window.setTimeout(function () {
              button.textContent = previous;
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
