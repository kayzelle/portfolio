function adjustIframeHeight() {
  const iframe = document.getElementById('contentFrame');
  if (iframe.contentWindow && iframe.contentWindow.document) {
    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
  }
}

document.getElementById('contentFrame').addEventListener('load', adjustIframeHeight);